var $ = require('jquery');
var showImage = require('./showImage');
var showSearchResults = require('./showSearchResults');
var showError = require('./showError');
var showNextPage = require('./showNextPage');

var getImages = function(url) {

	$.ajax({
	    type: 'search',
	    url: url,
	    dataType:'jsonp',
	    data:{
	        fo:'json',
	    },
	})
	.done(function(result){
		console.log(result);
		var searchResults = showSearchResults(result.search.hits);
		$('.results').html(searchResults);
		$.each(result.results, function(i, item) {
			var printImage = showImage(item);
			$(printImage).appendTo('.results');
		});
	})
	.done(function(result){
		var previousPage = showNextPage(result.pages.previous, 'previous');
		if (result.pages.previous != ((null) || (undefined)))
			$(previousPage).appendTo('.results');

		$('.results').append('<p class="currentPage">'+result.pages.current+'</p>');

		var nextPage = showNextPage(result.pages.next, 'next');
		var endPage = '<p id="endPage">End results</p>';
		if (result.pages.next != ((null) || (undefined)))
			$(nextPage).appendTo('.results');
		else {$(endPage).appendTo('.results')};
		});

};

$(function() {
	$('.image-getter').on('submit', function(e) {
		e.preventDefault();
		$('.results').html('');
		var query = $(this).find("input[name='general']").val();
		getImages('http://loc.gov/pictures/search/?q=' + query);
	});
	$('.results').on('click', '.pagination', function (e) {
		e.preventDefault();
		getImages($(this).attr('href'));
	});
});
