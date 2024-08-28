import React from "react";
import { HeaderTop } from "./HeaderTop";
import { Navbar, NavBarMobile } from "./NavBar.";
import { NavBarBottom } from "./NavBarBottom";

export const Header = () => {
  return (
    <header>
      <HeaderTop />
      <Navbar />
      <NavBarMobile />
      <NavBarBottom />
    </header>
  );
};
