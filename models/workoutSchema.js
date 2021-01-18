const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
});

// type: "resistance",
// name: "Lateral Pull",
// duration: 20,
// weight: 300,
// reps: 10,
// sets: 4

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
