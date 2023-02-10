// After commit

import React, { useState, useEffect } from "react";

const Contact = () => {
  return (
    <>
      <div className="Contact">
        <main>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label>Name</label>
              <input type="text" required placeholder="Enter here..." />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required placeholder="Enter Email" />
            </div>
            <div>
              <label>Message</label>
              <input
                type="text"
                required
                placeholder="Tell us about your querry..."
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
