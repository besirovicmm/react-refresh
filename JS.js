const obecanje = () => {
  return (momsPromise = new Promise(function (resolve, reject) {
    momsSavings = 20000
    priceOfPhone = 60000
    if (momsSavings > priceOfPhone) {
      resolve({
        brand: 'iphone',
        model: '6s',
      })
    } else {
      reject('We donot have enough savings. Let us save some more money.')
    }
  }))
}
// momsPromise
//   .then(function (value) {
//     console.log('Hurray I got this phone as a gift ', JSON.stringify(value))
//   })
//   .catch((err) => {
//     console.log(err)
//   })

const doSomething = async () => {
  try {
    let response = await obecanje()
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}

doSomething()
