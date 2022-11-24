import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseToken from "../../Hooks/UseToken";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { userLogin, logInWithPrvider } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState('')
  const [loginUseremail, setLoginUseremail] = useState('')
  // const [token] = UseToken(loginUseremail)
  const navigate = useNavigate()
  const location= useLocation()
  const from=location?.state?.from?.pathName || '/'



  // if(token){
  //   navigate(from , {replace: true})
  // }

  const handlerForm = (event) => {
    console.log(event.accountType)
    setLoginError('')
    userLogin(event.email, event.password)
    .then(res=> {
      const user = res.user
      console.log(user)
      setLoginUseremail(event.email)



    })
    .catch(err=> {
      console.error(err)
      setLoginError(err.message)
    })
  };

  const googleHandler = () => {
    logInWithPrvider(googleProvider)
    .then((res) => {
      const user= res.user
      console.log(user.email)

    })
    .catch(err => {
    console.error(err)
    setLoginError(err.message)
    })
  };


  return (
    <div className="my-32 px-10 ">
      <h2 className="text-2xl text-center">Login</h2>
    <div className="">
    <form
        onSubmit={handleSubmit(handlerForm)}
        className="flex flex-col lg:w-2/6 md:w-3/6 space-y-4 mx-auto"
      >
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
            {...register("password", {required: "Please Enter Password" , minLength: {value: 6,message: "MInimum Six Characters" } })}
            className="input input-bordered  "
          />
          <Link className="text-gray-500 text-sm">Forgot Password?</Link>
          <p className="text-error">{errors?.password?.message || loginError} </p>
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
      
    </div>
    
   <div>
   <button onClick={googleHandler} className="btn  block lg:w-2/6 md:w-3/6  mx-auto mt-4">
        Continue With Google
      </button>
   </div>
    </div>
  );
};

export default Login;
