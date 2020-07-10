// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.

// Returns the current position of the ISS
const request = require("request-promise");

const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return {
        lat: parsedResponse.iss_position.latitude,
        lng: parsedResponse.iss_position.longitude,
      };
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};
getIssPosition().then((request) => console.log(request));
