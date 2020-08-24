const mongoose = require('mongoose');
const shortid = require('shortid');
const groupSchema = mongoose.Schema({

    groupId: {

        type: String,
        default: shortid.generate

    },
    groupName: {
        type: String
    },

    usersingroup: [{
        username:{
            type: String
        }
    }]
})

module.exports = mongoose.model('Group',groupSchema);