'use strict'

const User = use('App/Models/User')

class UserController {
    async registerUser({ request, response }) {
        const { name } = request.all()
        const user = await User.create({ name })
        response.header("Access-Control-Allow-Origin", "*");
        return response.json(user)
    }

    async getUsers({ response }) {
        const users = await User.all()
        response.header("Access-Control-Allow-Origin", "*");
        return response.json(users)
    }
}

module.exports = UserController
