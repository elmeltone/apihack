$(function() {
	
	var showImage = function(image) {
		var result = $('.template .general').clone();
		
		var imageElemLink = result.find('.image a');
		if (image.links.resource != null)
			imageElemLink.attr('href', image.links.resource);
		else {imageElemLink.attr('href', image.links.item)};
		var imageElemPic = result.find('.image img');
		imageElemPic.attr("src", image.image.thumb);
		
		var imgCreator = result.find('.image-creator a');
		if (image.links.resource != null)
			imgCreator.attr('href', image.links.resource);
		else {imgCreator.attr('href', image.links.item)};
		imgCreator.text(image.creator);
		
		var imgCallNum = results.find('.image-callnumber');
		imgCallNum.text(image.call_number);
		
		var imgNotes = results.find('.image-notes');
		if (image.title != null)
			imgNotes.text(image.title);
		else {imgNotes.text("No title")};
		
		return result;
		
	};
	
	
	$('#general').on('click', function() {
		
	})
});