const { calTaxes } = require('../../helpers')

export default function handler(req, res) {
  if (req.method === 'POST') { 
    console.log('request body: ', req.body.income)
    const income = req.body.income;
    const taxes = calTaxes(income);
    res.status(200).json({ data: { taxes } })
  } else if (req.method === 'GET') {
    res.status(200).json({ data: { message: "echo endpoint" } })
  } else {
    res.status(422).json({ error: { message: "could not process the request" }})
  }
}
