export function convertArrayToObject(arr) {
  let finalObj = {};

  // loop elements of the array
  for (let i = 0; i < arr.length; i++) {
    Object.assign(finalObj, arr[i]);
  }
  return finalObj;
}
