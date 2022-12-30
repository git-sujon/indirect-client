import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';






const CreateUsers = (userInfo) => {

    fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `bearer ${localStorage.setItem('IndirectToken')}` 
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("User Login");
          // setCreatedUseremail(email);
          window.location.reload(true);
            
        });
};

export default CreateUsers;