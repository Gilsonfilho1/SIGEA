from fastapi import Depends, FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

from app.api.deps import get_current_user
from app.api.animals import router as animals_router
from app.api.ai import router as ai_router
from app.api.auth import router as auth_router
from app.core.config import settings
from app.core.security import create_access_token, decode_access_token
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
    expose_headers=["X-Access-Token", "X-Token-Expires-In"],
)


@app.middleware("http")
async def refresh_access_token_on_activity(request: Request, call_next):
    response = await call_next(request)
    auth_header = request.headers.get("Authorization", "")

    if response.status_code < 400 and auth_header.startswith("Bearer "):
        token = auth_header.removeprefix("Bearer ").strip()
        try:
            payload = decode_access_token(token)
            subject = payload.get("sub")
            if subject:
                response.headers["X-Access-Token"] = create_access_token(subject)
                response.headers["X-Token-Expires-In"] = str(
                    settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60
                )
        except Exception:
            pass

    return response


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


app.include_router(
    animals_router,
    prefix="/api/animals",
    tags=["Animals"],
    dependencies=[Depends(get_current_user)],
)
app.include_router(
    ai_router,
    prefix="/api/ai",
    tags=["Artificial Intelligence"],
    dependencies=[Depends(get_current_user)],
)
app.include_router(auth_router, prefix="/api/auth", tags=["Authentication"])
