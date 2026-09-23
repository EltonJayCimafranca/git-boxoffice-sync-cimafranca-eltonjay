function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  let price = basePrice * quantity;

  if(quantity >= 5) {
    price *= 0.9; 
  }
  return Math.round(price);
}

module.exports = { isValidQuantity, calculateTicketPrice };
