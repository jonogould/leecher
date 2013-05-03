/*
*	leecher.js
*	========================================================
*
*	Author: 	jono gould
*	Company: 	TravelGround.com
*	Date: 		3 May 2013
*
*	Description:
*	Downloads files using HTTP.get
*	Adapted from http://www.hacksparrow.com/using-node-js-to-download-files.html
*
*	========================================================
*	
*	Usage: leecher(array_of_files, './downloads', function(downloaded) { async.. });
*
*	var files 		= shell.cat('list.txt').split('\n'); (for a list of files, or just use an array)
*	download_dir 	= './downloads'
*	done 			= callback function returns file list
*/


//	Dependancies
var fs = require('fs');
var url = require('url');
var http = require('http');
var async = require('async');
var shell = require('shelljs');
var _ = require('underscore');


var leecher = function(files, download_dir, done) {
	if (files.length > 0) {
		//	File list
		var endpoints = [];
		var count = 0;

		_.each(files, function(f) {
			if (f.length > 0) {
				//	Stream options
				var file_name = url.parse(f).pathname.split('/').pop();

				//	Check to see if a file exists
				if (!fs.existsSync(download_dir + '/' + file_name)) {
					endpoints.push(function(callback) {
						var file = fs.createWriteStream(download_dir + '/' + file_name);
						http.get(f, function(res) {
							res.on('data', function(data) {
								file.write(data);
							}).on('error', function(data) {
								callback('File write error',null);
							}).on('end', function() {
								file.end();
								callback(null, file_name + ' downloaded to ' + download_dir);
							});
						});
					});

					count++;
				}
			}
			else { console.log(f); }
		});

		//	Return the file list
		done(endpoints);
	}
	else {
		//	Return an error
		done(function(callback){callback('ERROR: \tFile list empty.', null)});
	}
};


//	Export
exports.leecher = leecher;