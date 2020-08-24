const express = require('express');
const Group = require('../models/groups');
const router = express.Router();

router.post('/createGroup',(req,res) => {
    console.log(req.body.groupName);
    console.log(req.body.usersingroup);
    const {groupName,usersingroup} = req.body;
    let newGroup = new Group({groupName,usersingroup});
    newGroup.save((err,success) => {
        if(err){
            console.log("Error while creating Group",err);
            return res.status(400).json({error:"Error creating Group"})
        }
        return res.send({
            "status":200,
            newGroup})
    })
})

//get selected group
router.get('/:id',(req,res) => {
    console.log(req.params);
    Group.findOne({groupId: req.params.id},(err,userDetails) => {
        res.send(userDetails);
    })
})

//get all groups
router.get('/user/:username',(req,res) => {
    console.log("helloworld");
    console.log(req.params.username);
    Group.find({"usersingroup": {$elemMatch:{username: req.params.username}}},(err,userDetails) => {
        console.log(userDetails);
        res.send(userDetails);
    })
})

module.exports = router;