import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TaxesInfo from './taxes_info'

test('loads and displays the title of the component', async () => {
  // ARRANGE
  render(<TaxesInfo />)
  // ACT
  screen.findByRole('heading')
  expect(screen.getByRole('heading')).toHaveTextContent('These are your taxes')
})

test('the optional message is not leaded when the prop hasDiscount is not present', async () => {
  const { container } = render(<TaxesInfo />)
  expect(container.querySelector('.tax-discount')).toBeNull()
})

test('loads an optional message when prop hasDiscount is true', async () => {
  render(<TaxesInfo hasDiscount={true} />)
  expect(screen.getByTestId('tax-discount')).toHaveTextContent(
    'YOU DO NOT HAVE TO PAY ANY TAXES'
  )
})
