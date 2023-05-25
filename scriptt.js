function initiatePayment(payload) {
    let data = {
      token: payload.token,
      amount: payload.amount,
    };
  
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Key test_secret_key_5574742694e948f4b41bde3da65b1231",
      },
      body: JSON.stringify(data),
    };
  
    fetch("https://cors-anywhere.herokuapp.com/https://khalti.com/api/v2/payment/verify/", config)
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }