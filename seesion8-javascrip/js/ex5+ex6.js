var name = prompt(' xin mời nhập tên: ');
var arrName = name.split(" ");
document.write('họ ' + arrName[0] + ' chuyển thành chữ hoa: ' + arrName[0].toUpperCase());
document.write('<br>');
arrName.shift();
arrName.pop();
document.write(arrName.valueOf());
arrName.toLowerCase();
document.write('tên lót trong tên '+ name + ' chuyển thành chữ thường là: '+ arrName);