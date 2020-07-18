var Maths = prompt('Enter marks of maths out of 100: ', '');
var Chem = prompt('Enter marks of chemistry out of 100 ', '');
var Phy = prompt('Enter marks of physics out of 100: ', '');
var maths = Number(Maths);
var chem = Number(Chem);
var phy = Number(Phy);
var total = 300;

function main(){
	var avg = (maths + chem + phy)/3;
	var perc = ((maths + chem + phy)/300)*100;
	alert('Your average is: ' + avg);
	alert('your peprcentage is: ' + perc); 
}

main();