import React from "react";
import { useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Button } from "@mui/material";

const Nav = () => {
  let history = useHistory();

  let switchHome = () => {
    history.push("/home");
  };

  let switchAbout = () => {
    history.push("/about");
  };

  let switchContact = () => {
    history.push("/contact");
  };

  return (
    <nav>
      <div className="logo">LOGO</div>
      <div className="right-content">
        <div className="nav-buttons">
          <div className="btn-spacing">
            <Button variant="contained" onClick={switchHome}>
              Home
            </Button>
          </div>
          <div className="btn-spacing">
            <Button variant="contained" onClick={switchAbout}>
              About
            </Button>
          </div>
          <div className="btn-spacing">
            <Button variant="contained" onClick={switchContact}>
              Contact
            </Button>
          </div>
        </div>
        <div className="search-icon">
          <BsSearch size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
