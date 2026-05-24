from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.security import verify_password
from app.repositories.user_repository import UserRepository
from app.schemas.user import LoginRequest


class AuthService:
    def __init__(self, db: Session):
        self.repository = UserRepository(db)

    def login(self, credentials: LoginRequest):
        user = self.repository.get_by_cpf(credentials.cpf)

        if not user or not verify_password(credentials.password, user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="CPF ou senha invalidos",
            )

        if not user.is_active:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Usuario inativo",
            )

        return user
