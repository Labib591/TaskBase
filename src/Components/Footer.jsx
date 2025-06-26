import React from "react";
// import Logo from "../assets/TaskBase.png";
import { Link } from "react-router";
import { FaFacebook, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-main">
      <footer className="footer sm:footer-horizontal bg-[#021100] text-[#DBF6D7] p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a href="/tasks" className="link link-hover">Branding</a>
          <a href="/tasks" className="link link-hover">Design</a>
          <a href="/tasks" className="link link-hover">Marketing</a>
          <a href="/tasks" className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <button onClick={() => {
            const element = document.getElementById('success');
            element.scrollIntoView({ behavior: 'smooth' });
          }} className="link link-hover">About us</button>
          <a className="link link-hover">Contact</a>
          <Link to={"/tasks"} className="link link-hover">Jobs</Link>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-[#021100] text-[#DBF6D7] border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <div>
            <Link to={"/"}>
            <h1 className="text-3xl font-bold text-[#14A800]">TaskBase</h1>
          </Link>
          </div>
          <p>
            TaskBase Inc.
            <br />
            Providing reliable tech since 2025
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/mahi.labib.12036" target="blank">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/mahir-mohammed-labib-bb3085209/" target="blank">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/Labib_591" target="blank">
              <FaTwitter />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
