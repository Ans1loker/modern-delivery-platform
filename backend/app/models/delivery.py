from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class DeliveryCalculation(Base):
    __tablename__ = "delivery_calculations"
    id = Column(Integer, primary_key=True, index=True)
    from_address = Column(String, index=True)
    to_address = Column(String, index=True)
    delivery_type = Column(String)
    transport_type = Column(String)
    weight = Column(Float)
    price = Column(Integer)
