import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import  Taxes from './index.jsx';


const server = setupServer(
  rest.post('/api/taxes', (req, res, ctx) => {
  return res(ctx.json({ data: { taxes: 0} }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('when submit form', async () => {
  const container = render(<Taxes />)
  // const incomeInput  = container.querySelector('#income')  
  const incomeInput  = container.getByPlaceholderText('income')  
  fireEvent.change(incomeInput, { target: { value: 4000 } })
  fireEvent.click(screen.getByText('Submit'))
  expect(incomeInput.value).toBe("4000")
  await waitFor(() => screen.getByTestId('tax-discount'))
  expect(screen.getByTestId('tax-discount')).toHaveTextContent(
    'YOU DO NOT HAVE TO PAY ANY TAXES'
  )
})
