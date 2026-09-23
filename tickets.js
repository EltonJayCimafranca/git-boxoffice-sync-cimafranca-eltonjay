function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isVIP) {
  let price = quantity * basePrice;

  if (quantity >= 5) {
    price *= 0.9;
  }

  if (isVIP) {
    price *= 1.5;
  }

  price -= 10;

  return Math.round(price);
}

module.exports = { isValidQuantity, calculateTicketPrice };
