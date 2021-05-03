const Mongoose = require('mongoose')

class Database {
    constructor (url) {
        this.#init(url).then( _ => {
            this.usersCollection()
        })
    }

    async #init (url) {
        this.mongo = await Mongoose.connect(url, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    async collaction (name, schema) {
        return this.mongo.model(name, schema)
    }

    async usersCollection () {
        this.users =  await this.collaction("users", Mongoose.Schema({
            chat_id: {
                type: Number,
                required: true,
                unique: true,
                index: true
            },
            text: {
                type: String,
                trim: true,
                maxlength: 1024
            }
        }))
    }

    async findUser(chat_id) {
        return await this.users.findOne({ chat_id: chat_id })
    }

    async createUser (chat_id) {
        return await this.users.create({ chat_id: chat_id })
    }

    async setText (chat_id, text) {
        return await this.users.updateOne({ chat_id }, { text })
    }


    
}


module.exports = Database

