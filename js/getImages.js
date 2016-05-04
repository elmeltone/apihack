var $ = require('jquery');
var showImage = require('./showImage');
var showSearchResults = require('./showSearchResults');
var showError = require('./showError');
var showNextPage = require('./showNextPage');

var getImages = function(query, pageNum) {
		
	var url = 'http://loc.gov/pictures/search/?q=' + query;
			
	$.ajax({
	    type: 'search',
	    url: url,
	    dataType:'jsonp',
	    data:{
	        fo:'json',
			sp: pageNum,
	    },
	})
	.done(function(result){	
		var searchResults = showSearchResults(query, result.search.hits);
		$('.results').html(searchResults);
		$.each(result.results, function(i, item) {
			var printImage = showImage(item);
			$(printImage).appendTo('.results');
		});
	})		
	.done(function(result){
		var nextPage = showNextPage(query/*, result.pages.next*/);
		var endPage = '<p id="endPage">End results</p>'
		if (result.pages.next != ((null) || (undefined)))
			$(nextPage).appendTo('.results');
		else {$(endPage).appendTo('.results')};
		});
		
};

module.exports = getImages;