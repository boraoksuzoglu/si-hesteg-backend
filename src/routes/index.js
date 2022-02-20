const express = require("express")
      router = express.Router()
      restaurantController = require("../controllers/restaurantController")
      countryController = require("../controllers/countryController")


router.get("/search", restaurantController.get_restaurants)

router.get("/cities", countryController.get_cities)

router.get("/neighborhoods", countryController.get_neighborhoods)

router.post("/login", restaurantController.login)

router.post("/register", restaurantController.register)


module.exports = router