import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const RegisterPage = () => {
    return (<div>
      <div className="hero w-[30rem] mx-auto mt-10">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#14A800]">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
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
                <button className="btn bg-[#14A800] text-white hover:bg-[#108600] mt-4">Register</button>
              </fieldset>
              <p>Already have an account?<Link to="/login" className="link link-hover text-[#14A800]">Login</Link></p>
              <div className="divider">OR</div>
              <button className="btn bg-[#14A800] text-white hover:bg-[#108600]"><FaGoogle></FaGoogle>Sign in with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default RegisterPage;