// part 1

var check = document.getElementById('form-content');
console.log(check.nodeType); //return 1 as it is a type of element (div)

// part 2 and 3

var check2 = document.getElementById('last-name');
console.log(check2.nodeType); // return 1 as it is a type of element (input)
console.log(check2.childNodes); //no child nodes length = 0

// part 4

var check3 = document.getElementById('form-content');
console.log(check3.childNodes[0])
console.log(check3.childNodes[6])

// part 5

var check4 = document.getElementById('last-name');
console.log(check4.previousSibling);
console.log(check4.nextSibling);

//part 6

var check5 = document.getElementById('email');
console.log(check5.parentNode); // show div in console
console.log(check5.nodeType); // shows 1 as an element