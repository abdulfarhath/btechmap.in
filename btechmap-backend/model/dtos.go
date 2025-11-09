// /model/dtos.go
package model

// SignupRequest DTO
type SignupRequest struct {
	Name     string `json:"name" validate:"required"`
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=6"`
	College  string `json:"college" validate:"required"` // NEW
}

// LoginRequest DTO
type LoginRequest struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required"`
}

// AuthResponse DTO
type AuthResponse struct {
	Token string `json:"token"`
	User  struct {
		ID         uint   `json:"id"`
		Name       string `json:"name"`
		Email      string `json:"email"`
		College    string `json:"college"`     // NEW
		TotalScore int    `json:"total_score"` // NEW
	} `json:"user"`
}

// NEW: This struct will help us parse the progress JSON
type ProgressData struct {
	CompletedSteps map[string]bool                `json:"completedSteps"`
	QuizProgress   map[string]map[string]interface{} `json:"quizProgress"`
	Badges         map[string]map[string]interface{} `json:"badges"`
}