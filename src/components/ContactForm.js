import "./ContactForm.css";
import React from "react";

const ContactForm = () => {
  return (
    <div className="form">
      <form action="https://formspree.io/f/xjvdpzon" method="POST">
        <label>Your Name</label>
        <input type="text" name="Name" required></input>
        <label>Email</label>

        <input type="email" name="Email" required></input>
        <label>Phone Number</label>
        <input type="number" name="Phone number" required></input>
        <label>Subject</label>
        <input type="text" name="Subject" required minLength={5}></input>

        <label>Message</label>
        <textarea
          required
          rows="6"
          name="Message"
          placeholder="Type yor message here !!"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
