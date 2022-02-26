import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
} from "./NavbarSt.js";

const Navbar = () => {
  

  return (

    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Poke Api</NavLogo>

        <NavMenu>
          <NavItem>
            <NavLinks to="/home">Home</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
         <button>Create</button>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;