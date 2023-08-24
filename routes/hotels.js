var express = require("express")
var router = express.Router()
const db = require("../model/helper")

// GET hotel list localhost:4000/api/hotels -TESTED AND WORKS
router.get("/", async function (req, res) {
  try {
    const results = await db(`SELECT * FROM hotels;`)
    /* console.log(results) */
    res.send(results.data)
  } catch (err) {
    res.status(500).send(err)
  }
})

//solution for GET one hotel- TESTED AND WORKS
router.get("/:hotel_id", async function (req, res) {
  const { hotel_id } = req.params
  try {
    const results = await db(
      `SELECT * FROM hotels WHERE id = ("${hotel_id}") ORDER BY id ASC;`
    )
    res.send(results.data)
  } catch (err) {
    res.status(500).send(err)
  }
})

//solution for GET hotels by location-TESTED AND WORKS
router.get("/location/:location", async function (req, res) {
  const { location } = req.params
  try {
    const results = await db(
      `SELECT * FROM hotels WHERE location = ("${location}") ORDER BY id ASC;`
    )
    res.send(results.data)
  } catch (err) {
    res.status(500).send(err)
  }
})

//solution for GET hotels by price range - TESTED AND WORKS ON POSTMAN
router.get("/price_range/:price_range", async function (req, res) {
  const { price_range } = req.params
  try {
    const results = await db(
      `SELECT * FROM hotels WHERE price_range = ("${price_range}") ORDER BY id ASC;`
    )
    res.send(results.data)
  } catch (err) {
    res.status(500).send(err)
  }
})

//solution for GET hotels by yoga onsite
router.get("/yoga", async function (req, res) {
  const { yoga } = req.params
  try {
    const results = await db(
      `SELECT * FROM hotels WHERE yoga = ("${yoga}") ORDER BY id ASC;`
    )
    res.send(results.data)
  } catch (err) {
    res.status(500).send(err)
  }
})

//INSERT a new hotel into the DB
/* router.post("/", async (req, res) => {
  try {
    await db(
      `INSERT INTO hotels (image_URL, name, location, description, price_range, yoga, spa) VALUES ("${req.body.image_URL}", "${req.body.name}", "${req.body.location}" );`
    )
    const results = await db("SELECT * FROM hotels ORDER BY id ASC;") //await second query,
    //store the result of this await in this variable
    res.send(results.data)
  } catch (err) {
    res.status(500).send(err)
  }
}) */

// DELETE a hotel from the DB
router.delete("/:hotel_id", async (req, res) => {
  const foundId = +req.params.hotel_id //the + sign converts the string to a number
  try {
    await db(`DELETE from hotels WHERE id = "${foundId}";`)
    const results = await db("SELECT * FROM hotels ORDER BY id ASC;")
    res.send(results.data)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router
