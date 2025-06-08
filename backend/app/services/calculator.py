def calculate_price(delivery_type, transport_type, weight):
    base_price = 400
    delivery_multiplier = {
        "express": 2.5,
        "fast": 1.5,
        "standard": 1.0,
        "scheduled": 0.8
    }
    transport_multiplier = {
        "foot": 1.0,
        "bike": 1.2,
        "car": 1.6,
        "van": 2.2
    }
    weight_multiplier = 1.0
    if weight > 5:
        weight_multiplier = 1 + (weight - 5) * 0.1

    price = int(base_price * delivery_multiplier[delivery_type] * transport_multiplier[transport_type] * weight_multiplier)
    return price
