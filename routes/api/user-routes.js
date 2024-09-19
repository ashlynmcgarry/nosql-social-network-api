const router = require("express").Router();
const {
  getAllUsers,
  getSingleUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controllers");

// /api/users

// GET all users, POST new user
router.route("/").get(getAllUsers).post(createUser);

// GET user by ID, UPDATE user by ID, DELETE user by ID
router.route("/:userId").get(getSingleUserById).put(updateUserById).delete(deleteUserById);

// ADD friend by ID, DELETE friend by ID
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
