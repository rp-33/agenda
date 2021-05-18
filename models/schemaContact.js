'use strict';

let mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let contactSchema = new Schema({
	displayName:{
		type:String,
		lowercase: true,
		required:[true, '{PATH} es obligatorio.']
	},
	number : {
		type :Number,
		required:[true, '{PATH} es obligatorio.']
	}
})


module.exports = mongoose.model('Contact',contactSchema);