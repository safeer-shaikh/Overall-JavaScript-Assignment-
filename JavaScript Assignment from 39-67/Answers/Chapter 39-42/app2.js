var a = prompt('Enter values a: ', '');
var b = prompt('Enter values b: ', '');
var c = prompt('Enter values c: ', '');

function firstF(a, b, c){
	var s = (a + b + c) / 2;
	return s;
	function secondF(s){
		var res = s * (s - a)(s - b)(s - c);
		alert(res);
	}
}

firstF(a,b,c);

