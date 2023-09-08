const express = require('express');
const router = express.Router();
const movie_ctl = require('../controllers/movie')

router.get("/", movie_ctl.findAllMovies);

router.get("/:id", movie_ctl.findById);

router.post("/", movie_ctl.create);

router.put("/:id", movie_ctl.update);

router.delete("/:id", movie_ctl.delete);

module.exports = router;