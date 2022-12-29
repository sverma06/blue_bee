import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const url = "/currentUser";

const Username = () => {
  const [item, setItem] = useState({});

  const fetchName = async () => {
    try {
      const response = await fetch(url, {
        headers: { "Content-Type": "application/json" },
      })
      const json = await response.json();
      console.log(json);
      setItem(json);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchName();
  }, []);

  return (
    <div>
      <Typography sx={{ m: 2 }}>Hi! {item.username}</Typography>
      <Typography>{item.email}</Typography>
    </div>
  );
};

export default Username;
