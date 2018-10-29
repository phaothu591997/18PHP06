var n = prompt("xin vui lòng nhập số n vào: ");
if(n%2==0){
	document.write(n +' là số chẵn');
	document.write('</br>');
}
else{
	document.write(n + ' là số lẻ');
	document.write('</br>');
	if (n%3==0) {
		document.write(n + ' là số chia hết cho 3');
	}
	else{
		document.write(n + ' là số không chia hết cho 3');
	}
}