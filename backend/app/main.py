from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.animals import router as animals_router
from app.api.ai import router as ai_router
from app.core.config import settings
from app.db.database import Base, engine


Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="API do projeto SIGEA para o Hackathon Expoagro Crateus.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "app": settings.APP_NAME,
        "version": settings.APP_VERSION,
    }


@app.get("/")
def root():
    return {
        "message": "API SIGEA funcionando",
        "docs": "/docs",
        "health": "/health",
    }


app.include_router(animals_router, prefix="/api/animals", tags=["Animals"])
app.include_router(ai_router, prefix="/api/ai", tags=["Artificial Intelligence"])
