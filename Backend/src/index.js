import koaBody from "koa-body";
import { router } from "./app.js";
import { UserController } from "./controllers/userControllers.js";

const userController = new UserController()

router.get('/', userController.isOnline)

router.get('/users', userController.emptyList)

router.post('/signup', koaBody(), userController.insertUser)