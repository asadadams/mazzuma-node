var reqwest = require("reqwest");
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

  //Making Payments
  makePaymentRequest(requestPayload) {
    return new Promise((resolve, reject) => {
      reqwest({
        url: `${this.BASE_URL}api_call.php`,
        method: "post",
        data: {
          price: requestPayload.price,
          network: requestPayload.sender_network,
          recipient_number: requestPayload.recipient_number,
          sender: requestPayload.sender_number,
          option: requestPayload.payment_network_flow,
          apikey: this.APIKEY,
          orderID: requestPayload.orderID
        },
        error: err => {
          reject(err);
        },
        success: res => {
          resolve(res);
        }
      });
    });
  }

  //Checking payment status
  checkTransactionStatus(transactionId) {
    return new Promise((resolve, reject) => {
      reqwest({
        url: `${this.BASE_URL}checktransaction.php?orderID=${transactionId}`,
        method: "get",
        error: err => {
          reject(err);
        },
        success: res => {
          resolve(res);
        }
      });
    });
  }
}

module.exports = Mazzuma;
