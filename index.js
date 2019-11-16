mazzuma = require("./src/Mazzuma");
mazzuma = new mazzuma("527a0b2798ff67b572aeadc81b8703f3c461c720");

mazzuma
  .makePaymentRequest({
    price: 1,
    sender_network: mazzuma.SENDER_NETWORK.MTN,
    recipient_number: "0207368257",
    sender_number: "024444444",
    payment_network_flow: mazzuma.PAYMENT_NETWORK_FLOW.MTN_TO_VODAFONE,
    orderID: "348967533"
  })
  .then(response => {
    console.error(`Response: ${response}`);
    //{"code":1,"status":"success","id":"XXXXX"}
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

mazzuma
  .checkTransactionStatus("234322")
  .then(response => {
    console.error(`Response: ${response}`);
    // {"code":200,"id":"XXXXX","status":"Successful"}
    // {"code":200,"id":"XXXXX","status":"Failed"}
    // {"code":200,"id":"XXXXX","status":"Pending"}
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

//module.exports = mazzuma;
