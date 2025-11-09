// /config/config.go
package config

import (
	"log"
	"os"
)

// Config struct holds all configuration
var Config struct {
	DSN       string
	JWTSecret []byte
}

// LoadConfig loads config from env or sets defaults
func LoadConfig() {
	dsn := os.Getenv("DATABASE_DSN")
	if dsn == "" {
		dsn = "host=localhost user=farhath password=farhath dbname=btechmap port=5432 sslmode=disable"
	}
	Config.DSN = dsn

	jwtKey := os.Getenv("JWT_SECRET")
	if jwtKey == "" {
		jwtKey = "your-super-secret-key-change-this-in-production"
		log.Println("Warning: JWT_SECRET not set, using default key.")
	}
	Config.JWTSecret = []byte(jwtKey)
}