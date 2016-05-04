var $ = require('jquery');
var showImage = require('./showImage');
var showSearchResults = require('./showSearchResults');
var showNextPage = require('./showNextPage');

var showError = function(error){
	var errorElem = $('.template .error').clone();
	var errorText = '<p>' + error + '</p>';
	errorElem.append(errorText);
};

module.exports = showError;