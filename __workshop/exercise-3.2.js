// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: "d412892a56a0497683ff63203fe9376b",
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((data) => {
      return data.results[0].geometry;
    })
    .catch((error) => {
      console.log("error", error.message);
    });
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));
