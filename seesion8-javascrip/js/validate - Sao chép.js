function checkform() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	event.preventDefault()
	if(username==""){
		document.getElementById('error').innerHTML="vui lòng điền họ và tên" ;		
	}
	else{
		document.getElementById('error').innerHTML="";
	}
	if(password==""){
		document.getElementById('error1').innerHTML="vui lòng điền mật khẩu" ;		
	}
	else{
		document.getElementById('error1').innerHTML="";
	}
}