import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/bd");
        console.log("conectada a la base de datos")
    } catch (error){
        console.log(error)
    }
};

