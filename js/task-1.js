function getCommonElements(array1, array2) {
  let commonElements = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      commonElements.push(array1[i]);
    }
  }

  return commonElements;
}

function getCommonElements(array1, array2) {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      array3.push(array1[i]);
    }
    return array3;
  }
}

console.log(checkStorage(['apple', 'plum', 'pear'], 'plum')); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
