import Express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import EmployeeModel from "./models/Employee.js";
import bcrypt from "bcrypt";

const app = Express();
app.use(Express.json());
app.use(Cors());
import("./db/conn.js");


app.post('/signup', async (req, res) => {
    try {
        const name =  req.body.name;
        const email =  req.body.email;
        const password =  req.body.password;
        const confirmPassword =  req.body.confirmPassword;

        // const { name, email, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json("All fields are required.");
        }

        const existingUser = await EmployeeModel.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json("User with this email already exists.");
        }

        if (password !== confirmPassword) {
            return res.status(400).json("Passwords do not match.");
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new EmployeeModel({
            name: name,
            email: email,
            password: hashedPassword
            // ConfirmPassword: confirmPassword
        });
        console.log(newUser);       
        const resultSU = await newUser.save();
        res.json(resultSU);
        
    } catch (error) {
        console.log(error);
        res.status(500).json("An error occurred during registration");
    }
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, result) => {
            if(result) {
                res.json("Success")
            } else {
                res.json("The password is incorrect")
            }
        } )}else {
            res.json("No record existed")
        }
    })
})

app.post('/forgot', async (req, res) => {
    const { email } = req.body;

    const user = await EmployeeModel.findOne({ email });
  if (!user) {
    return res.status(404).json({
 
message: 'User not found' });
  }

})

app.listen(3001, () => {
    console.log("Server is running")
})
