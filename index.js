// Write your solution in this file!

const driver = new Object();

const updateDriverWithKeyAndValue = (obj,key,val) => {
  // const newObj = {...obj};
  const newObj =  Object.assign({},obj);

  newObj[key] = val;

  return newObj;
}

const destructivelyUpdateDriverWithKeyAndValue = (obj,key,val) => {
  obj[key] = val
  return obj
}

const deleteFromDriverByKey = (obj,key) => {
  // const newObj = {...obj};
  const newObj =  Object.assign({},obj);

  delete newObj[key];
  return newObj;
}

const destructivelyDeleteFromDriverByKey = (obj,key) => {
  delete obj[key];
  return obj;
}
