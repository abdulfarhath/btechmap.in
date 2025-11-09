// /database/database.go
package database

import (
	"log"

	"btechmap-backend/model"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// DB is the shared database connection
var DB *gorm.DB

// InitDB initializes the database connection
func InitDB(dsn string) {
	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// Auto migrate
	err = DB.AutoMigrate(&model.User{}, &model.UserProgress{})
	if err != nil {
		log.Fatal("Failed to migrate database:", err)
	}

	log.Println("Database connected and migrated successfully")
}