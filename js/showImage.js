var $ = require('jquery');
var showSearchResults = require('./showSearchResults');
var showError = require('./showError');
var showNextPage = require('./showNextPage');

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

module.exports = showImage;