// /handler/routes.go
package handler

import (
	"btechmap-backend/middleware"

	"github.com/gofiber/fiber/v2"
)

// SetupRoutes registers all routes
func SetupRoutes(app *fiber.App) {
	api := app.Group("/api")

	// Auth routes
	api.Post("/signup", Signup)
	api.Post("/login", Login)
	api.Get("/me", middleware.AuthMiddleware, GetMe)
	api.Post("/logout", middleware.AuthMiddleware, Logout)

	// Progress routes
	api.Get("/progress", middleware.AuthMiddleware, GetProgress)
	api.Post("/progress", middleware.AuthMiddleware, SaveProgress)

	// Health check
	api.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "ok"})
	})
}