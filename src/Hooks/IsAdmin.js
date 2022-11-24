import React, { useState } from "react";
import { useEffect } from "react";

const IsAdmin = (email) => {

  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true)

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data?.isAdmin)
          setAdminLoading(false)
        })
    }
  }, [email]);
  return [isAdmin, adminLoading]
};

export default IsAdmin;
