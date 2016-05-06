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
		console.log(result);
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
	
$(function() {	
	$('.image-getter').on('submit', function(e) {
		e.preventDefault();
		$('.results').html('');
		var pageCounter = 2;
		var query = $(this).find("input[name='general']").val();
		getImages(query, pageCounter);
	});
	$('.count').on('click', function (e) {
		e.preventDefault();
		var currentPage = pageCounter+1;
		getImages(query, currentPage);
	});
});