from pydantic import BaseModel, Field


class FertilityPatternInput(BaseModel):
    species: str = Field(..., examples=["bovino"])
    age_years: int = Field(..., ge=0, le=30)
    previous_inseminations: int = Field(default=0, ge=0)
    confirmed_pregnancies: int = Field(default=0, ge=0)
    abortions: int = Field(default=0, ge=0)
    births: int = Field(default=0, ge=0)


class FertilityPatternResponse(BaseModel):
    fertility_score: int
    risk_level: str
    pattern_identified: str
    recommendation: str
