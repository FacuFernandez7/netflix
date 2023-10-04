const express = require('express');
const router = express.Router();
const series_ctl = require('../controllers/series')

router.get("/", series_ctl.findAllSeries);

router.get("/:id", series_ctl.findById);

router.post("/", series_ctl.create);

router.put("/:id", series_ctl.update);

router.delete("/:id", series_ctl.delete);

module.exports = router;