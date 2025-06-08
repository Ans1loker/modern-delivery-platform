from pydantic import BaseModel

class DeliveryCalcRequest(BaseModel):
    from_address: str
    to_address: str
    delivery_type: str
    transport_type: str
    weight: float

class DeliveryCalcResponse(BaseModel):
    price: int
    delivery_time: str
