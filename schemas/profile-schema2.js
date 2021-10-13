const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const profileSchema2 = mongoose.Schema({
  guildId: reqString,
  userId: reqString,
  coins: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('profiles2', profileSchema2)
