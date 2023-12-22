import {Schema, model} from 'mongoose'

export interface User{
    _id?: string;
    username: string;
    password: string;
    avaiableMoney: number;
    // purchasedItems: string[];
}

const userSChema = new Schema<User>({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avaiableMoney: {type: Number, default: 5000},

});

export const userModel = model<User>("user", userSChema);