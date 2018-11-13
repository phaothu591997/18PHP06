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
		if(password.length<=6){
			document.getElementById('error1').innerHTML="mật khẩu phải dài hơn 6 ký tự" ;
		}
		else{
			document.getElementById('error1').innerHTML="";
		}
	}

	var nam = document.getElementById('nam').value;
	var nu = document.getElementById('nu').value;
	var radios = document.getElementsByName('gioitinh');
	if((nam.checked==true && nu.checked==true) || (nam.checked =false && nu.checked =false)) {
		document.getElementById('gt').innerHTML="vui long nhập gioi tinh";
	}
	else{
		document.getElementById('gt').innerHTML=" ";
	}

	// for (var i = 0, length = radios.length; i < length; i++)
	// {
	// 	if (radios[i].checked)
	// 	{
	// 		document.getElementById("checkgioitinh").innerHTML = "";

	// 		break;
	// 	} else {
	// 		document.getElementById("checkgioitinh").innerHTML = "Vui lòng chọn giới tính";

	// 	}
	// }

}