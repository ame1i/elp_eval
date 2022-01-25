//filehandle.read(buffer, offset, length, position)
fs=require('fs');
fs.readFile('/.cours.txt', function(err, res){console.log(res);});