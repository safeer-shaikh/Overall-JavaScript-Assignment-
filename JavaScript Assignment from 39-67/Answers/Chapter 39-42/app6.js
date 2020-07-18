var text = 'Pleases read this application and give me gratuity';
var count = 0;
function check(){
	for (var i = 0; i < text.length; i++) {
		if (text.slice(i, i + 2) == 'ea' || (text.slice(i, i + 2)) == 'ui') {
			count++;
		}
	}
	alert('Number of vowels occurence by two is: ' + count);
}

check();