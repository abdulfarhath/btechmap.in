// /handler/progress_handler.go
package handler

import (
	"btechmap-backend/database"
	"btechmap-backend/model"

	"github.com/gofiber/fiber/v2"
	"gorm.io/datatypes"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

// GetProgress handler
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

// SaveProgress handler
func SaveProgress(c *fiber.Ctx) error {
	userID := c.Locals("userID").(uint)

	var progressData datatypes.JSON
	if err := c.BodyParser(&progressData); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

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