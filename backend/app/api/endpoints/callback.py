from fastapi import APIRouter, status
from app.schemas.callback import CallbackRequestCreate, CallbackRequestResponse

router = APIRouter()

@router.post("/", response_model=CallbackRequestResponse, status_code=status.HTTP_201_CREATED)
async def request_callback(data: CallbackRequestCreate):
    # Здесь должен быть вызов сервиса для сохранения заявки в БД (mock для MVP)
    return CallbackRequestResponse(message="Спасибо! Мы свяжемся с вами в ближайшее время.")
