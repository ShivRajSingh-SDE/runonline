import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>Smart Edu.</h1>
            <p>
              Education is the passport to the future, for tomorrow belongs to
              those who prepare for it today.
            </p>

            <a href="https://www.linkedin.com/in/shiv-singh-7bb9411b9/">
              <i className="fab fa-linkedin icon"></i>
            </a>
            <a href="https://github.com/shivamkumarsha">
              <i className="fab fa-github icon"></i>
            </a>
            <a href="https://github.com/shivamkumarsha">
              <i className="fab fa-instagram icon"></i>
            </a>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>

          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Delhi Karol Bagh 110008, India
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +91 9876543217
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                shiv.info@g.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2022 All rights reserved | This template is made by
          <i className="text fa fa-heart pl-2  color-[black]"></i>
          <a href="/team">Shiv</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
