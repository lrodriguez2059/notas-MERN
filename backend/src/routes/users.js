const { Router } = require("express");
const router = Router();
const { getUsers,createUser,deleteUser,updateUser,getUser } = require('../controllers/usersController')

router.route("/")
.get(getUsers)
.post(createUser);

router.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;
