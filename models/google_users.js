const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        first_name: { type: String  },
        last_name: { type: String  }
    },
    email: { type: String  },
    id: { type: String  },
    picture: { type: String  },
}, { timestamps: true });

module.exports = mongoose.model('google_users', User);
