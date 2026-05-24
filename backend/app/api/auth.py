from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.user import LoginRequest, LoginResponse
from app.services.auth_service import AuthService

router = APIRouter()


@router.post("/login", response_model=LoginResponse)
def login(credentials: LoginRequest, db: Session = Depends(get_db)):
    service = AuthService(db)
    user = service.login(credentials)
    return {
        "message": "Login realizado com sucesso",
        "user": user,
    }
