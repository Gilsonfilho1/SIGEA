from sqlalchemy.orm import Session

from app.models.animal import Animal
from app.schemas.animal import AnimalCreate


class AnimalRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, animal_data: AnimalCreate) -> Animal:
        animal = Animal(**animal_data.model_dump())
        self.db.add(animal)
        self.db.commit()
        self.db.refresh(animal)
        return animal

    def list_all(self) -> list[Animal]:
        return self.db.query(Animal).order_by(Animal.id.desc()).all()
