import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express()
dotenv.config();
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.set("strictQuery", true);
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected!");
});



//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())
 
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);


// const CONNECTION_URL ='mongodb+srv://Gopika:mongo4us@cluster0.fvf1gib.mongodb.net/booking?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// mongoose.set("strictQuery", true);
// mongoose.connect(CONNECTION_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(()=>app.listen(PORT,()=>console.log('http://localhost:5000')))
// .catch((error)=> console.log("error",error));





app.get("/",(req,res)=>{
    res.send("Hello world")
});


app.listen(3000,()=>{
    connect()
    console.log("Connected to backend!!!!!");
});  