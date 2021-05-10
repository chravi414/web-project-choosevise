const express = require("express");
const router = express.Router();
const productScrapper = require('./../controllers/productScrapper');
const dealScrapper = require('./../controllers/dealScrapper');


router.post('/offers', (req, res, next) => {
    dealScrapper.scrapper().then(response => {
        console.log(response);
        return res.status(200).send({
            data: response
        })
    }).catch(err => {
        console.log(err);
        return res.status(400).send({
            error: "Something went wrong.Please try again."
        })
    });
})

router.post("/", (req, res) => {
    const { query } = req.body;
    console.log(query);
    productScrapper.scrapper(query).then(response => {
        console.log(response);
        return res.status(200).send({
            data: response
        })
    }).catch(err => {
        console.log(err);
        return res.status(400).send({
            error: "Something went wrong.Please try again."
        })
    });
})

module.exports = router;