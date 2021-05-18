'use strict';

const router = require('express-promise-router')();

const {
	getContacts,
	createContact,
	editContact,
	deleteContact
} = require('../controllers/ctrlContact');

/* GET */

router.get('/getContacts',getContacts);

/* POST  */

router.post('/createContact',createContact);

/* PUT */

router.put('/editContact',editContact);

/* DELETE */

router.delete('/deleteContact',deleteContact);

module.exports = router;