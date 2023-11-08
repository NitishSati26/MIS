import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Forget to add username"]  ,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, // This should be a string
    required: true,
  },
});

const EmployeeModel = new mongoose.model("signup", EmployeeSchema);

export default EmployeeModel;
