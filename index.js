'use strict';

var assign = require('object-assign');

module.exports = function(object, keys){

	var result = {}

	;(keys || Object.keys(object)).forEach(function(key){
		var value = object[key]

		result[key] = JSON.parse(value)
	})

	return result
}