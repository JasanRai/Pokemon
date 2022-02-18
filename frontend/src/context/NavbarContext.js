import { createContext, useState } from "react";

export const NavbarContext = createContext();

function NavbarContextProvider(props) {
  const [navbarColor, setNavbarColor] = useState("");

  const blackBtnClicked = () => {
    console.log("blackBtnClicked");
    setNavbarColor("#000");
  };

  const blueBtnClicked = () => {
    console.log("blueBtnClicked");
    setNavbarColor("#04f");
  };

  const value = { navbarColor, blackBtnClicked, blueBtnClicked };

  return (
    <NavbarContext.Provider value={value}>
      {props.children}
    </NavbarContext.Provider>
  );
}

export default NavbarContextProvider;
