// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    const check = array.every((elements) => {
      return typeof elements === "string";
    });
    if (check === true) {
      const upperCaseArray = array.map((element) => {
        return element.toUpperCase();
      });
      resolve(upperCaseArray);
    } else {
      reject("error");
    }
  });
  return myPromise;
};
const sortWords = (array) => {
  const sorting = array.sort();
  return sorting;
};

// Calling (testing)

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
