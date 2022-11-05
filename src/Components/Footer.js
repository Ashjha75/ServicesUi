import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div>
        <h3>Coderash5@</h3>
        <p>All-rights reserved {date}</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://coderash5.blogspot.com/" target={"blank"}>
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
