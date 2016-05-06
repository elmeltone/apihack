var $ = require('jquery');
var showImage = require('./showImage');
var showError = require('./showError');
var showNextPage = require('./showNextPage');
	
var showSearchResults = function(resultNum) {
	var results = '<p class="count"><strong>' + resultNum + ' results...</strong></p>';
	return results;
};
	
module.exports = showSearchResults;