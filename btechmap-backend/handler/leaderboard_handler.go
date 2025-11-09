// /handler/leaderboard_handler.go
package handler

import (
	"btechmap-backend/database"
	"btechmap-backend/model"

	"github.com/gofiber/fiber/v2"
)

// LeaderboardEntry DTO for the response
type LeaderboardEntry struct {
	Rank       int    `json:"rank"`
	Name       string `json:"name"`
	College    string `json:"college"`
	TotalScore int    `json:"total_score"`
}

// GetLeaderboard retrieves the top users
func GetLeaderboard(c *fiber.Ctx) error {
	college := c.Query("college")

	var users []model.User
	query := database.DB.Model(&model.User{})

	// Apply optional college filter
	if college != "" {
		query = query.Where("college ILIKE ?", "%"+college+"%") // ILIKE is case-insensitive
	}

	// Get top 50 users, ordered by score
	if err := query.Order("total_score desc").Limit(50).Select("name", "college", "total_score").Find(&users).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch leaderboard"})
	}

	// Add rank
	result := make([]LeaderboardEntry, len(users))
	for i, user := range users {
		result[i] = LeaderboardEntry{
			Rank:       i + 1,
			Name:       user.Name,
			College:    user.College,
			TotalScore: user.TotalScore,
		}
	}

	return c.JSON(result)
}