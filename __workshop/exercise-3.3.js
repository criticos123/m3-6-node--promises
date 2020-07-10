// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: "d412892a56a0497683ff63203fe9376b",
    q: lat + "," + lng,
  };
  return opencage
    .geocode(requestObj)
    .then((data) => {
      return data.results[0].formatted;
    })
    .catch((error) => {
      console.log("error", error.message);
    });
}

getAddressFromPosition("48.8584", "2.2945").then((response) =>
  console.log(response)
);
