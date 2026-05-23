from pydantic import BaseModel, Field


class AnimalBase(BaseModel):
    name: str = Field(..., min_length=2, examples=["Matriz 001"])
    species: str = Field(..., examples=["bovino"])
    breed: str = Field(..., examples=["Nelore"])
    lineage: str | None = Field(default=None, examples=["Linhagem A"])
    age_years: int = Field(..., ge=0, le=30, examples=[4])
    weight_kg: float | None = Field(default=None, ge=0, examples=[420.5])

    previous_inseminations: int = Field(default=0, ge=0)
    confirmed_pregnancies: int = Field(default=0, ge=0)
    abortions: int = Field(default=0, ge=0)
    births: int = Field(default=0, ge=0)
    reproductive_notes: str | None = None


class AnimalCreate(AnimalBase):
    pass


class AnimalResponse(AnimalBase):
    id: int

    class Config:
        from_attributes = True
