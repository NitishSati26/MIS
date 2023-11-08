import React, { useState } from "react";
import "Scenes/login/Login.css";
import Header from "components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:3001/login", { email, password })
    .then((result) => {
      console.log(result.data);
      console.log(result);
      if (result.data === "Success") {
        navigate("/dashboard");
      } else {
        alert(result.data);
      }
    })
    .catch((err) => console.log(err));
  };
  
  return (
    <div>
      <Header />
      <div className="cont">
        <div className="form sign-in">
          <h2>Welcome</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Email</span>
              <input
                type="text"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <p className="forgot-pass"><Link to="/forgot" className="forgo-pass">Forgot password?</Link></p>
            <button type="button" className="submit" onClick={handleSubmit}>
              Sign In
            </button>
          </form>
        </div>
        <div className="right-side">
          <div className="right">
            <h3>Don't have an account? Please Sign up!</h3>
            <p><Link to="/signup" className="up">
              Sign Up
            </Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// function Login() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/login", { email, password })
//       .then((result) => {
//         console.log(result);
//         if (result.data === "Success") {
//           navigate("/dashboard");
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <Header />

//       <div className="container">
//         <div className="center">
//           <div className="at-container">
//             <div className="at-item">Login</div>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="txt_field">
//               <input
//                 type="text"
//                 id="email"
//                 name="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <span></span>
//               <label for="email">Email</label>
//             </div>
//             <div className="txt_field">
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <span></span>
//               <label for="password">Password</label>
//             </div>
//             <div className="pass">Forgot Password?</div>
//             <input type="submit" value="Sign in" formaction="/sign-in" />
//             <div className="signup_link">
//               Not a member? <Link
//             to="/signup"
//             className="link"
//           >
//             Sign up
//           </Link>
//             </div>
//           </form>
//         </div>
//         <footer className="login-footer">
//           <a href="#">Help</a>
//           <a href="#">Privacy</a>
//           <a href="#">Terms</a>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Login;