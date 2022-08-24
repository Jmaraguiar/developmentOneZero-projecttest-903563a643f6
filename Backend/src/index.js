import koaBody from "koa-body";
import { router } from "./app.js";
import { UserController } from "./controllers/userControllers.js";

const userController = new UserController()

router.get('/', userController.isOnline)

router.get('/users/empty', userController.emptyList)

router.get('/users/all', userController.getAllUsers)

router.get('/user/:name', koaBody(), userController.getUserByName)

router.put('/update', koaBody(), userController)

router.post('/signup', koaBody(), userController.insertUser)

router.delete('/del/:name', koaBody(), userController.deleteUserByName)