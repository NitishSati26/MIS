import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/employee")
// mongoose.connect("mongodb+srv://pshsati:12345@cluster0.oxdm5oq.mongodb.net/?retryWrites=true&w=majority")
.then( ()=> console.log("Connection successful..."))
.catch( (err) => console.log(`Error in DB connection: ${err}`));

