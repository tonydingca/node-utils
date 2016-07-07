var fs= require('fs');
var path = require('path');

function listDir(dir, callback){
	fs.readdirSync(dir).forEach(function(file){
		var pathname = path.join(dir, file);

		if(fs.statSync(pathname).isFile()){
			callback(dir, file);
		}
	});
}

function main(argv) {
   listDir(argv[0], function (dir, file) {
    console.log(file);
    var fullList = file.split('.');
    if (fullList.length > 1){
    	var fileNameList = fullList[0].split('-');
    	if((fileNameList.length >1)&&(!isNaN(fileNameList[1]))){
    		var newFileName = fileNameList[1] + '-' + fileNameList[0] + '.' + fullList[1];
    		console.log(newFileName);
    		var newPath = path.join(dir, newFileName);
    		var oldPath = path.join(dir, file);
    		fs.renameSync(oldPath, newPath);
       	}
    }
   });
}

main(process.argv.slice(2));