const { Router } = require("express");
const {
    getMovies,
    createMovie,
} = require("../controllers/movies.controller");

const router = Router();

router.get("/", getMovies);
router.post("/", createMovie);

module.exports = router;