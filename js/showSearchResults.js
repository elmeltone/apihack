var $ = require('jquery');
var showImage = require('./showImage');
var showError = require('./showError');
var showNextPage = require('./showNextPage');

var showSearchResults = function(resultNum) {
  var commaValue = resultNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	var results = '<p class="count"><strong>' + commaValue + ' results...</strong></p>';
	return results;
};

module.exports = showSearchResults;
