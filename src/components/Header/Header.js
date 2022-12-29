import React from "react";
import LogoutButton from "../Logout/LogoutButton";
import ProfileButton from "../Profile/ProfileButton";
import Search from "../Search/Search";

const Header = () => {
  return (
    <>
      <Search />
      <LogoutButton />
      <ProfileButton />
    </>
  );
};

export default Header;
