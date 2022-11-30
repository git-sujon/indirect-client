import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseToken from "../../Hooks/UseToken";
import loginImage from "../../Resource/Images/lgoinImage.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { userLogin, logInWithPrvider,userEmailQueryData, emailData } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState("");

  // const [token] = UseToken(loginUseremail)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathName || "/dashboard";
  const [accountTypes, setAccountTypes] = useState("");

  // if(token){
  //   navigate(from , {replace: true})
  // }

  // verify account type

  const handlerForm = (event) => {
      userEmailQueryData(event?.email)

       
  

    if (emailData?.accountType) {
      if (event?.accountType === emailData.accountType) {
        setLoginError("");
        userLogin(event.email, event.password)
          .then((res) => {
            const user = res.user;
            toast.success("Login Complete");

            navigate(from, { replace: true });



          })
          .catch((err) => {
            console.error(err);
            setLoginError(err.message);
          });
      }
      else{
        toast.error(`You are not a ${event.accountType}`)
      }
    }
   
  };

  const googleHandler = () => {
    logInWithPrvider(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user.email);
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });
  };

  return (
    <div className="my-32 px-10 ">
      <div className="">
        <div className="lg:flex items-center justify-center">
          <div className="lg:w-2/6 ">
            <img className="w-full" src={loginImage} alt="" />
          </div>
          <div>
            <form
              onSubmit={handleSubmit(handlerForm)}
              className="flex flex-col  space-y-4 mx-auto lg:mr-32 lg:ml-10"
            >
              <h2 className="text-3xl  text-center text-accent">Login</h2>
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
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="input input-bordered  "
                />
              </div>

              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Please Enter Password",
                    minLength: { value: 6, message: "MInimum Six Characters" },
                  })}
                  className="input input-bordered  "
                />
                <Link className="text-gray-500 text-sm">Forgot Password?</Link>
                <p className="text-error">
                  {errors?.password?.message || loginError}{" "}
                </p>
                {/* <p className="text-error"></p> */}
              </div>
              <input type="submit" value="Submit" className="btn btn-primary" />
              <p>
                New to Doctors Chamber?
                <Link className="text-secondary" to="/register">
                  Create a Account
                </Link>
              </p>
              <div className="divider">OR</div>
            </form>
            <div className="mx-auto lg:mr-32 lg:ml-10">
              <button
                onClick={googleHandler}
                className="btn  block  w-full mt-4"
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
