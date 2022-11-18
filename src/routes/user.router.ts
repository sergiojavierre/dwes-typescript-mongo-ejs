import express, { Request, Response } from 'express'
import User, {IUser} from '../models/User'
import UserRepositoryMongo from '../repositories/user.repository.mongo'
const router = express.Router()

const usersRepository = new UserRepositoryMongo()

router.get('/', async ( req: Request, res: Response) => {
    try {
        const users = await usersRepository.findAll()
        res.send(users)
    }
    catch (error) {
        res.send(error)
    }
})

router.get('/web', async (req: Request, res: Response) => {
    const users = await usersRepository.findAll()
    // https://ejs.co/#docs
    res.render('users', {users})
})

router.post('/', async ( req: Request, res: Response) => {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email
        }
        const users = await usersRepository.add(user)
        res.send(users)
    }
    catch (error) {
        res.send(error)
    }
})


export { router as routerUsers};