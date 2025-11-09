// /main.go
package main

import (
	"log"

	"btechmap-backend/config"
	"btechmap-backend/database"
	"btechmap-backend/handler"
	"btechmap-backend/util"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	// 1. Load config (from .env or defaults)
	config.LoadConfig()

	// 2. Connect to database
	database.InitDB(config.Config.DSN)

	// 3. Create Fiber app
	app := fiber.New(fiber.Config{
		ErrorHandler: util.CustomErrorHandler,
	})

	// 4. Setup CORS
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",
		AllowCredentials: true,
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization",
		AllowMethods:     "GET, POST, PUT, DELETE, OPTIONS",
	}))

	// 5. Setup all routes
	handler.SetupRoutes(app)

	// 6. Start server
	log.Fatal(app.Listen(":8080"))
}