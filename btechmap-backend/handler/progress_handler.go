// /handler/progress_handler.go
package handler

import (
	"btechmap-backend/database"
	"btechmap-backend/model"
	"encoding/json" 
	"log"           

	"github.com/gofiber/fiber/v2"
	"gorm.io/datatypes"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

// calculateScore calculates a score based on progress
// --- UPDATED SCORING LOGIC ---
func calculateScore(progressData *model.ProgressData) int {
	badgeCount := len(progressData.Badges)
	quizCount := len(progressData.QuizProgress)
	stepCount := len(progressData.CompletedSteps)

	// NEW LOGIC:
	// 10 points per badge
	// 5 points per passed quiz
	// 1 point per completed step
	totalScore := (badgeCount * 10) + (quizCount * 5) + (stepCount * 1)
	return totalScore
}

// GetProgress handler (This function is fine)
func GetProgress(c *fiber.Ctx) error {
	userID := c.Locals("userID").(uint)

	var progress model.UserProgress
	if err := database.DB.Where("user_id = ?", userID).First(&progress).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.JSON(fiber.Map{
				"completedSteps": fiber.Map{},
				"quizProgress":   fiber.Map{},
				"badges":         fiber.Map{},
			})
		}
		return c.Status(500).JSON(fiber.Map{"error": "Failed to retrieve progress"})
	}

	return c.JSON(progress.Data)
}


// SaveProgress handler (This function is now correct)
func SaveProgress(c *fiber.Ctx) error {
	userID := c.Locals("userID").(uint)

	var progressData datatypes.JSON
	if err := c.BodyParser(&progressData); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	// --- Calculate Score ---
	var parsedData model.ProgressData
	if err := json.Unmarshal(progressData, &parsedData); err != nil {
		log.Printf("Warning: Failed to parse progress JSON for scoring: %v", err)
	} else {
		// Calculation will now work correctly
		totalScore := calculateScore(&parsedData)
		
		// Update the User table
		if err := database.DB.Model(&model.User{}).Where("id = ?", userID).Update("total_score", totalScore).Error; err != nil {
			log.Printf("Warning: Failed to update total_score for user %d: %v", userID, err)
		}
	}
	// --- END: Calculate Score ---


	// Save the raw JSON to UserProgress (as before)
	progress := model.UserProgress{
		UserID: userID,
		Data:   progressData,
	}

	if err := database.DB.Clauses(clause.OnConflict{
		Columns:   []clause.Column{{Name: "user_id"}},
		DoUpdates: clause.AssignmentColumns([]string{"data"}),
	}).Create(&progress).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to save progress"})
	}

	return c.JSON(fiber.Map{"message": "Progress saved successfully"})
}