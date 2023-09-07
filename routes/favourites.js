const express = require("express")
const router = express.Router()
const db = require("../model/helper")

// POST route to mark a hotel as a favourite
router.post("/favourites/:hotelId", (req, res) => {
  const { hotelId } = req.params

  // Insert a record into the 'favourites' table with the given hotelId
  const sql = "INSERT INTO favourites (hotel_id) VALUES (?)"
  db.query(sql, [hotelId], (err, result) => {
    if (err) {
      console.error(err)
      return res
        .status(500)
        .json({ error: "Unable to mark hotel as favourite" })
    }
    res.status(201).json({ message: "Hotel marked as favourite" })
  })
})

// PUT route to update the favourite status of a hotel
router.put("/favourites/:hotelId", (req, res) => {
  const { hotelId } = req.params
  const { isFavourite } = req.body

  // Update the 'favourites' table to set the favourite status
  const sql = "UPDATE favourites SET is_favourite = ? WHERE hotel_id = ?"
  db.query(sql, [isFavourite, hotelId], (err, result) => {
    if (err) {
      console.error(err)
      return res
        .status(500)
        .json({ error: "Unable to update hotel's favourite status" })
    }
    res.json({ message: "Hotel's favourite status updated" })
  })
})

// GET route to fetch favourite hotels
router.get("/favourites/:hotelId", (req, res) => {
  // Join 'favourites' with 'hotels' to get details about favourite hotels
  const sql = `
      SELECT hotels.*
      FROM hotels
      JOIN favourites ON hotels.id = favourites.hotel_id
    `
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: "Unable to fetch favourite hotels" })
    }
    res.json(results)
  })
})

module.exports = router
