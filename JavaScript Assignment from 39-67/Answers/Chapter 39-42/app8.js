var hrs = prompt('write overtime in hrs from 1-10', '');
var value = 12;
switch (hrs) {
	case '1':
		alert('your overtime paid is Rs:12')
		break;
	case '2':
		alert('your overtime paid is Rs:24')
		break;
	case '3':
		alert('your overtime paid is Rs:36')
		break;
	case '4':
		alert('your overtime paid is Rs:48')
		break;
	case '5':
		alert('your overtime paid is Rs:60')
		break;
	case '6':
		alert('your overtime paid is Rs:72')
		break;
	case '7':
		alert('your overtime paid is Rs:84')
		break;
	case '8':
		alert('your overtime paid is Rs:96')
		break;
	case '9':
		alert('your overtime paid is Rs:108')
		break;
	case '10':
		alert('your overtime paid is Rs:120')
		break;
	default:
		alert('you didnt worked enough')
		break;
}