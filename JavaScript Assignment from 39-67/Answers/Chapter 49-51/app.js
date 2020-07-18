
function printer(){
	var text = document.getElementById('firstName').value;
	var some1 = document.getElementById('secondName').value;
	var more1 = document.getElementById('thirdName').value;
	document.write('First Name is: ' + text + '<br>');
	document.write('Last Name is: ' + some1 + '<br>');
	document.write('Contact: ' + more1 + '<br>');
}