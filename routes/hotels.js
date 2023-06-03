var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET hotel list localhost:4000/api/hotels
router.get("/", function(req, res, next) {
  db("SELECT * FROM hotels;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//.then solution for GET one hotel
router.get("/:hotel_id", function(req, res) {
  const foundId = Number(req.params.hotel_id);
  db(`SELECT * FROM hotels WHERE id = ("${foundId}") ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//INSERT a new hotel into the DB
router.post("/", async (req, res, next) => {
try {
    await db(
      `INSERT INTO hotels (image_URL, name, location, description, price_range, yoga, spa) VALUES ("${req.body.image_URL}", "${req.body.name}", "${req.body.location}" );`
    );
    const result = await db("SELECT * FROM hotels ORDER BY id ASC;"); //await second query,
    //store the result of this await in this variable
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a hotel from the DB
router.delete("/:hotel_id", async (req, res, next) => {
  try {
    const foundId = +req.params.hotel_id; //the + sign converts the string to a number
    await db(`DELETE from hotels WHERE id = "${foundId}";`);
    const result = await db("SELECT * FROM hotels ORDER BY id ASC;");
    res.send(result.data);
  
} catch (err) {
    res.status(500).send(err);
  }
}); 

module.exports = router