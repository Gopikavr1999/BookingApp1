import mongoose from 'mongoose';
const { Schema } = mongoose;
const RoomSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
        type: Number,
        required: true,
        unique: true,
      },
    maxPeople: {
        type: Number,
        required: true,
        unique: true,
      },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{number:Number,unavailableDates:{type:[Date]}}],
  },
  {timestamps:true}
  );

//   [
//     {number:101,unavailableDates:[01.01.2023,03.01.2023]}
//     {number:102,unavailableDates:[01.01.2023,03.01.2023]}
//     {number:103,unavailableDates:[]}
//     {number:104,unavailableDates:[]}
//     {number:105,unavailableDates:[]}


//   ]

  export default mongoose.model("Room", RoomSchema)