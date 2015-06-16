'use strict';

var assign = require('object-assign');
var hasOwn = require('hasown');

module.exports = function(object, keys){

	var result = {}

	if (Array.isArray(keys)){
		keys = keys.filter(hasOwn(object))
	} else {
		keys = Object.keys(object)
	}

	keys.forEach(function(key){
		var value = object[key]

		try { value = JSON.parse(value) } catch (ex){ }

		result[key] = value
	})

	return result
}