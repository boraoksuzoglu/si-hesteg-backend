const dbRestaurant = require("../models/restaurant") 
      dbFood = require("../models/food")

exports.get_cities = async (req, res) => {

    // No parameter
    //example respond: res.json(["Şehir 1", "Şehir 2", "Şehir 3"])

    const restaurants = await dbRestaurant.find()
    const cities = restaurants.map(s => s.res_location.city)
    const fixDuplicates = cities.filter((elem, pos) => {
        return cities.indexOf(elem) == pos
    })
    res.json(fixDuplicates)


}
exports.get_neighborhoods = async (req, res) => {

    // req.query.city & req.query.district
    //example respond: res.json(["Mahalle 1", "Mahalle 2"])

    const restaurants = await dbRestaurant.find({"res_location.city": req.query.city, "res_location.district": req.query.district})
    const neighborhoods = restaurants.map(s => s.res_location.neighborhood)
    const fixDuplicates = neighborhoods.filter((elem, pos) => {
        return neighborhoods.indexOf(elem) == pos
    })
    res.json(fixDuplicates)

}



