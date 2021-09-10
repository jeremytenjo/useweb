export const create = async (stripe, currency, amount, name) => {
  const amountInDollars = amount * 100

  try {
    const { error, token } = await stripe.createToken({ name })

    // return error
    if (error) {
      return { type: 'error', error }
    }

    const res = await fetch(`${window.apiURL}/stripe/charge`, {
      method: 'POST',
      body: JSON.stringify({
        token: token.id,
        amount: amountInDollars,
        currency,
        name,
      }),
    })

    // console.log(res)
    const data = await res.json()
    return data
  } catch (error) {
    // console.log(error)
    return {
      type: 'error',
      error: {
        message: 'Server error, please try again later',
      },
    }
  }
}
