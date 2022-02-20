const dbRestaurant = require("../models/restaurant") 
      dbFood = require("../models/food")
      uuid = require("uuid")
      bcrypt = require("bcrypt")
      path = require("path")

// localhost/restaurant/RES_ID
exports.restaurant = async (req, res) => {

    const rest = await dbRestaurant.findById(req.params.restaurant)
    if (rest) res.json({
        "res_location": rest.res_location,
        "res_name": rest.res_name,
        "res_phone": rest.res_phone,
        "_id": rest._id
    })
    else res.json({error: "not found"})

}

// localhost/restaurant/upload
exports.upload_food = async (req, res) => {

    if (!req.body.food || !req.files) return res.json({error: "some parameters are empty"})

    const rest = await dbRestaurant.findOne({accessToken: req.body.accessToken})

    // Image path
    const imagePath = path.resolve(__dirname, "../../public/images", uuid.v4() + "." + req.files.image.name.substr(req.files.image.name.length - 5))

    // Move image file to public/images
    req.files.image.mv(imagePath)
    
    await dbFood.create({name: req.body.food, imagePath: imagePath, res_id: rest._id})
    res.json({success: true})

}

// localhost/restaurant/remove
exports.delete_food = async (req, res) => {

    const rest = await dbRestaurant.findOne({accessToken: req.body.accessToken})

    if (!rest) return res.json({error: "not found"})

    await dbFood.findOneAndDelete({_id: req.body.food, res_id: rest._id})

    res.json({success: true})

}

// localhost/restraunt/RES_ID/food
exports.get_food = async (req, res) => {

    const rest = await dbFood.find({res_id: req.params.restaurant})
    if (!rest) return res.json({error: "not found"})
    res.json(rest)

}

// localhost/search?
exports.get_restaurants = async (req, res) => {

    const rest = await dbRestaurant.find({
        "res_location.neighborhood": req.query.neighborhood, 
        "res_location.city": req.query.city, 
        "res_location.district": req.query.district
    })

    if (rest) res.json(rest.map(r => { return {
        "location": r.res_location,
        "res_name": r.res_name,
        "res_phone": r.res_phone,
        "_id": r._id
    }}))

}

exports.login = async (req, res) => {

    const user = await dbRestaurant.findOne({username: req.body.username})

    if (user == null) return res.send({error: "user does not exist"})

    if (!await bcrypt.compare(req.body.password, user.password)) return res.json({error: "wrong password"})

    const accessToken = uuid.v1()
    await dbRestaurant.updateOne({username: req.body.username}, {$set: {accessToken: accessToken}})

    res.json({_id: user._id, accessToken: accessToken})

}

exports.register = async (req, res) => {

    if (!req.body.address || !req.body.username || !req.body.password || !req.body.phone || !req.body.name) return res.json({error: "some parameters are empty"})
    if (await dbRestaurant.findOne({username: req.body.username}) != null) return res.json({error: "username already exists"})

    let hashedPass = await bcrypt.hash(req.body.password, 10)
    await dbRestaurant.create({
        username: req.body.username,
        password: hashedPass,
        res_name: req.body.name,
        res_phone: req.body.phone,
        res_location: {
            city: req.body.city,
            district: req.body.district,
            neighborhood: req.body.neighborhood,
            address: req.body.address
        }
    })
    res.json({success: true})

}