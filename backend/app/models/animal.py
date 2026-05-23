from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.sql import func

from app.db.database import Base


class Animal(Base):
    __tablename__ = "animals"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    species = Column(String(30), nullable=False)  # bovino, ovino, caprino
    breed = Column(String(80), nullable=False)
    lineage = Column(String(120), nullable=True)
    age_years = Column(Integer, nullable=False)
    weight_kg = Column(Float, nullable=True)

    previous_inseminations = Column(Integer, default=0)
    confirmed_pregnancies = Column(Integer, default=0)
    abortions = Column(Integer, default=0)
    births = Column(Integer, default=0)
    reproductive_notes = Column(String(500), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
