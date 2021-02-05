const router = require("express").Router();
const workoutModel = require("../models/workoutSchema.js");
// comment
router.post("/api/workouts", async (req, res) => {
  workoutModel.create({})
    .then(output => {
      res.json(output);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  let target = req.params.id
  workoutModel.findByIdAndUpdate(
    { _id: target },
    { $push: { exercises: [req.body] } },
    function (err, result) {
      if (err) {
        res.status(400).json(err);
      }
      else {
        res.json(result);
      }
    })
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
router.get("/api/workouts", async (req, res) => {
  workoutModel.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$excersises.duration',
        }
      }
    }
  ])
    .then(output => {
      res.json(output);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", async (req, res) => {
  workoutModel.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$excersises.duration',
        }
      }
    }
  ])
  .sort({ date: -1 })
  .then(output => {
    res.json(output);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get("/api/workouts/range", async (req, res) => {
  await workoutModel.find({})
    .sort({ date: -1 })
    .then(output => {
      res.json(output);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
