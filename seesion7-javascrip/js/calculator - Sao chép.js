var result = '';
function addChar(char){
	result+=char;
	document.getElementById('result').innerHTML = result;
}
function Reset(){
	document.getElementById('result').innerHTML = 0;
}
function resultX(){
	document.getElementById('result').innerHTML = eval(result);
}
function Back() {	
	if (result.length>0) {
		result=result.substring(0, result.length-1);
		document.getElementById('result').innerHTML = result;
	}
	else{	
		result='';
		document.getElementById('result').innerHTML = result;
	}
}