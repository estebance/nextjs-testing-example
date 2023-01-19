const LOWER_LIMIT = 5000
const BIGGEST_LIMIT = 1000000

let calTaxes = purchaseValue => {
  // obtain the 19& when price is over 1M
  if (!purchaseValue) return null
  let taxes = 0
  if (purchaseValue > BIGGEST_LIMIT) {
    taxes = purchaseValue * 0.19
  } else if (purchaseValue >= LOWER_LIMIT && purchaseValue < BIGGEST_LIMIT) {
    taxes = purchaseValue * 0.15
  } else {
    console.info('no taxes should be paid')
  }
  return taxes
}

module.exports = {
  calTaxes
}
