const User = require('../services/authService')

async function login(req, res){
    try {
        const { email, password} = req.body;
        const user = await user   
    } catch (error){
        console.log(error.message);
    }
}


module.exports = { login}