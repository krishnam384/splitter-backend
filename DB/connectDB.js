const mongoose = require('mongoose');

//Connect to Database

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("Connection Established..!!"))
.catch((err) => console.log("Not Connected..!!", err));