from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "AgroGen IA API"
    APP_VERSION: str = "0.1.0"
    ENVIRONMENT: str = "development"

    DATABASE_URL: str = "postgresql+psycopg2://agrogen:agrogen123@localhost:5432/agrogen_db"
    BACKEND_CORS_ORIGINS: str = "http://localhost:5173,http://127.0.0.1:5173"

    @property
    def cors_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.BACKEND_CORS_ORIGINS.split(",") if origin.strip()]

    class Config:
        env_file = ".env"


settings = Settings()
