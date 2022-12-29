import React from "react";
import { Tabs, Tab } from "@mui/material";

const HomePageTab = () => {

  return (
    <Tabs
      // value={value}
      // onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab label="Best Sellers" />
      <Tab label="Gift Cards" />
      <Tab label="New Releases" />
      <Tab label="Clothing" />
      <Tab label="Groceries" />
      <Tab label="Appliances" />
      <Tab label="Mobiles" />
      <Tab label="Travel" />
    </Tabs>
  );
};

export default HomePageTab;
