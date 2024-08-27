import React from "react";
import { HeaderTop } from "./HeaderTop";
import { NavBar, NavBarMobile } from "./NavBar";
import { NavBarBottom } from "./NavBarBottom";

export const Header = () => {
  return (
    <header>
      <HeaderTop />
      <NavBar />
      <NavBarMobile />
      <NavBarBottom />
    </header>
  );
};
