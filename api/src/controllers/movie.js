const db = require("../../db/models/index");
const { v4: uuidv4 } = require("uuid");
const Movie = db["Movie"];

module.exports.findAllMovies = async (req, res) => {
  const movies = await Movie.findAll();
  return res.status(200).json(movies);
};

module.exports.findById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByPk(id);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(404).json("Movie not found");
  }
};

module.exports.create = async (req, res) => {
  const { title, synopsis, score, genre, age } = req.body;
  const url_image = uuidv4();
  try {
    const newMovie = await Movie.create({
      title,
      synopsis,
      score,
      genre,
      url_image,
      age,
    });
    return res.status(200).json(newMovie);
  } catch (error) {
    return res.status(500).json("oops something went wrong" + error);
  }
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, synopsis, score, genre, age } = req.body;

  /*if (
    title === "" ||
    synopsis === "" ||
    score === "" ||
    genre === "" ||
    age === ""
  )
    return res.status(400).json("Something field is empty!");
    */
  try {
    await Movie.update(
      {
        title,
        synopsis,
        score,
        genre,
        age,
      },
      { where: { id: id } }
    );
    const updatedMovie = await Movie.findByPk(id);
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(500).json("Oops, something went wrong!" + error);
  }
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMovie = await Movie.destroy({
      where: { id: id },
    });
    return res.status(200).json(deleteMovie);
  } catch (error) {
    res.status(404).json("The movie not found");
  }
};
