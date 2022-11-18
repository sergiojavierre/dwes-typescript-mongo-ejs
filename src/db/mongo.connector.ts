import { connect } from 'mongoose';

export default async function connectToDB() {
  await connect('mongodb://localhost:27017/test');
}