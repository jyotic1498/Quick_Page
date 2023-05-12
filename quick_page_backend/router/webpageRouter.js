const express = require('express');
const Model = require('../models/webpageModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    // res.send('add response from user router');
    // to store data
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
})

// : denotes url parameters
router.get('/getbyemail/:useremail', (req, res) => {

    Model.find({ email : req.params.useremail })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
})
router.get('/getbyuser/:id', (req, res) => {
    Model.findOne({user : req.params.id})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
})

router.put('/update/:userid', (req, res) => {
    Model.findByIdAndUpdate(req.params.userid, req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});


module.exports = router;