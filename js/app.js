
	var showImage = function(target) {
		var result = $('#general-image').clone();
		
		var imgLink1 = "http:" + target.links.resource;
		var imgLink2 = "http:" + target.links.item;
		var imgThumb = "http:" + target.image.thumb;
		
		var imageElemLink = result.find('.image a');
		if (imgLink1 != null)
			imageElemLink.attr('href', imgLink1);
		else {imageElemLink.attr('href', imgLink2)};
		var imageElemPic = result.find('.image img');
		imageElemPic.attr("src", imgThumb);

		var imgCreator = result.find('.image-creator a');
		if (imgLink1 != null)
			imgCreator.attr('href', imgLink1);
		else {imgCreator.attr('href', imgLink2)};
		imgCreator.text(target.creator);

		var imgCallNum = result.find('.image-callnumber');
		imgCallNum.text(target.call_number);

		var imgNotes = result.find('.image-notes');
		if (target.title != null)
			imgNotes.text(target.title);
		else {imgNotes.text("No title")};

		return result;
		
	};
	
	var showSearchResults = function(query, resultNum) {
		var results = '<strong>' + resultNum + ' results...</strong>';
		return results;
	};
	
	var showError = function(error){
		var errorElem = $('.template .error').clone();
		var errorText = '<p>' + error + '</p>';
		errorElem.append(errorText);
	};
	
	var getImages = function(query) {
		
		//var searchTerm = $('#general').val();
		
		$.ajax({
		    type: 'search',
		    url: 'http://loc.gov/pictures/search/?q=' + query/* + '&fo=jsonp'*/,
		    dataType:'jsonp',
		    data:{
		        fo:'json',
		    },
		})
		.done(function(result){
			var searchResults = showSearchResults(query, result.results.length);
		
			$('.results').html(searchResults);
			$.each(result.results, function(i, item) {
				console.log(item);
				var printImage = showImage(item);
				$(printImage).appendTo('.results');
			});
		})
		.fail(function(jqXHR, error) {
			var errorElem = showError(error);
			$('.search-total').html('');
			$('.search-total').append(errorElem);
		});
		
	};
	
$(function() {	
	$('.image-getter').on('submit', function(e) {
		e.preventDefault();
		$('.results').html('');
		var query = $(this).find("input[name='general']").val();
		getImages(query);
	});
});