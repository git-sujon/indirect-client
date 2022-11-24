import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import toast from "react-hot-toast";
import UseToken from "../Hooks/UseToken";

const Register = () => {
  const navigate= useNavigate()
  const location =useLocation()
  const from= location?.state?.from?.pathName || '/'
  const [createdUseremail, setCreatedUseremail ] = useState('')
  // const [token]= UseToken(createdUseremail)

  // if(token){
  //   navigate('/')
  // }

  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();
  const { logInWithPrvider, userSignUp, userProfileUpdate } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState("");

  const registerHandler = (event) => {
    console.log(event.name, event.photoURL);
    const userInfo = {
      displayName: event.name,
      photoURL: event.photoURL,
    };

    userSignUp(event.email, event.password)
      .then((res) => {
        const user = res.user;
        userProfileUpdate(userInfo)
          .then(() => {
            // storingUsers( event.name ,event.photoURL, event.email, event.password)
          })
          .catch((err) => {
            setLoginError(err.message);

          });
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });

  };

  // const storingUsers = (name, photoURL, email, password) => {
  //   const user= {
  //     name, photoURL, email, password
  //   }
  //   fetch(`http://localhost:5000/users`, {
  //     method:"POST", 
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body:JSON.stringify(user)
  //   })
  //   .then(res=> res.json())
  //   .then(data => {
  //     console.log(data)
  //     toast.success("User Created")
  //     setCreatedUseremail(email)
      

  //   })
  // }

  const googleHandler = () => {
    logInWithPrvider(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        // storingUsers( user.displayName ,user.photoURL, user.email, user?.password)
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });
  };


  

  return (
    <div className="my-32 px-10">
      <h2 className="text-2xl text-center">Register</h2>
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="flex flex-col lg:w-2/6 md:w-3/6 space-y-4 mx-auto"
      >
        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "THis Field is required" })}
            className="input input-bordered  "
          />

          <p className="text-error">{errors?.name?.message}</p>
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input
            type="text"
            {...register("photoURL", { required: "THis Field is required" })}
            className="input input-bordered  "
          />

          <p className="text-error">{errors?.photoURL?.message}</p>
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            {...register("email", { required: "THis Field is required" })}
            className="input input-bordered  "
          />

          <p className="text-error">{errors?.email?.message}</p>
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register(
              "password",
              {
                required: "THis Field is required",
                minLength: {
                  value: 6,
                  message: "At least Six Characters",
                },
              },
              {
                pattern:
                  /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6}))/,
                message: "Provide a Strong Password ",
              }
            )}
            className="input input-bordered  "
          />
          <p className="text-error">
            {errors?.password?.message || loginError}
          </p>
        </div>

        <input type="submit" value="Submit" className="btn btn-primary" />
        <p>
          Already have an Account?
          <Link className="text-secondary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
      </form>
      <button
        onClick={googleHandler}
        className="btn  block lg:w-2/6 md:w-3/6  mx-auto mt-4"
      >
        Continue With Google
      </button>
    </div>
  );
};

export default Register;
