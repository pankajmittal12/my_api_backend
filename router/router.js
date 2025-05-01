
const express = require('express');

const controller = require('../controller/controller');

const router = express.Router();

router.get("/getData", controller.getData);

router.post("/postData", controller.postData);

router.put("/putData", controller.putData);

router.delete("/deleteData", controller.deleteData);

module.exports = router;