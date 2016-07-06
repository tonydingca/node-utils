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
   });
}

main(process.argv.slice(2));