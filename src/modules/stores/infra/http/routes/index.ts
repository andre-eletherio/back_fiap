import { Request, Response, Router } from 'express'
import { RegisterController } from '../controllers/RegisterController'
import { UpdateController } from '../controllers/UpdateController'
import { LikeController } from '../controllers/LikeController'
import { GetLikeController } from '../controllers/GetLikeController'
import { GetUsersController } from '../controllers/GetUsersController'
import { LoginController } from '../controllers/LoginController'

const fiapRouter = Router()

const registerController = new RegisterController()
const updateController = new UpdateController()
const likeController = new LikeController()
const getLikeController = new GetLikeController()
const getUserController = new GetUsersController()
const loginController = new LoginController()

fiapRouter.get('/', () => console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'))
fiapRouter.post('/register', (req: Request, res: Response) => registerController.handle(req, res))
fiapRouter.patch('/update', (req: Request, res: Response) => updateController.handle(req, res))
fiapRouter.post('/like', (req: Request, res: Response) => likeController.handle(req, res))
fiapRouter.get('/likes', (req: Request, res: Response) => getLikeController.handle(req, res))
fiapRouter.get('/user', (req: Request, res: Response) => getUserController.handle(req, res))
fiapRouter.post('/login', (req: Request, res: Response) => loginController.handle(req, res))


export { fiapRouter }