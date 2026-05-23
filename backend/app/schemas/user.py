from uuid import UUID

from pydantic import BaseModel, EmailStr, Field


class UserCreate(BaseModel):
    cpf: str = Field(..., min_length=11, max_length=14)
    full_name: str = Field(..., min_length=3, max_length=150)
    email: EmailStr
    password: str = Field(..., min_length=6)
    type: int = Field(default=0, ge=0, le=1)


class UserResponse(BaseModel):
    id: UUID
    cpf: str
    full_name: str
    email: EmailStr
    type: int
    is_active: bool

    class Config:
        from_attributes = True


class LoginRequest(BaseModel):
    cpf: str
    password: str