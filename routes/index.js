'use strict';
let contactRouter = require('./contactRouter');

module.exports = (app) =>{
	app.use('/api/v1',contactRouter);
}