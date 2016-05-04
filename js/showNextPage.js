var $ = require('jquery');
var showImage = require('./showImage');
var showSearchResults = require('./showSearchResults');
var showError = require('./showError');

var showNextPage = function(query) {
	var page = '<a><p class="count">Next Page</p></a>';
	return page;
};

module.exports = showNextPage;