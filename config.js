'use strict';

let dotenv = require('dotenv');

dotenv.config();

let configuration = {
	server:{
		port : process.env.PORT || process.env.SERVER_PORT
	},
 	db:{
 		port: process.env.MONGODB_URI || process.env.DB_PORT
 	}
};

module.exports = configuration;
