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
  const {hotel_id} = (req.params);
  console.log(hotel_id);
  db(`SELECT * FROM hotels WHERE id = ("${hotel_id}") ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//.then solution for GET hotels by location
router.get("/location/:name", function(req, res) {
  const {name} = req.params;
  console.log("***", name);
  db(`SELECT * FROM hotels WHERE location = "${name}" ORDER BY id ASC;`)
  
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//.then solution for GET hotels by price range
router.get("/price/:price_range", function(req, res) {
  const {price_range} = req.params;
  db(`SELECT * FROM hotels WHERE price_range = "${price_range}" ORDER BY id ASC;`)
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