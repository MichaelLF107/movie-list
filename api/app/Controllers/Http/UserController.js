// eslint-disable-next-line no-undef
const User = use('App/Models/User')

class UserController {
    async registerUser({ request, response }) {
        const res = request.all().res
        const user = new User()
        user.name = res.name
        user.admin = res.admin
        user.file = res.file
        user.file_name = res.file_name
        await user.save()
        response.header("Access-Control-Allow-Origin", "*");
        return response.status(201)
    }

    async getUsers({ response }) {
        const users = await User.all()
        response.header("Access-Control-Allow-Origin", "*");
        return response.json(users)
    }

    async getUserById({ params, response }) {
        const user = await User.find(params.id)
        response.header("Access-Control-Allow-Origin", "*");
        return response.json(user)
    }

    async deleteUser({ params, response }) {
        const user = await User.find(params.id)
        if (user) {
            await user.delete()
            return response.send(user)
        }
        response.header("Access-Control-Allow-Origin", "*");
        return response.status(404).send({ data: 'Resource not found' })
    }
}

module.exports = UserController
