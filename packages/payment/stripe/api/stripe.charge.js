// const stripeTestToken = ''
// const stripeToken = ''

// const stripe = require('stripe')(stripeTestToken)

// const stripeCharge = async (req, res) => {
//   const body = JSON.parse(req.body)
//   const token = body.token
//   const amount = body.amount
//   const currency = body.currency
//   const name = body.name
//   const description = name + ' sent $' + amount

//   // console.log(token, amount, currency)

//   try {
//     let { status, ...rest } = await stripe.charges.create({
//       amount,
//       currency,
//       description,
//       source: token,
//     })

//     res.json({ status })
//   } catch (err) {
//     console.log(err)
//     res.status(500).end()
//   }
// }

// module.exports = stripeCharge
module.exports = {}
