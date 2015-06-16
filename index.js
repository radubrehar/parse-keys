'use strict';

var assign = require('object-assign');

module.exports = function(object, keys){

	var result = {}

	;(keys || Object.keys(object)).forEach(function(key){
		var value = object[key]

		try { value = JSON.parse(value) } catch (ex){ }

		result[key] = value
	})

	return result
}