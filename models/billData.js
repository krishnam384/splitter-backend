const mongoose = require('mongoose');
const billDataSchema = mongoose.Schema({

    billName: {
        type: String
    },
    name: {
        type: String
    },
    isPaid: {
        type: Boolean
    },
    amountPaid: {
        type: Number
    },
    getsBack: {
        type: Number
    },
    needToPay: {
        type: Number
    }
});

module.exports = mongoose.model('BillData',billDataSchema);

exports.billDataSchema = billDataSchema;