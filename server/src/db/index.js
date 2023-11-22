import mongoose from "mongoose";

export const connectDB = async ()=>{
        try{
            await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        }catch(error){
            console.log(error); 
            throw error; 
        }
}
