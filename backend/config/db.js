import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nazmulkarimtanvir:123456789mojaTa@cluster0.sxgi6.mongodb.net/food-del')
    .then(() => console.log('DB Connected'));
};