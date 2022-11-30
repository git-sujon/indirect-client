import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import toast from "react-hot-toast";
import UseToken from "../Hooks/UseToken";
import Spinner from "../Pages/Shared/Spinner/Spinner";
import CreateUsers from "../Pages/Shared/CreateUsers/CreateUsers";
import signUpImage from "../Resource/Images/Sign-up-amico.png";
import { useQuery } from "@tanstack/react-query";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathName || "/";
  // const [token]= UseToken(createdUseremail)
  const [photoUploadUrl, setPhotoUploadUrl] = useState("");
  const [userEmail, setUserEmail] = useState('')
  console.log(userEmail)

  // if(token){
  //   navigate('/')
  // }

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const { logInWithPrvider, userSignUp, userProfileUpdate, loading,  userEmailQueryData,  emailData, ImageHosting, hostedPhotoUrl } =
    useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState("");

  // Register handler Start

  // register neew user

 



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
          })
          .catch((err) => {
            setLoginError(err.message);
          });
          storingUsers(
            event.name,
            event?.photoURL,
          
            event.email,
            event.password,
            event.accountType
          );

          
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });
  };

  // Register handler End
  const storingUsers = (
    name,
    photoURL,
  
    email,
    password,
    accountType
  ) => {
    

    // photo Uplode
    // const formData = new FormData();
    // const image = photoFile[0];
    // formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_image_host_API}`;
    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })

    // const photoFilePath=photoFile[0] 
    // ImageHosting(photoFilePath)
  

    let photo;
    photoURL ? (photo = photoURL) : (photo = hostedPhotoUrl);

        const userInfo = {
          name,
          photo,
          email,
          password,
          accountType,
          isVerified: false,
          isAdmin: false,
        };

        setPhotoUploadUrl(photo);

        CreateUsers(userInfo);
   
  };

  const googleHandler = () => {
    logInWithPrvider(googleProvider)
      .then((res) => {
        const user = res?.user;

        // check if the user exist

        if(user){
          userEmailQueryData(user?.email)
        }

        
        
       


            if( emailData !== user?.email){
              storingUsers(
                user?.displayName,
                user?.photoURL,
                (user.photoFile = false),
                user?.email,
                (user.password = "googleLogin"),
                (user.accountType = "Buyer")
              );
              navigate(from, { replace: true });
          } 
     
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });
  };

  return (
    <div className="my-32 px-10">
      <div className="lg:flex items-center justify-center">
        <div className="lg:w-2/6 ">
          <img className="w-full" src={signUpImage} alt="" />
        </div>
        <div>
          <form
            onSubmit={handleSubmit(registerHandler)}
            className="flex flex-col  space-y-4 mx-auto lg:mr-32 lg:ml-10"
          >
            <h2 className="text-3xl text-center text-accent">Sign Up</h2>
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
                {...register("accountType", {
                  required: "This Field is required",
                })}
                className="select select-bordered w-full"
              >
                <option>Buyer</option>
                <option>Seller</option>
              </select>

              <p className="text-error">{errors?.type?.message}</p>
            </div>

            <div className="form-control  ">
              <div className="flex items-center">
                <div className="lg:w-2/5">
                  <label className="label">
                    <span className="label-text">Upload Your Photo</span>
                  </label>
                  <input
                    type="file"
                    disabled
                    {...register("photoFile")}
                    className="file-input file-input-bordered file-input-md file-input-accent w-full "
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
                    className="input input-bordered input-md w-full"
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
          <div className=" lg:mr-32 lg:ml-10">
            <button
              onClick={googleHandler}
              className="btn  w-full  mx-auto mt-4"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
