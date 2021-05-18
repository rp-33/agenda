'use strict';
let Contact = require('../models/schemaContact');

module.exports = {

	getContacts : async (req,res)=>{
		try
		{
			let contacts =  await Contact.find({});
			res.status(200).send(contacts);
		}
		catch(err)
		{
			res.status(500).send({error:'Server Error'});
		}
	},
	createContact : async (req,res)=>{
		try
		{

			let {
				displayName,
				number
			} = req.body;

			let contact = new Contact({
				displayName,
				number
			});

			let result = await contact.save();
        	if(result) return res.status(201).send({message : "Se ha creado con exito"});
			res.status(400).send({message : "Ocurrio un error"});
		}
		catch(err)
		{
			res.status(500).send({error:'Error en el servidor'});
		}
	},
	editContact : async (req,res)=>{
		try
		{

			let {
				_id,
				displayName,
				number
			} = req.body

			let contact = await Contact.updateOne({_id},{$set:{displayName,number}});

        	if(contact.n===0 && contact.nModified===0) return res.status(400).send({error:'Hubo un problema'});
        	res.status(201).send({message : 'Se modifico el contacto'});   
		}
		catch(err)
		{
			res.status(500).send({error:'Error en el servidor'});
		}
	},
	deleteContact : async (req,res)=>{
		try
		{
			let {_id} = req.body;
        	let result = await Contact.deleteOne({_id}); 
        	if(result.n === 1 && result.deletedCount=== 1) return res.status(200).send({message : "Se ha eliminado con exito"});
        	res.status(400).send({error:'Hubo un problema'});
		}
		catch(err)
		{
			res.status(500).send({error:'Error en el servidor'});
		}
	}

}