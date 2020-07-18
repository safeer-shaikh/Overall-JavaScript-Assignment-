//part 1 and 2

var second = document.getElementById('main-content');
for (var i = 1; i < second.childNodes.length; i++){
	console.log(second.childNodes[i]);
}

// part 3

var div = document.getElementById("main-content");
var p = div.getElementsByTagName("p"); 
for (var i = 0; i < 5; i++) {
	var contents = p[i].innerHTML;
	document.write(contents + '<br>');
}

// part 4 and 5

var now = document.getElementById('first-name').value='safeer';
var also = document.getElementById('last-name').value='shaikh';
var also1 = document.getElementById('email').value='safeersheikh.ss@gmail.com';