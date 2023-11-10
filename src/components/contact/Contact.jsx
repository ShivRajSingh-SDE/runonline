import React from "react";
import Back from "../common/back/Back";
import "./contact.css";
import Hblog from "../home/Hblog";


const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.05548280008!2d77.18302194652583!3d28.651816790766684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029c5f402ed3%3A0x942174294c9dd946!2sKarol%20Bagh%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1697097234077!5m2!1sen!2sin";

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Delhi Karol Bagh 110008, India</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> shiv.info@g.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +91 9876543217</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <a href="https://github.com/shivamkumarsha">
              <i className="fab fa-github icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/shiv-singh-7bb9411b9/">
              <i className="fab fa-linkedin icon"></i>
            </a>
          </div>
        </div>
      </section>

                    <Hblog/>

    </>
  );
};

export default Contact;
