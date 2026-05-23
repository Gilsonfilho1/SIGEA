from sqlalchemy.orm import Session

from app.repositories.animal_repository import AnimalRepository
from app.schemas.animal import AnimalCreate


class AnimalService:
    def __init__(self, db: Session):
        self.repository = AnimalRepository(db)

    def create_animal(self, animal_data: AnimalCreate):
        return self.repository.create(animal_data)

    def list_animals(self):
        return self.repository.list_all()
