var $ = require('jquery');
var showImage = require('./showImage');
var showSearchResults = require('./showSearchResults');
var showError = require('./showError');

var showNextPage = function(url, label) {
	var page = '<p><a href="'+url+'" class="'+label+' pagination">'+label+' Page</a></p>';
	return page;
};

module.exports = showNextPage;
