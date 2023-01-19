const { calTaxes } = require('./index')

describe('taxes cal', () => {
  it('returns the 19% of the value when the article price is greater than 1M pesos', () => {
    const purchase = 2000000
    const taxes = calTaxes(purchase)
    expect(taxes).toBe(380000)
    // expect(value).toEqual(4);
  })

  it('returns 0 when the article value is less than 5000 pesos', () => {
    const purchase = 4900
    const taxes = calTaxes(purchase)
    expect(taxes).toBe(0)
  })

  it('returns null when no article value is provided', () => {
    const purchase = null
    const taxes = calTaxes(purchase)
    expect(taxes).toBe(null)
  })

  it('returns the 15% of the value when the article price is between 5000 to 1M pesos', () => {
    const purchase = 5000
    const taxes = calTaxes(purchase)
    expect(taxes).toBe(750)
  })
})
