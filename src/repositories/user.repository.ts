import User,{IUser} from "../models/User"

export default interface IUserRepository{
    findAll(): Promise<IUser[]>
    add(user: IUser): Promise<IUser | undefined>
}