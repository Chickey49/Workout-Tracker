const mongoose = require("mongoose");
mongoose.set("debug", true);

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Enter a type of workout"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
      },
      duration: {
        type: Number,
        required: "Enter an amount of time"
      },
      distance: {
        type: Number,
        required: "Enter a distance"
      },
      weight: {
        type: Number,
        required: "enter a weight"
      },
      reps: {
        type: Number,
        required: "enter amount of reps"
      },
      sets: {
        type: Number,
        required: "enter amount of sets"
      }
    }
  ]
});



// type: "resistance",
// name: "Lateral Pull",
// duration: 20,
// weight: 300,
// reps: 10,
// sets: 4

const workoutModel = mongoose.model("workout", workoutSchema, "workouts");

module.exports = workoutModel;
