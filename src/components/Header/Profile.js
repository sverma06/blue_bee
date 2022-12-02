import React, { useEffect, useState } from "react";


const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const url = "/home/profile";

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

    fetchUserInfo();
  }, []);

  return (
    <>
        {Array.isArray(user)
        ? user?.map((item) => {
            return (
                <>
                <p>{item.name}</p>
                <p>{item.email}</p>
                </>
            )
        })
        : null}
    </>
  );
};

export default Profile;
