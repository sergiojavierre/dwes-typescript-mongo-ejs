import { Schema, model} from 'mongoose';

interface IUser {
    name: String;
    email: String;
}

// https://mongoosejs.com/docs/guide.html
const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const User = model<IUser>('User', userSchema);

export default User;
export {IUser};