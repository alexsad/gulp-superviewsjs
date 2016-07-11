var path = require('path');
var through = require('through-gulp');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var superviews = require("superviews.js");

// file can be a vinyl file object or a string
// when a string it will construct a new one
module.exports = function(opt) {
	opt = opt || {};
	opt.mode = opt.mode || "es6";
	// to preserve existing |undefined| behaviour and to introduce |newLine: ""| for binaries
	if (typeof opt.newLine !== 'string') {
		opt.newLine = '\n';
	}
	return through(function(file, encoding, callback) {
		if (file.isNull()) {}
		if (file.isBuffer()) {			
			var templateFile = new Buffer(decoder.write(file.contents));			
			templateFile = superviews(
										decoder.write(templateFile)
										.replace(/(<\w+-\w+[^ ])(.+?>)/g,function($0,$1,$2){
											var tmpRtn = $1+' props="{{attr_only_to_update_component:123456,'+$2.replace(/"/g,"'").replace(/>$/g,"").replace(/(=')/g,":'").replace(/" (\w)/g,"',($1)").replace(/'{(.+?)}'/g,'$1')+'}}">';
											//console.log($1);
											//console.log($2);
											//console.log(tmpRtn);
											return tmpRtn;
										})
										.replace(/<require from="([^"]+)"/g,"<delegating-import props=\"{{from:'$1'}}\"")
										.replace(/<\/require>/g,"</delegating-import>")										
										.replace(/[\n\t\r]/g," ")
										.replace(/ (\w*)\.((trigger)|(delegate))="([^"]+)"/g," on$1=\"{$event.preventDefault();$5}\"")
			, null, null, opt.mode);			
			file.contents = new Buffer(templateFile);
		}
		if (file.isStream()) {}
		this.push(file);
		callback();
	}, function(callback) {
		callback();
	});
};
