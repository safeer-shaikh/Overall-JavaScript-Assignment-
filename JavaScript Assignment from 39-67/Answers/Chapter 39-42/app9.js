var cash = prompt('Enter amount to withdraw', '');
var hundreds = Math.floor(cash/100);
var remainingH = cash%100;
var fifty = Math.floor(remainingH/50);
var remainingF = remainingH%50;
var ten = Math.floor(remainingF/10);
var remainingT = remainingF%10;
alert('you will have ' + hundreds + ' hundred notes ' + fifty + ' fifty notes and ' + ten + ' ten notes');