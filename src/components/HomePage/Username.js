import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const Username = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/currentUser";

    const fetchName = async () => {
      try {
        const response = await fetch(url).then((response) => response.json());
        console.log(response);
        setName(response);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchName();
  }, []);

  return (
    <div>
      {Array.isArray(name)
        ? name?.map((item) => {
            return (
              <Typography sx={{ m: 2 }} key={item.id}>
                Hi! {item.name}
              </Typography>
            );
          })
        : null}
    </div>
  );
};

export default Username;
