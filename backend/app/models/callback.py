from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class CallbackRequest(Base):
    __tablename__ = "callback_requests"
    id = Column(Integer, primary_key=True, index=True)
    company_name = Column(String, index=True)
    user_name = Column(String)
    phone = Column(String)
    email = Column(String, nullable=True)
    description = Column(Text, nullable=True)
