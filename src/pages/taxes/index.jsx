import TaxesInfo from '../../components/collections/taxes_info'
import React, { useState } from 'react'
import axios from 'axios'

export default function Taxes(props) {
  let [taxes, setTaxes] = useState(0)
  let [hasDiscount, setHasDiscount] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    const { income } = event.target.elements;

    setHasDiscount(false)
    setTaxes(0)
    const data = {
      income: income.value
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/taxes'
    const options = {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }
    const response = await axios.post(endpoint, data)
    const taxes = response.data.data.taxes;
    console.log(taxes)
    setTaxes(taxes);
    if (taxes == 0) setHasDiscount(true)
  }

  return (
    <div className="w-full h-screen py-12 bg-white">
      <h1 className="text-3xl font-bold underline text-center">
        Welcome to your taxes cal
      </h1>
      <TaxesInfo hasDiscount={hasDiscount} />
      <div className="mx-2">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="income"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Income
          </label>
          <input
            type="text"
            id="income"
            name="income"
            placeholder="income"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
