import React from 'react';
import toast from 'react-hot-toast';

const CreateUsers = (userInfo) => {
    fetch(`https://server-git-sujon.vercel.app/users`, {
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
        
        });
};

export default CreateUsers;