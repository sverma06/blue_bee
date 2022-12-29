import React from "react";
import Logout from "../Logout/Logout";
import ProfileButton from "../Profile/ProfileButton";
import Search from "../Search/Search";

const Header = () => {
  return (
    <>
      <Search />
      <Logout />
      <ProfileButton />
    </>
  );
};

export default Header;
