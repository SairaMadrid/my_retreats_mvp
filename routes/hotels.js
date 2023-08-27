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

//solution for GET hotels by yoga onsite- decided to show this on the card when a user searches the location instead
/* router.get("/yoga/:yoga", async function (req, res) {
  const { yoga } = req.params

  try {
    console.log("Received yoga parameter:", yoga)

    const query = `SELECT * FROM hotels WHERE yoga = ? ORDER BY id ASC;`
    console.log("Executing query:", query)

    const results = await db(query, [yoga === "true" ? 1 : 0])

    // Assuming results object structure in your helper.js
    console.log("Results from db:", results)

    if (results.error) {
      console.error("Database error:", results.error)
      res.status(500).json({ error: "An error occurred." })
      return
    }

    // results.data contains the query results
    console.log("Sending JSON response:", results.data)
    res.json(results.data)
  } catch (err) {
    console.error("Server error:", err)
    res.status(500).json({ error: "An error occurred." })
  }
})
 */

//INSERT a new hotel into the DB
router.post("/", async (req, res) => {
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
})

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

//Favourite a hotel and add to your list on another link
//POST request

module.exports = router
