var dist = prompt('Enter distance in Kilometre: ', '')
var distance = Number(dist);

function changeToMeter(){
	var meter = distance*1000;
	alert('Entered data converted to Metre: ' + meter);
}

function changeToFeet(){
	var feet = distance*3280;
	alert('Entered data converted to feet: ' + feet);	
}

function changeToInch(){
	var inch = distance*39370;
	alert('Entered data converted to Inches: ' + inch);
}

function changeToCentimeter(){
	var centimeter = distance*100000;
	alert('Entered data converted to Centimetre: ' + centimeter);
}

changeToMeter();
changeToFeet();
changeToInch();
changeToCentimeter();