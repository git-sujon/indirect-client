import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import toast from "react-hot-toast";
import UseToken from "../Hooks/UseToken";
import Spinner from '../Pages/Shared/Spinner/Spinner'
import CreateUsers from "../Pages/Shared/CreateUsers/CreateUsers";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathName || "/";
  const [createdUseremail, setCreatedUseremail] = useState("");
  // const [token]= UseToken(createdUseremail)
  const [photoUploadUrl, setPhotoUploadUrl] = useState('')


  // if(token){
  //   navigate('/')
  // }

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();


  const { logInWithPrvider, userSignUp, userProfileUpdate } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState("");

  // Register handler Start 
  
  const registerHandler = (event) => {

    
    const userInfo = {
      displayName: event.name,
      photoURL: event.photoURL ? event.photoURL : photoUploadUrl,
    };
  


    userSignUp(event.email, event.password)
      .then((res) => {
        const user = res.user;
        userProfileUpdate(userInfo)
          .then(() => {
            storingUsers( event.name ,event?.photoURL, event?.photoFile, event.email, event.password, event.accountType )
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

  // Register handler End 
  const storingUsers = (name,photoURL, photoFile, email, password , accountType) => {
    let photo;
    photoURL ? photo= photoURL : photo = photoFile

    // photo Uplode 
    const formData = new FormData();
    const image = photo[0];
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_image_host_API}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        photo = imageData.data.display_url;
        
        const userInfo = {
          name,
          photo,
          email,
          password,
          accountType,
          isVerified: false,
          isAdmin: false,
        };
       
        setPhotoUploadUrl(photo)
        
        
        CreateUsers(userInfo)

  })

 
  
  
  };

  const googleHandler = () => {
    logInWithPrvider(googleProvider)
      .then((res) => {
        const user = res.user;
 
        storingUsers( user.displayName ,user.photoURL, user.email, )
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
            <span className="label-text">Select Account Type</span>
          </label>
          <select
            {...register("accountType", { required: "This Field is required" })}
            className="select select-bordered w-full"
          >
            <option>Buyer</option>
            <option>Seller</option>
          </select>

          <p className="text-error">{errors?.type?.message}</p>
        </div>

        <div className="form-control  ">
          <div className="flex justify-between items-center">
            <div>
              <label className="label">
                <span className="label-text">Upload Your Photo</span>
              </label>
              <input
                type="file"
                {...register("photoFile")}
                className="file-input file-input-bordered file-input-md file-input-accent w-3/5"
              />
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div>
              <label className="label">
                <span className="label-text">Provide Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL")}
                className="input input-bordered input-md "
              />
            </div>
          </div>

          <p className="text-error">{errors?.photoURL?.message}</p>
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            {...register("email", { required: "This Field is required" })}
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
                required: "This Field is required",
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
