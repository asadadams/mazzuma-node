const fetch = require("node-fetch");
class Mazzuma {
  constructor(APIKEY) {
    this.APIKEY = APIKEY;
    this.BASE_URL = "https://client.teamcyst.com/";
    this.PAYMENT_NETWORK_FLOW = {
      MTN_TO_MTN: "rmtm",
      MTN_TO_AIRTEL: "rmta",
      MTN_TO_VODAFONE: "rmtv",
      MTN_TO_TIGO: "rmtt",
      AIRTEL_TO_MTN: "ratm",
      AIRTEL_TO_AIRTEL: "rata",
      AIRTEL_TO_VODAFONE: "ratv",
      AIRTEL_TO_TIGO: "ratt",
      TIGO_TO_MTN: "rttm",
      TIGO_TO_AIRTEL: "rtta",
      TIGO_TO_VODAFONE: "rttv",
      TIGO_TO_TIGO: "rttt",
      VODAFONE_TO_MTN: "rvtm",
      VODAFONE_TO_AIRTEL: "rvta",
      VODAFONE_TO_VODAFONE: "rvtv",
      VODAFONE_TO_TIGO: "rvtt"
    };

    this.SENDER_NETWORK = {
      MTN: "mtn",
      TIGO: "tigo",
      AIRTEL: "airtel",
      VODAFONE: "vodafone"
    };
  }

  //Generating an id of a particular length
  generateOrderId(l = 7) {
    var text = "";
    var numberlist = "9922116754321098650123456789";
    for (var i = 0; i < l; i++) {
      text += numberlist.charAt(Math.floor(Math.random() * numberlist.length));
    }
    return text;
  }

  checkObjectProps(obj, arrayOfProps) {
    for (let i = 0; i < arrayOfProps.length; i++) {
      if (!obj.hasOwnProperty(arrayOfProps[i]))
        return { prop: arrayOfProps[i] };
    }
    return true;
  }

  //Making Payments
  makePaymentRequest(requestPayload) {
    return new Promise(async (resolve, reject) => {
      let arrayOfProps = [
        "price",
        "sender_network",
        "recipient_number",
        "sender_number",
        "payment_network_flow",
        "orderID"
      ];

      let checkPropsResult = await this.checkObjectProps(
        requestPayload,
        arrayOfProps
      );

      if (checkPropsResult === true) {
        if (requestPayload.sender_network) {
          if (requestPayload.payment_network_flow) {
            fetch(`${this.BASE_URL}api_call.php`, {
              method: "post",
              body: JSON.stringify({
                price: requestPayload.price,
                network: requestPayload.sender_network,
                recipient_number: requestPayload.recipient_number,
                sender: requestPayload.sender_number,
                option: requestPayload.payment_network_flow,
                apikey: this.APIKEY,
                orderID: requestPayload.orderID
              })
            })
              .then(res => res.json())
              .then(response => {
                resolve(response);
              })
              .catch(error => {
                reject(error);
              });
          } else {
            reject("Invalid payment_network_flow constant");
          }
        } else {
          reject("Invalid sender_network constant");
        }
      } else {
        reject(`"${checkPropsResult.prop}" prop missing in object`);
      }
    });
  }

  //Checking payment status
  checkTransactionStatus(transactionId) {
    return new Promise((resolve, reject) => {
      if (transactionId) {
        fetch(`${this.BASE_URL}checktransaction.php?orderID=${transactionId}`, {
          method: "get"
        })
          .then(res => res.json())
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      } else {
        reject("Transaction id is missing");
      }
    });
  }
}

module.exports = Mazzuma;
