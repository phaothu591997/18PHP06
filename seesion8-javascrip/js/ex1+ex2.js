var name = prompt(' xin mời nhập tên: ');
var o_positon = name.indexOf('n');
if(o_positon>=0){
	document.write('tên ' + name + ' có chữ n');
	document.write('<br>');
}
else{
	document.write('tên ' + name + ' không có chữ n');
	document.write('<br>');
}

var demname = 0;
while(name.indexOf('n')!=-1){
	var tmpName = name;
	demname++;
	name = tmpName.slice(tmpName.indexOf('n')+1, tmpName.lenght);
}

 document.write('số chữ n trong tên là :' + demname);
 document.write('<br>');