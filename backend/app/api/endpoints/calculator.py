from fastapi import APIRouter
from app.schemas.delivery import DeliveryCalcRequest, DeliveryCalcResponse
from app.services.calculator import calculate_price

router = APIRouter()

@router.post("/", response_model=DeliveryCalcResponse)
async def calculate_delivery(data: DeliveryCalcRequest):
    price = calculate_price(data.delivery_type, data.transport_type, data.weight)
    time_map = {
        "express": "30-60 минут",
        "fast": "1-2 часа",
        "standard": "2-4 часа",
        "scheduled": "по расписанию"
    }
    return DeliveryCalcResponse(
        price=price,
        delivery_time=time_map[data.delivery_type]
    )
