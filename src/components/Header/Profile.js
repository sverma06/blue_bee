import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const url = "/home/profile";

const Profile = () => {
  const [user, setUser] = useState([]);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setUser(json);
    } catch (error) {
      console.log("User info not available");
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const userDetails = user?.map((item) => {
            return (
              <div>
                <Typography variant="h5" component="h5" align="center">{item.name}</Typography>
                <Typography variant="h5" component="h5" align="center">{item.email}</Typography>
              </div>
            );
          })

  return userDetails;
};

export default Profile;
