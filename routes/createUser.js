const express = require('express');
const User = require('../models/users');
const router = express.Router();
const axios = require('axios');

router.get('/phoneId',(req,res) => {
    axios.get('http://country.io/phone.json').then(result => res.send(result.data)).catch(error => {
        console.log(error);
    }); 
});


router.post('/signup',(req,res)=> {
    console.log(req.body.username);
    const {username,email,password,phone} = req.body;
    let newUser = new User({username,email,password,phone});
                        newUser.save((err, success) => {
                            if(err) {
                                console.log("Error in Signup while account activation ", err);
                                return res.status(400).json({error: 'Error Activating Account'})
                            }
                            return res.json({
                                message: "Signup success..!!",
                                status: 200
                            })
                        })
    //res.send(`Username:${username} Email: ${email} Password: ${password} Phone: ${phone}`);

})

router.post('/login',(req,res) => {
    let findUser = () => {
        console.log("findUser");
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log("req body email is there");
                console.log(req.body);
                User.findOne({ email: req.body.email}, (err, userDetails) => {
                    /* handle the error here if the User is not found */
                    if (err) {
                        console.log(err)
                        logger.error('Failed To Retrieve User Data', 'userController: findUser()', 10)
                        /* generate the error message and the api response message here */
                        // let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                        /* if Company Details is not found */
                    // } else if (check.isEmpty(userDetails)) {
                    //     /* generate the response and the console error message here */
                    //     // logger.error('No User Found', 'userController: findUser()', 7)
                    //     // let apiResponse = response.generate(true, 'No User Details Found', 404, null)
                    //     reject(apiResponse)
                    }else {
                        /* prepare the message and the api response here */
                        // logger.info('User Found', 'userController: findUser()', 10)
                        resolve(userDetails);
                    }
                });
               
            } else {
                // let apiResponse = response.generate(true, '"email" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    findUser(req,res)
        .then((resolve) => {
            res.status(200)
            return res.json({
                message: "Login success..!!",
                status: 200,
                resolve
            })
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
        })
})

router.post('/getUser',(req,res) => {

    let findUser = () => {
        console.log("findUser");
        return new Promise((resolve, reject) => {
            if (req.body.username) {
                console.log("req body username is there");
                console.log(req.body);
                User.findOne({ username: req.body.username}, (err, userDetails) => {
                    /* handle the error here if the User is not found */
                    console.log(userDetails);
                    if (err) {
                        console.log(err)
                        // logger.error('Failed To Retrieve User Data', 'userController: findUser()', 10)
                        reject(apiResponse)
                    }else if (userDetails == null){

                        console.log("No user found");
                        let apiResponse={
                            status: 404,
                            error: "No user Found..!!"
                        }

                        reject(apiResponse);

                        

                    } else {
                        /* prepare the message and the api response here */
                        resolve(userDetails);
                    }
                });
               
            } else {
                // let apiResponse = response.generate(true, '"email" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    findUser(req,res)
        .then((resolve) => {
            res.send(resolve)
        })
        .catch((err) => {
            console.log("errorhandler");
            res.send(err);
        })

})





// router.post('/login',(req,res) => {
//     console.log(req.body);
//     const data = User.find(c => c.email=== req.body.email);
//     if(data){
//         const pw = User.find(c => c.password===req.body.password);
//         return res.json({
//             message: "Login success..!!",
//             status: 200
//         })
//     }
// })

module.exports = router;
