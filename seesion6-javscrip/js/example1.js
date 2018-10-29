// var a=32;
// var b=8;
// document.write('tong a+ b la:');
// document.write(a+b);

// document.write('</br>');
// document.write('hieu a-b la :');
// document.write(a-b);

// document.write('</br>');
// document.write('thuong a/b la :');
// document.write(a/b);

// document.write('</br>');
// document.write('tich a*b la :');
// document.write(a*b);

// // Phép chia lấy phần dư
// document.write('</br>');
// document.write('phan tram a*b la :');
// document.write(a%b);

// câu lệnh ĐIỀU KIỆN: IF-ELSE
// var c= prompt("nhập biến c: "),d=prompt("nhập biến e: "),e=prompt("nhập biến e: ");
// var _max=c;
// if (_max<d) {
// 	_max=d;
// 	if (_max<e) {
// 		_max=e;
// 	}
// }
// else{
// 	if (_max<e) {
// 		_max=e
// 	}
// }
// document.write('số lớn nhất là:'+ _max);



// câu điều kiện switch

// var a= prompt("xin mời nhập : ");
// switch(parseInt(a)){
// 	case 1:
// 		document.write('bạn đã yêu được :'+ a +'cô');
// 		break;
// 	case 2:
// 	 	document.write('bạn đã yêu được:'+ a +'cô');
// 		break;
// 	case 3:
// 	 	document.write('bạn đã yêu được :'+ a +'cô');
// 		break;
// 	default: 
// 		document.write('bạn  ế cả đời')
// }

// vòng lặp for

 // var a= prompt("xin mời nhập : ");
 // var tong=0;
 // for (i=0;i<=a;i++){
 // 	tong +=i;
 // }

 // document.write('tổng các số là:' + tong);

 // vòng lặp while

var a= prompt("xin mời nhập : ");
var tong=0,i=0;
 do{
 	tong+=i;
 	i++;
 }while(i<=a){
 	document.write('tổng các số là:' + tong);
 }