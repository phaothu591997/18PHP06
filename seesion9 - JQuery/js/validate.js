$(document).ready(function()
{
    $('#form_login').submit(function(){
        var username = $.trim($('#username').val());
		var password = $.trim($('#password').val());
		event.preventDefault()
		if (username == ''){
            $('#username_error').text('Tên đăng nhập không được để trống');	
        }
        else {
        	if(username.length<=8){
           		 $('#username_error').text('Tên đăng nhập phải lớn hơn 8 ký tự');
       		}
       		else{
       			 $('#username_error').text('');
       		}
        }

        if (password == ''){
            $('#password_error').text('Mật khẩu không được để trống');	
        }	
        else {
        	if(password.length<=8){
           		 $('#password_error').text('Mật khẩu nhập phải lớn hơn 8 ký tự');
       		}
       		else{
       			 $('#password_error').text('');
       		}
        }

	});
});