
	var showImage = function(image) {
		var result = $('.template .general').clone();
		
				var imageElemLink = result.find('.image a');
				if (image.results.links.resource != null)
					imageElemLink.attr('href', image.results.links.resource);
				else {imageElemLink.attr('href', image.results.links.item)};
				var imageElemPic = result.find('.image img');
				imageElemPic.attr("src", image.results.image.thumb);
		
				var imgCreator = result.find('.image-creator a');
				if (image.results.links.resource != null)
					imgCreator.attr('href', image.results.links.resource);
				else {imgCreator.attr('href', image.results.links.item)};
				imgCreator.text(image.results.creator);
		
				var imgCallNum = result.find('.image-callnumber');
				imgCallNum.text(image.results.call_number);
		
				var imgNotes = result.find('.image-notes');
				if (image.title != null)
					imgNotes.text(image.results.title);
				else {imgNotes.text("No title")};
		
				return result;
		
	};
	
	var showSearchResults = function(query, resultNum) {
		var results = '<strong>' + resultNum + ' results...</strong>';
		return results;
	};
	
	var showError = function(error){
		var errorElem = $('.templates .error').clone();
		var errorText = '<p>' + error + '</p>';
		errorElem.append(errorText);
	};
	
	var getImages = function() {
		
		var searchTerm = $('#general').val();
		
		$.ajax({
		    type: 'search',
		    url: 'http://loc.gov/pictures/search/?q=' + searchTerm/* + '&fo=jsonp'*/,
		    dataType:'jsonp',
		    data:{
		        fo:'json',
		    },
		})
		.done(function(result){
			var searchResults = showSearchResults(searchTerm, result.results.length);
		
			$('.search-results').html(searchResults);
			$.each(result.results, function(i, item) {
				var image = showImage(item);
				$('.results').append(image);
			});
		})
		.fail(function(jqXHR, error) {
			var errorElem = showError(error);
			$('.searchresults').html('');
			$('.search-results').append(errorElem);
		});
		
	};
	
$(function() {	
	$('.image-getter').on('submit', function(e) {
		e.preventDefault();
		$('.results').html('');
		var query = $(this).find("input[class='general']").val();
		getImages(query);
	});
});