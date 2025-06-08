from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.endpoints import calculator, callback, health
from app.core.config import settings

app = FastAPI(
    title="Modern Delivery Platform API",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.ALLOWED_ORIGINS],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(calculator.router, prefix="/api/calculate", tags=["calculator"])
app.include_router(callback.router, prefix="/api/callback", tags=["callback"])
app.include_router(health.router, prefix="/api/health", tags=["health"])
