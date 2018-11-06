var name = prompt(' xin mời nhập tên: ');

var arrName = name.split(" ");
arrName[arrName.length-1]="PHP06";
document.write("Tên sau khi đổi là: ")
for(var i=0;i<arrName.length;i++){
	document.write(arrName[i]+"    ");
}
document.write('<br>');
document.write(' độ dài của tên ' + name +' là : ' + name.length + ' ký tự')


var myname = name;
var kt=name.length
for(var i=0;i<kt;i++){
	myname = myname.replace(" ", "");
}
document.write('<br>');
document.write(' độ dài của tên ' + name +' không tính khoảng trống là là : ' + myname.length + ' ký tự')