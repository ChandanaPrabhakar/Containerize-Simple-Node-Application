import { connect } from 'mongoose';

const connectDB = async () =>{
    try{
        await connect(process.env.DB_URI);
        console.log("Connected to database!");
    }catch(error){
        console.error("Mongodb connection failed... !", error.message);
        process.exit(1);
    }
}

export default connectDB;