const { movies } = require("../database/db");
const { v4: uuid } = require("uuid");

const getMovies = (req, res) => {
    return res.json({
      ok: true,
      msg: "Peliculas obtenidas",
      data: movies,
    });
  };

const createMovie = (req, res) => {
const { id, title, year, price} = req.body;

const movie = {
    id: uuid(),
    title: title,
    year: year,
    price: price,
};

movies.push(movie);

return res.json({
    ok: true,
    msg: "New movie added",
    data: movies,
});
};


  module.exports = {
    getMovies,
    createMovie,
  }