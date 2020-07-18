var text = 'Please read this application and give me gratuity';
function change(){
	for (var i = 0; i < text.length; i++) {
		if (text.slice(i, i + 2) == 'ea' || text.slice(i, i + 2) == 'ui' || text.slice(i, i + 1) == 'a' || text.slice(i, i + 1) == 'e' || text.slice(i, i + 1) == 'i' || text.slice(i, i + 1) == 'o' || text.slice(i, i + 1) == 'u'){
			text = text.slice(0, i) + '' + text.slice(i + 2);
		}
	}
	alert(text);
} 

change();