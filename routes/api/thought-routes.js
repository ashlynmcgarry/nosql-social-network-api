const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controllers");

// /api/thoughts

// GET all thoughts, POST new thought
router.route("/").get(getAllThoughts).post(createThought);

//GET single thought by ID, UPDATE single thought by ID, DELETE single thought by ID
router.route("/:thoughtId").get(getSingleThoughtById).put(updateThoughtById).delete(deleteThoughtById);

// POST reaction to thought by thought ID
router.route("/:thoughtId/reactions").post(createReaction);

// DELETE reaction to thought by thought ID & reaction ID
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
