import Merchant from "../models/merchantModels.js"
import bcrypt from 'bcrypt'

export const getAllMerchant = async (req, res) => {
    try {
        const merchant = await Merchant.findAll();
        res.json(merchant);
    }  catch (error) {
       res.json({message: error.message})
    }
}

export const createMerchant = async (req, res) => {
    try {
        await Merchant.create(req.body);
        res.json({
            "message" : "Merchant Created"
        });
    }  catch (error) {
       res.json({message: error.message})
    }
}

export const deleteMerchant = async (req, res) => {
    try {
        await Merchant.destroy({
        where: {
            id: req.params.id
            }
         });
        res.json({
            "message" : "Merchant Deleted"
        });
    }  catch (error) {
       res.json({message: error.message})
    }
}

export const authMerchant = async (req, res) => {

    try {
        const user = await Merchant.findOne( { where: {name : req.body.name}})
        if (user==null) {
            return res.status(400).send('Cannot find user')
        }
        else {  
            const user = await Merchant.findOne( { where: {password : req.body.password}})
        if (user) {
            return res.status(400).send('Succesfull') }
         else {
        res.send("Not Allowed")
        }
    }}  catch {
       res.status(500).send()
    } }

