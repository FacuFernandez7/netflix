const db = require ('../../db/models/index');
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
        url_image,
        age,
        seasons,
    } = req.body

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
/*
module.exports.update = async (req, res) => {
    const { id } = req.params;
    let {
        name,
        lastname,
        birth,
        email,
        password,
    } = req.body
    if (birth === undefined) birth = new Date(); //DELETE WHEN CREATE A FORM

    if (name === "" || lastname === "" ||
        email === "" || password === "" )
        return res.status(400).json("Something field is empty!")

    try{
        const updateUser = await User.update({
            name,
            lastname,
            birth,
            email,
            password,
        }, {where: {id: id}})
        return res.status(200).json(updateUser);
    } catch(error) {
        return res.status(500).json("Oops, something went wrong!")
    }
} */

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteSeries = await Movie.destroy({
            where: {id: id}})
        return res.status(200).json(deleteSeries);        
    } catch (error) {
        res.status(404).json("The series not found")
    }
    


} 