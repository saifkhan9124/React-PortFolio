import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};
const NavContent = () => {
  return (
    <>
      <h2>Saifullah Khan.</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#about">Work</a>
        <a href="#contact">Experience</a>
        <a href="#contact">Service</a>
        <a href="#contact">Testimonial</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:Saif9124115@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};
export default Header;
