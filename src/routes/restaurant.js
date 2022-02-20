const express = require("express")
      router = express.Router()
      restaurantController = require("../controllers/restaurantController")

router.get("/:restaurant", restaurantController.restaurant)

router.get("/:restaurant/food", restaurantController.get_food)

router.post("/upload", restaurantController.upload_food)

router.post("/delete", restaurantController.delete_food)

module.exports = router