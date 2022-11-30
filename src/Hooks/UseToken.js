import React, { useEffect, useState } from "react";

const UseToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://server-git-sujon.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("DoctorChamberToken", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }

  }, [email]);
  return [token];
};

export default UseToken;
