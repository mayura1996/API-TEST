var express = require('express');
var bodyParser = require('body-parser');
var payloadChecker = require('payload-validator');
var app = express();
var router = express.Router();
var expectedPayload = {
    "nic" : "",
    "mobile" : ""
};
/*app.use((req, res, next) => {
    res.status(200).json({
            message: ' OK'
    });
});app.use((req, res, next) => {
    res.status(200).json({
            message: ' OK'
    });
});*/
app.use(bodyParser.json());

router.route('/')
    .get(function(req,res) {
        res.json({"mobile" : "GET not supported"});
    })
    .post(function(req,res) {
        // cross check req.body.mobile payload
        if(req.body) {
            var result = payloadChecker.validator(req.body,expectedPayload,["nic","mobile"],false);
            if(result.success) {
                res.json({"mobile" : "Payload is valid"});
            } else {
                res.json({"mobile" : result.response.errormobile});
            }
        } else {
            res.json({"mobile" : "paylod not correct"});
        }
    });

app.use('/api/users',router);
module.exports  = app;