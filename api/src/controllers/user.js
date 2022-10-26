const db = require ('../../db/models/index');
const User = db['User'];


module.exports.findAllUser = async (req, res)  => {
    const users = await User.findAll();
    return res.status(200).json(users)
}

module.exports.findById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json("User not found" );
    }
}

module.exports.register = async (req, res) => {
    let {
        name,
        lastname,
        birth,
        email,
        password,
        url_image
    } = req.body

    if (birth === undefined) birth = new Date(); //DELETE WHEN CREATE A FORM

    try{
        const newUser = await User.create({
            name,
            lastname,
            birth,
            email,
            password,
            url_image
        })
        return res.status(200).json(newUser);
    } catch(error) {
        return res.status(500).json("Oops, something went wrong!")
    }

}

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
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const deleteUser = await User.destroy({
            where: {id: id}})
        return res.status(200).json(deleteUser);        
    } catch (error) {
        res.status(404).json("The user not found")
    }
    


} 


    