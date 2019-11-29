Mazzuma = require("../src/Mazzuma");

var Maz = new Mazzuma("APIKEY");

Maz.makePaymentRequest({
  price: 1,
  sender_network: Maz.SENDER_NETWORK.MTN,
  recipient_number: "0205555555",
  sender_number: "024444444",
  payment_network_flow: Maz.PAYMENT_NETWORK_FLOW.MTN_TO_VODAFONE,
  orderID: "348967533"
})
  .then(response => {
    console.log(response);
    //{"code":1,"status":"success","id":"XXXXX"}
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

Maz.checkTransactionStatus("234322")
  .then(response => {
    console.log(response);
    // {"code":200,"id":"XXXXX","status":"Successful"}
    // {"code":200,"id":"XXXXX","status":"Failed"}
    // {"code":200,"id":"XXXXX","status":"Pending"}
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
