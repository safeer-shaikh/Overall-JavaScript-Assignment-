var year = prompt('Enter any year to find its leap or not: ', '');

function check(year){
	if (year % 4 == 0) {
		alert('The year ' + year + ' is leap!')
	}
	else{
		alert('The year ' + year + ' is NOT leap!')
	}
}

check(year);