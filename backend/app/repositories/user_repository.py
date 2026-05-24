from sqlalchemy.orm import Session

from app.models.user import User


class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_cpf(self, cpf: str) -> User | None:
        return self.db.query(User).filter(User.cpf == cpf).first()
