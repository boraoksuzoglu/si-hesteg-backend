const mongoose = require('mongoose');

module.exports = mongoose.model("restaurant", new mongoose.Schema({

    res_name: String,
    res_location: {
        city: String, // şehir
        district: String, // ilçe
        neighborhood: String, // mahalle
        address: String // açık adres
    },
    password: String,
    res_phone: String,
    res_url: String,
    username: String,
    accessToken: String

}))