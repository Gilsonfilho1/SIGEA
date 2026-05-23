from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.animal import AnimalCreate, AnimalResponse
from app.services.animal_service import AnimalService

router = APIRouter()


@router.post("", response_model=AnimalResponse)
def create_animal(animal: AnimalCreate, db: Session = Depends(get_db)):
    service = AnimalService(db)
    return service.create_animal(animal)


@router.get("", response_model=list[AnimalResponse])
def list_animals(db: Session = Depends(get_db)):
    service = AnimalService(db)
    return service.list_animals()
