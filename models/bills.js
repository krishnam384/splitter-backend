const mongoose = require('mongoose');
const {billDataSchema} = require('./billData');
const shortid = require('shortid');
const billSchema = mongoose.Schema({
    billName: {
        type: String
    },
    groupId: {
        type: String
    },
    data:[
        {
            name:{
                type: String
            },
            isPaid:{
                type: Boolean
            },
            amountPaid:{
                type: Number
            },
            getsBack: {
                type: Number
            },
            needToPay: {
                type: Number
            }
        }
    ]
});

module.exports = mongoose.model('Bill',billSchema);