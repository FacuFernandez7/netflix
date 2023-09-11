const db = require ('../../db/models/index');
const Movie = db['Movie'];


module.exports.findAllMovies = async (req, res)  => {
    const movies = await Movie.findAll();
    return res.status(200).json(movies)
}

module.exports.findById = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findByPk(id);
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(404).json("Movie not found" );
    }
}

module.exports.create = async (req, res) => {
    let {
        title,
        synopsis,
        score,
        genre,
        url_image,
        age,
    } = req.body

    try{
        const newMovie = await Movie.create({
            title,
            synopsis,
            score,
            genre,
            url_image,
            age,
        })
        return res.status(200).json(newMovie);
    } catch(error) {
        return res.status(500).json("Oops, something went wrong!")
    }

}

module.exports.update = async (req, res) => {
    const { id } = req.params;
    let {
        title,
        synopsis,
        score,
        genre,
        age,
    } = req.body

    if (title === "" || synopsis === "" ||
        score === "" || genre === "" || age === "")
        return res.status(400).json("Something field is empty!")

    try{
        const updateUser = await Movie.update({
            title,
            synopsis,
            score,
            genre,
            age,
        }, {where: {id: id}})
        return res.status(200).json(updateUser);
    } catch(error) {
        return res.status(500).json("Oops, something went wrong!")
    }
} 

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteMovie = await Movie.destroy({
            where: {id: id}})
        return res.status(200).json(deleteMovie);        
    } catch (error) {
        res.status(404).json("The movie not found")
    }
} 