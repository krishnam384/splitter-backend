const express = require('express');
const Bill = require('../models/bills');
const router = express.Router();

router.post('/createBill',(req,res) => {
    console.log(req.body);
    const {billName,groupId,data}= req.body;
    let newBill = new Bill({billName,groupId,data});
    newBill.save((err,success) => {
        if(err){
            console.log("Error while creating Group",err);
            return res.status(400).json({error:"Error creating Group"})
        }
        return res.send({
            "status":200,
            newBill})
    })
})

router.get('/:groupId',(req,res) => {
    Bill.find({ 'groupId': req.params.groupId }, (err, result) => {

        if (err) {
            console.log(err)
            res.send(err)
        } else if (result == undefined || result == null || result == '') {
            console.log('No Bills Found')
            res.send({
                "status":404,
                "message": "No Previous Bills Found"})
        } else {
            res.send({
                "status": 200,
                result})

        }
    })
})


module.exports = router;