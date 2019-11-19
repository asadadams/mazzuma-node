# Mazzuma Node.js Library

[![NPM](https://nodei.co/npm/mazzuma-node-library.png)](https://nodei.co/npm/mazzuma-node-library/)

![Open Source Love svg2](https://badgen.net/npm/dt/mazzuma-node-library)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/asadadams/mazzuma-node-library/graphs/commit-activity)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)

The Mazzuma Node library provides convenient access to the mazzuma API from applications written in server-side JavaScript.

Please keep in mind that this package is for use with server-side Node that use a mazzuma API key. In order to get this API key you must have an account with Mazzuma

## Installation

     npm install mazzuma-node-library --save

## Usage

The package needs to be configured with your account's API key which is available in your [dashboard](https://dashboard.mazzuma.com/apikey.php).

Initializing package

```
var Mazzuma = require("mazzuma-node-library");
var Maz = new Mazzuma.Mazzuma(APIKEY);
```

**OR**

```
import Mazzuma from "mazzuma-node-library";
var Maz = new Mazzuma.Mazzuma(APIKEY);
```

Making a payment request

```
Maz
  .makePaymentRequest({
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
```

Checking transaction status

```
Maz
  .checkTransactionStatus("234322")
  .then(response => {
    console.log(response);
    // {"code":200,"id":"XXXXX","status":"Successful"}
    // {"code":200,"id":"XXXXX","status":"Failed"}
    // {"code":200,"id":"XXXXX","status":"Pending"}
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
```

Generating orderID

```
Maz.generateOrderId(length);
```

length = length of IDs

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

## Todo

- Write Tests

**If you are a developer you can help me write tests**

## Me

Want to say hi? Will be happy to hear from you

- [Twitter](http:///www.twitter.com/asadadams)
- [Facebook](http://www.facebook.com/asad.adams)
- [Instagram](http://www.instagram.com/asadadams)
- [Mail](clarkpeace.adams@gmail.com)
