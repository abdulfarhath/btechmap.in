// /handler/progress_handler.go
package handler

import (
	"btechmap-backend/database"
	"btechmap-backend/model"
	"encoding/json" // We need this
	"log"           

	"github.com/gofiber/fiber/v2"
	// "gorm.io/datatypes"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

// calculateScore calculates a score based on progress
func calculateScore(progressData *model.ProgressData) int {
	badgeCount := len(progressData.Badges)
	quizCount := len(progressData.QuizProgress)
	stepCount := len(progressData.CompletedSteps)

	// Scoring logic:
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


// SaveProgress handler (--- THIS IS THE FIXED FUNCTION ---)
func SaveProgress(c *fiber.Ctx) error {
	userID := c.Locals("userID").(uint)

    // --- START OF FIX ---
	// 1. Get the raw request body as bytes
	body := c.Body()
	
	// 2. Unmarshal the body bytes into our ProgressData struct for scoring
	var parsedData model.ProgressData
	if err := json.Unmarshal(body, &parsedData); err != nil {
		// If parsing fails, log it but don't fail the entire save
		log.Printf("Warning: Failed to parse progress JSON for scoring: %v", err)
	} else {
		// 3. Calculation will now work correctly
		totalScore := calculateScore(&parsedData)
		
		// 4. Update the User table with the new score
		if err := database.DB.Model(&model.User{}).Where("id = ?", userID).Update("total_score", totalScore).Error; err != nil {
			log.Printf("Warning: Failed to update total_score for user %d: %v", userID, err)
		}
	}
	// --- END OF FIX ---


	// 5. Save the raw body bytes to the UserProgress table
	// We use the raw 'body' variable here
	progress := model.UserProgress{
		UserID: userID,
		Data:   body, // body is already []byte, which is what datatypes.JSON expects
	}

	if err := database.DB.Clauses(clause.OnConflict{
		Columns:   []clause.Column{{Name: "user_id"}},
		DoUpdates: clause.AssignmentColumns([]string{"data"}),
	}).Create(&progress).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to save progress"})
	}

	return c.JSON(fiber.Map{"message": "Progress saved successfully"})
}