import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {

  const handleLogin = e => {
    e.preventDefault();

    const formData = e.target;

  }

  return (
    <div>
      <div className="hero mt-15">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#14A800]">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-96 shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="form">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn bg-[#14A800] text-white hover:bg-[#108600] mt-4">Login</button>
              </form>
              <p>Don't have an account?<Link to="/register" className="link link-hover text-[#14A800]">Register</Link></p>
              <div className="divider">OR</div>
              <button className="btn bg-[#14A800] text-white hover:bg-[#108600]"><FaGoogle></FaGoogle>Sign in with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
