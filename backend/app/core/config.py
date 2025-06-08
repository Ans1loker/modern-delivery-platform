import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./test.db")
    ALLOWED_ORIGINS: str = os.getenv("ALLOWED_ORIGINS", "*")

settings = Settings()
