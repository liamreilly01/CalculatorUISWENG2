var a = '';
var b = '';
var num = [];
var ans;

// All the numbers and operators input will be stored in an array "num" using function "sendNum()"
function sendNum(digit){

	num.push(digit);

	if(num.length !== 1){
		a = '';
		document.getElementById('screen').innerHTML = a;		// clearing the screen.
	}


	for(i=0; i<num.length ; i++){

		a = a + num[i];				// concatenate the elements of the array "num" into a single string, which will be displayed on the screen
		
	}

document.getElementById('screen').innerHTML = a;	// displaying the concatenated string

	
}

<<<<<<< HEAD
// when the user presses "=", function "equalTo()" is called 
function equalTo(){
	document.getElementById('screen').innerHTML = '';

	for(i=0; i<num.length ; i++){

		b += num[i];						// concatenating the array "num" into a single string
	}

	ans = eval(b);	

	document.getElementById('screen').innerHTML = ans;		// result display

	while(num.length > 0){
    	num.pop();				// emptying the array "num"
	}

	num.push(ans.toString());

	
}


// When user presses "AC", function "clearScr()" is called
function clearScr(){
	document.getElementById('screen').innerHTML = '';
	
	while(num.length > 0){
    	num.pop();				// emptying the array "num"
	}

	a ='';	
	b ='';
}
=======
function display(value){
    document.getElementById("result").value += value;
    
}

function calculate(){
    var expression = document.getElementById("result").value;
    var answer = eval(expression);
    document.getElementById("result").value=answer ;
}

>>>>>>> de69cfc3d20ecca3fbfae04c88dd9b2e154bb93a
