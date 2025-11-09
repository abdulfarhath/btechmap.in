// /model/models.go
package model

import (
	"time"
	"gorm.io/datatypes"
)

// User model
type User struct {
	ID        uint      `gorm:"primaryKey" json:"id"`
	Name      string    `gorm:"not null" json:"name"`
	Email     string    `gorm:"uniqueIndex;not null" json:"email"`
	Password  string    `gorm:"not null" json:"-"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// UserProgress model
type UserProgress struct {
	UserID uint           `gorm:"primaryKey"`
	User   User           `gorm:"foreignKey:UserID;constraint:OnDelete:CASCADE"`
	Data   datatypes.JSON `gorm:"type:jsonb"`
}