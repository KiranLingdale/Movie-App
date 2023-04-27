import React from "react";

const Header = () => {
  return (
    <div >
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
           <h1 style={{
  backgroundImage: "linear-gradient(to left top, #DD2476 10%, #FF512F 90%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: "800",
    marginLeft: "1rem"
}}> Movieflix</h1>
          </a>
         
        </div>
      </nav>

    </div>
    
  );
};

export default Header;
