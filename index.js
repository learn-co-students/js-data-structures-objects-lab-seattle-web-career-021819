// Write your solution in this file!
const driver = {name: 'Sam', age: 15};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
  // this works but doesn't pass the test:
  // const newDriver = { ...driver };
  // newDriver[key] = value;
  // return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
};

function deleteFromDriverByKey(driver, key) {
  return driver = delete driver.key;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
};
