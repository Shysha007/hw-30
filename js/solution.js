 'use strict'

let elements = Array.from(document.querySelectorAll(`ul > li`));

let elemArr = arr => {
    let newArr = [];
    for (let elem of arr) {
        newArr.push(elem.innerHTML);
      }
      console.log(newArr.length);
      return newArr
}

console.log(elemArr(elements));




