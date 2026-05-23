from fastapi import APIRouter

from app.ml.fertility_model import FertilityPatternAnalyzer
from app.schemas.ai import FertilityPatternInput, FertilityPatternResponse

router = APIRouter()


@router.post("/fertility-pattern", response_model=FertilityPatternResponse)
def analyze_fertility_pattern(payload: FertilityPatternInput):
    return FertilityPatternAnalyzer.analyze(**payload.model_dump())
