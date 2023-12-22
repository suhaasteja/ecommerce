import express from 'express';
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from './routes/user';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

mongoose.connect("mongodb+srv://suhaasteja:ecommercepassword@e-commerce.q5iehpe.mongodb.net/?retryWrites=true&w=majority");

app.listen(3001, () => console.log("SERVER STARTED"));
