
	var showImage = function(image) {
		var result = $('.template .general').clone();

		var imageElemLink = result.find('.image a');
		imageElemLink.attr('href', image.link);
		var imageElemPic = result.find('.image img');
		imageElemPic.attr("src", image.thumb);
		
		var imgNotes = result.find('.image-notes');
		imgNotes.text(image.title);
		
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
		    type: 'get',
		    url: 'http://loc.gov/pictures/?q=' + searchTerm/* + '&fo=jsonp'*/,
		    dataType:'jsonp',
		    data:{
		        fo:'json',
		    },
		})
		.done(function(result){
			var searchResults = showSearchResults(searchTerm, result.collections.length);
		
			$('.search-results').html(searchResults);
			$.each(result.collections, function(i, item) {
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