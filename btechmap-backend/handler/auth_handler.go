// /handler/auth_handler.go
package handler

import (
	"log"

	"btechmap-backend/database"
	"btechmap-backend/model"
	"btechmap-backend/util"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/datatypes"
)

// Signup handler
func Signup(c *fiber.Ctx) error {
	var req model.SignupRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}
    
    // UPDATED: Added College
	if req.Email == "" || req.Password == "" || req.Name == "" || req.College == "" {
		return c.Status(400).JSON(fiber.Map{"error": "Name, email, password, and college are required"})
	}

	var existingUser model.User
	if err := database.DB.Where("email = ?", req.Email).First(&existingUser).Error; err == nil {
		return c.Status(409).JSON(fiber.Map{"error": "Email already registered"})
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to hash password"})
	}

	user := model.User{
		Name:     req.Name,
		Email:    req.Email,
		Password: string(hashedPassword),
		College:  req.College,  // NEW
		TotalScore: 0,         // NEW
	}

	if err := database.DB.Create(&user).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create user"})
	}

	emptyProgress := datatypes.JSON([]byte(`{"completedSteps": {}, "quizProgress": {}, "badges": {}}`))
	userProgress := model.UserProgress{UserID: user.ID, Data: emptyProgress}
	if err := database.DB.Create(&userProgress).Error; err != nil {
		log.Printf("Warning: Failed to create initial progress for user %d: %v\n", user.ID, err)
	}

	token, err := util.GenerateToken(user.ID)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to generate token"})
	}
    
    // UPDATED: Populate all user fields in response
	response := model.AuthResponse{Token: token}
	response.User.ID = user.ID
	response.User.Name = user.Name
	response.User.Email = user.Email
	response.User.College = user.College
	response.User.TotalScore = user.TotalScore

	return c.Status(201).JSON(response)
}

// Login handler
func Login(c *fiber.Ctx) error {
	var req model.LoginRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	var user model.User
	if err := database.DB.Where("email = ?", req.Email).First(&user).Error; err != nil {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid email or password"})
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)); err != nil {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid email or password"})
	}

	token, err := util.GenerateToken(user.ID)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to generate token"})
	}
    
    // UPDATED: Populate all user fields in response
	response := model.AuthResponse{Token: token}
	response.User.ID = user.ID
	response.User.Name = user.Name
	response.User.Email = user.Email
	response.User.College = user.College
	response.User.TotalScore = user.TotalScore

	return c.JSON(response)
}

// GetMe handler
func GetMe(c *fiber.Ctx) error {
	userID := c.Locals("userID").(uint)

	var user model.User
	if err := database.DB.First(&user, userID).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"error": "User not found"})
	}
    
    // UPDATED: Return all user fields
	return c.JSON(fiber.Map{
		"id":    user.ID,
		"name":  user.Name,
		"email": user.Email,
		"college": user.College,
		"total_score": user.TotalScore,
	})
}

// Logout handler
func Logout(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{"message": "Logged out successfully"})
}