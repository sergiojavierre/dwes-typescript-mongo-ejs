import User, { IUser } from '../models/User'
import IUserRepository from "./user.repository";

export default class UserRepositoryMongo implements IUserRepository{
    async findAll(): Promise<IUser[]>{
        return User.find({});
    }
    async add(user: IUser): Promise<IUser | undefined> {
        const newUser = new User({
            name: user.name,
            email: user.email
        })
        return newUser.save();
    }
}