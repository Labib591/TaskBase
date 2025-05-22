import React, { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import {
  getAuth,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";

const RegisterPage = () => {

  const {createUser} = use(AuthContext);

  const handleRegister = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passRegex.test(password)) {
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>;
      return;
    }

    createUser(email, password).then((result) => {
      const user = result.user;
      updateProfile(user, {
        displayName: name,
        photoURL: image,
      });
      // console.log(user);
    });
  }

    return (<div>
      <div className="hero w-[30rem] mx-auto mt-10">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#14A800]">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister} className="fieldset">
                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="John Doe" />
                <label className="label">Image</label>
                <input type="text" name="image" className="input" placeholder="Your Image URL" />
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <button type="submit" className="btn bg-[#14A800] text-white hover:bg-[#108600] mt-4">Register</button>
              </form>
              <p>Already have an account?<Link to="/login" className="link link-hover text-[#14A800]">Login</Link></p>
              <div className="divider">OR</div>
              <button  className="btn bg-[#14A800] text-white hover:bg-[#108600]"><FaGoogle></FaGoogle>Sign in with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default RegisterPage;