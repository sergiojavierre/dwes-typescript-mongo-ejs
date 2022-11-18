import express, {Request, Response} from 'express';
//routes
import {routerUsers} from './routes/user.router'
//db
import connectToDB from "./db/mongo.connector";

const app = express();
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', './src/views');


//define routes
app.use('/users', routerUsers)
//web routes

//connect to db
connectToDB().catch(err => console.log(err));
//listen
const port = 8080
app.listen(port, () => {
  console.log(`Application started on port ${port}`);
});