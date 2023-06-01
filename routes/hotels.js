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

/* // GET one student
//async await solution - error message appears- why?
 router.get("/:id", async (req, res, next) {
  //your code here
  //console.log("REQ.PARAMS.STUDENT_ID:", req.params); // req.params is an object
  const { student_id } = req.params; // destructuring
  try {
    const result = await db(`SELECT * FROM students WHERE id = ("${req.params.student_id}");`);
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//.then solution for GET one student

router.get("/:student_id", function(req, res) {
  const foundId = Number(req.params.student_id);
  db(`SELECT * FROM students WHERE id = ("${foundId}") ORDER BY id ASC;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// INSERT a new student into the DB
router.post("/", async (req, res, next) => {
  //your code here
  //console.log("REQ.BODY:", req.body); // req.body is an object
  try {
    await db(
      `INSERT INTO students (firstname, lastname) VALUES ("${req.body.firstname}", "${req.body.lastname}");`
    );
    const result = await db("SELECT * FROM students ORDER BY id ASC;"); //await second query,
    //store the result of this await in this variable
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a student from the DB
router.delete("/:id", async (req, res, next) => {
  //your code here
  const foundId = +req.params.student_id; //the + sign converts the string to a number
  await db(`DELETE from students WHERE id = ("${foundId}");`);
  const result = await db("SELECT * FROM students ORDER BY id ASC,");
}); */

module.exports = router;