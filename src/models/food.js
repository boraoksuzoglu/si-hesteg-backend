const mongoose = require('mongoose');

module.exports = mongoose.model("food", new mongoose.Schema({

    name: String,
    res_id: String,
    imagePath: String

}))