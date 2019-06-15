#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs')

var config = require('./env');

// const pages = range(1, 94)
pages = [93]
var links = []

var scrap = function(pages, index){
	if( index < pages.length ){
		let url = config.URLPATTERN.replace("{pattern}", pages[index])
		let options = { ...config.REQUESTOPTION }
		options.url = url

		request( options, function(error, response, html) {
			if( !error ){
				var $ = cheerio.load(html);
				$(config.LINKIDENTITY).each((row, el) => {
            		links.push( config.BASEURL + el.attribs.href )
            	})
				console.log("scrapped this page : " + url )
			}
			else{
				console.log("failed in scrapping of this page : " + url + "with this error", error)
			}
			scrap(pages, index+1)
		})
	}
	else{
		// Printing the all result 
		console.log( "Scrapped all page. Printing to file")
		fs.writeFile("links.txt", links.join("\r\n"), function(err){
			if( err ){
				console.log("failed to writing")
			}
			else {
				console.log("success in scrapping")
			}
		})
	}
}

scrap( pages, 0 )




function range(start, edge, step) {
	// If only one number was passed in make it the edge and 0 the start.
	if (arguments.length == 1) {
	  edge = start;
	  start = 0;
	}
   
	// Validate the edge and step numbers.
	edge = edge || 0;
	step = step || 1;
   
	// Create the array of numbers, stopping befor the edge.
	for (var ret = []; (edge - start) * step > 0; start += step) {
	  ret.push(start);
	}
	return ret;
}
