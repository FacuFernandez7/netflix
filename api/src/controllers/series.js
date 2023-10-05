const db = require ('../../db/models/index');
const { v4: uuidv4 } = require("uuid");
const Series = db['Series'];


module.exports.findAllSeries = async (req, res)  => {
    const series = await Series.findAll();
    return res.status(200).json(series)
}

module.exports.findById = async (req, res) => {
    const { id } = req.params;
    try {
        const series = await Series.findByPk(id);
        return res.status(200).json(series);
    } catch (error) {
        return res.status(404).json("Series not found" );
    }
}

module.exports.create = async (req, res) => {
    let {
        title,
        synopsis,
        score,
        genre,
        age,
        seasons,
    } = req.body
    const url_image = uuidv4();
    try{
        const newSeries = await Series.create({
            title,
            synopsis,
            score,
            genre,
            url_image,
            age,
            seasons,
        })
        return res.status(200).json(newSeries);
    } catch(error) {
        return res.status(500).json("Oops, something went wrong!")
    }

}

module.exports.update = async (req, res) => {
    const { id } = req.params;
    const { title, synopsis, score, genre, seasons, age } = req.body;
    try {
      await Series.update(
        {
          title,
          synopsis,
          score,
          genre,
          seasons,
          age,
        },
        { where: { id: id } }
      );
      const updatedSerie = await Series.findByPk(id);
      return res.status(200).json(updatedSerie);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteSeries = await Series.destroy({
            where: {id: id}})
        return res.status(200).json(deleteSeries);        
    } catch (error) {
        res.status(404).json("The series not found")
    }

} 