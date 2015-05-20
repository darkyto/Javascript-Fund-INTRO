console.log('===================');
console.log('Problem 001 - results :');
var aNum = [5,3,5.5];
var bNum = [2,4,4.5];
for (var i = 0; i < aNum.length; i+=1) {
	if (aNum[i] > bNum[i]) {
		aNum[i] = aNum[i] + bNum[i];
		bNum[i] = aNum[i] - bNum[i];
		aNum[i] = aNum[i] - bNum[i];
	}
	console.log(aNum[i]+' '+bNum[i]);
}
console.log('End of problem 001!');
console.log('===================');
console.log('Problem 002 - results :');
var signFinder = function(a,b,c) {
	var nullCheck = (a*1 === 0) || (b*1 === 0) || (c*1 === 0);
	if (nullCheck) {
		return 0;
	}
	else if (a < 0 && b < 0 && c < 0) {
		return '-';
	}
	else if (a > 0 && b > 0 && c < 0) {
		return '-';
	}
	else if (a > 0 && b < 0 && c > 0) {
		return '-';
	}
	else if (a < 0 && b > 0 && c > 0) {
		return '-';
	}
	else {
		return '+';
	}
};
var aNums = [5,-2,-2, 0, -1];
var bNums = [2,-2, 4,-2.5,-0.5];
var cNums = [2, 1, 3, 4,-5.1];
for (var i = 0; i < aNums.length; i+=1) {
	console.log('['+aNums[i] +' '+bNums[i]+' '+cNums[i]+']');
	console.log(signFinder(aNums[i],bNums[i],cNums[i]));
}
console.log('End of problem 002!');
console.log('===================');
console.log('Problem 003 - results :');
var aNums = [5,-2,-2, 0, -1];
var bNums = [2,-2, 4,-2.5,-0.5];
var cNums = [2, 1, 3, 5,-0.1];
function theBiggestNum(a,b,c) {
	if (a >= b && a >= c) return a;
	else if (b >= c) return b;
	else return c;
}
for (var i = 0; i < aNums.length; i+=1) {
	console.log(theBiggestNum(aNums[i],bNums[i],cNums[i]));
}
console.log('End of problem 003!');
console.log('===================');
console.log('Problem 004 - results :');
var aNums = [5,-2,-2, 0, -1.1, 10, 1];
var bNums = [1,-2, 4,-2.5,-0.5, 20, 1];
var cNums = [2, 1, 3, 5,-0.1, 30, 1];
var sortThreeNums = function (a,b,c) {
	if (a >= b && a >= c) {
		if (b >= c) return a+' '+b+' '+c;
		else return a+' '+c+' '+b;
	}
	else if (b >= c) {
		if (a >= c) return b+' '+a+' '+c;
		else return b+' '+c+' '+a;
	}
	else {
		if (b >= a) return c+' '+b+' '+a;
		else return c+' '+a+' '+b;
	}	
};
for (var i = 0; i < aNums.length; i+=1) {
	console.log(sortThreeNums(aNums[i],bNums[i],cNums[i]));
}
console.log('End of problem 004!');
console.log('===================');
console.log('Problem 005 - results :');
var aNums = [2, 1, 0, 5, -0.1, 'hi', 9, 10];
var digitNamer = function (input) {
	var output = 0;
	switch (input) {
		case 0 : 
			output ='zero';
			break;
		case 1 : 
			output = 'one';
			break;
		case 2 : 
			output = 'two';
			break;
		case 3 : 
			output = 'three';
			break;
		case 4 : 
			output = 'fout';
			break;
		case 5 : 
			output = 'five';
			break;
		case 6 : 
			output = 'six';
			break;
		case 7 : 
			output = 'seven';
			break;
		case 8 : 
			output = 'eight';
			break;
		case 9 : 
			output = 'nine';
			break;
		default :
			output = 'not a digit';
			break;										
	}
	return output;
};
for (var i = 0; i < aNums.length; i+=1) {
	console.log(aNums[i]+' = '+digitNamer(aNums[i]));
}
console.log('End of problem 005!');
console.log('===================');
console.log('Problem 006 - results :');
var aNums = [2,-2,-0.5, 5];
var bNums = [5, 3, 4, 2];
var cNums = [-3, 0, -8, 8];
function quadraticRoot(a,b,c)  {
	var root = b*b-(4*a*c);
	var x1=1; 
	var x2=1;
	var isRealRoot = root >= 0;
	if (!isRealRoot) {
		return 'no real roots';
	}
	else {
		if (root === 0) {
			x1 = -b/(2*a);
			return 'x1=x2='+x1;
		}
		else {
			x1 = (-b - Math.sqrt(root)) /(2*a);
			x2 = (-b + Math.sqrt(root)) /(2*a);
			return 'x1='+x1+' x2='+x2;
		}
	}
}
for (var i = 0; i < aNums.length; i++) {
	console.log(quadraticRoot(aNums[i],bNums[i],cNums[i]));
}
console.log('End of problem 006!');
console.log('===================');
console.log('Problem 007 - results :');
var aNums = [5,-2,-2, 0, -3];
var bNums = [2, -22, 4, -2.5, -0.5];
var cNums = [2, 1, 3, 0, -1.1];
var dNums = [4, 0, 2, 5, -2];
var eNums = [1, 0, 0, 5, -0.1];
var findBiggest = function(a,b,c,d,e) {
	if (a >= b && a >= c && a >= d && a >= e) return a;
	else if (b >= c && b >= d && b >=e) return b;
	else if (c >= d && c >= e) return c;
	else if (d >= e) return d;
	else return e;
};
for (var i = 0; i < aNums.length; i++) {
	console.log( findBiggest( aNums[i], bNums[i], cNums[i], dNums[i], eNums[i]) );
}
console.log('End of problem 007!');
console.log('===================');
console.log('Problem 008 - results :');
var ones = new Array(
	' zero', ' one', ' two', ' three', ' four', ' five', 
	' six', ' seven', ' eight', ' nine', ' ten', ' eleven', 
	' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', 
	' seventeen', ' eighteen', ' nineteen');
var tens = new Array(
	' ', ' ', ' twenty', ' thirty', ' forty', 
	' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
var hundred = ' hundred';
var thousand = 'thousand';
var output = '';
var numToWords = function(num) {
	if (num < 20) return ones[num];
	else if (num % 10 === 0 && num > 19 && num < 100) return tens[num/10];
	else if (num % 100 === 0 && num > 99 && num < 1000) return ones[num/100] + hundred;
	else if (num % 10 !== 0  && num > 100 && num < 1000 ) {
		return ones[Math.floor(num/100)] + hundred 
		+ ' and' + tens[Math.floor(num/10 % 10)] + ones[Math.floor(num/1 % 10)];
	}
	else {
		return tens[Math.floor(num/10 % 10)] + ones[Math.floor(num/1 % 10)];
	}
};
var aNums = [0,9,10,12,19,25,98,154,273,400,501,617,711,999];
for (var i = 0; i < aNums.length; i++) {
	console.log(numToWords(aNums[i]));
}
console.log('End of problem 008!');
console.log('===================');