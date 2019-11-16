# Mazzuma Node.js Library

The Mazzuma Node library provides convenient access to the mazzuma API from applications written in server-side JavaScript.

Please keep in mind that this package is for use with server-side Node that use a mazzuma API key. In order to get this API key you must have an account with Mazzuma

## Installation

     npm install mazzuma-node-library --save


## Usage

The package needs to be configured with your account's API key which is available in your [dashboard](https://dashboard.mazzuma.com/apikey.php).

Initializing package

```
mazzuma = require("./src/Mazzuma");
mazzuma = new mazzuma(API_KEY);
```

Making a payment request

```
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
```

Checking transaction status

```
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
```

### Requests CONSTANTS

To specify the sender's network, these constants are available

| Constants               | Network  |
| ----------------------- | -------- |
| SENDER_NETWORK.MTN      | MTN      |
| SENDER_NETWORK.VODAFONE | Vodafone |
| SENDER_NETWORK.TIGO     | TIGO     |

To specify the network payment flow , these constants are available

| Constants                                 | Description          |
| ----------------------------------------- | -------------------- |
| PAYMENT_NETWORK_FLOW.MTN_TO_MTN           | MTN to MTN           |
| PAYMENT_NETWORK_FLOW.MTN_TO_TIGO          | MTN to Tigo          |
| PAYMENT_NETWORK_FLOW.MTN_TO_VODAFONE      | MTN to Vodafone      |
| PAYMENT_NETWORK_FLOW.TIGO_TO_MTN          | Tigo to MTN          |
| PAYMENT_NETWORK_FLOW.TIGO_TO_TIGO         | Tigo to Tigo         |
| PAYMENT_NETWORK_FLOW.TIGO_TO_VODAFONE     | Tigo to Vodafone     |
| PAYMENT_NETWORK_FLOW.VODAFONE_TO_MTN      | Vodafone to MTN      |
| PAYMENT_NETWORK_FLOW.VODAFONE_TO_TIGO     | Vodafone to Tigo     |
| PAYMENT_NETWORK_FLOW.VODAFONE_TO_VODAFONE | Vodafone to Vodafone |

## Me

Want to say hi? Will be happy to hear from you

- [Twitter](http:///www.twitter.com/asadadams)
- [Facebook](http://www.facebook.com/asad.adams)
- [Instagram](http://www.instagram.com/asadadams)
- [Mail](clarkpeace.adams@gmail.com)