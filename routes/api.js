const router = require("express").Router();
const workoutSchema = require("../models/workoutSchema.js");

router.post("/api/workout", ({ body }, res) => {
  workoutSchema.save(body)
    .then(output => {
      res.json(output);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/api/workout/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workout", (req, res) => {
  workoutSchema.find({})
    .sort({ date: -1 })
    .then(output => {
      res.json(output);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
