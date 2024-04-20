var express = require('express');
var router = express.Router();
var studentcontroller = require('../controller/studentcontroller');

router.post('/add_result',studentcontroller.add_result);
router.get('/delete_result/:id',studentcontroller.delete_result);
router.post('/update_result/:id',studentcontroller.update_result);
router.get('/view_result',studentcontroller.view_result);

module.exports = router;
