const express = require('express');
const router = express.Router();
const user_ctl = require('../controllers/user')

router.get("/", user_ctl.findAllUser);

router.get("/:id", user_ctl.findById);

router.post("/", user_ctl.register);

router.put("/:id", user_ctl.update);

router.delete("/:id", user_ctl.delete);

module.exports = router;