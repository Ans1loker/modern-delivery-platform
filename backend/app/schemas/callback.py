from pydantic import BaseModel

class CallbackRequestCreate(BaseModel):
    company_name: str
    user_name: str
    phone: str
    email: str = None
    description: str = None

class CallbackRequestResponse(BaseModel):
    message: str
