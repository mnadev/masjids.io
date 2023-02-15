

import React, { useEffect, useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { RiCodeView } from "react-icons/ri";
import { FiGift } from "react-icons/fi";
import { DiGitCommit } from "react-icons/di";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [warning, setWarning] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [hidden, setHidden] = useState(true);

  const handleError = (errorCode) => {
    if (errorCode === 403) {
      setErrorType("Credentials incorrect");
      setWarning(true);
    } else if (errorCode === 500) {
      setErrorType("Internal Server error");
      setWarning(true);
    } else if (errorCode === 404) {
      setErrorType("Page not found");
      navigate("/404");
    }
    setEmail("");
    setPassword("");
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {

    }
  };

  return (
    <div className="bg-black h-screen w-screen pt-20 max-lg:h-screen">
      <div className="container 2xl:w-2/6 xl:w-3/6 h-5/6 bg-white flex flex-row m-auto mt-10 rounded-md lg:w-3/6  md:w-4/6 lg:w-full  max-lg:flex-col w-full  max-lg:items-center">
        <div className="login flex flex-col flex-1 w-2/6 items-center justify-center px-24 max-lg:w-full h-full px-12 max-md: h-full px-3">
          {warning ? (
            <div className="warning">
              <h1 className="text-red-600 text-center">
                {errorType} <br /> try again
              </h1>
            </div>
          ) : (
            <></>
          )}
          <div className="google_auth  w-5/6 flex flex-row gap-x-2 items-center justify-center rounded-md border py-2 my-10 cursor-pointer max-md: w-full">
            <FcGoogle size={"22px"} />
            <p className="font-lg">sign in with google</p>
          </div>
          <p className="my-3 text-slate-500">or</p>
          <form
            action=""
            className="flex flex-col gap-y-3 w-5/6 max-md:w-full"
            onSubmit={() => {
              handleSubmit(event);
            }}
          >
            <div className="email flex flex-col gap-y-3">
              <label htmlFor="email">Email</label>
              <input
                className="p-2 rounded-md border outline-none"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={() => {
                  handleEmailChange(event);
                }}
              />
            </div>
            <div className="password relative flex flex-col gap-y-3">
              <label htmlFor="password">Password</label>
              <input
                className="p-2 rounded-md border outline-none"
                type={hidden ? "password" : "text"}
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={() => {
                  handlePasswordChange(event);
                }}
              />

              {hidden ? (
                <RxEyeClosed
                  onClick={() => {
                    setHidden(false);
                  }}
                  className="absolute top-12 right-4"
                />
              ) : (
                <RxEyeOpen
                  className="absolute top-12 right-4"
                  onClick={() => {
                    setHidden(true);
                  }}
                />
              )}
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-x-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1" className="text-sm">
                  Remember me
                </label>
              </div>
              <a className="text-blue-500 text-sm" href="#">
                forgot my password
              </a>
            </div>
            <button
              className="text-white bg-black rounded-md py-2 mt-5"
              type="submit"
            >
              Log in
            </button>
          </form>
          <div className="create_account flex flex-row items-center gap-x-2 mt-10">
            <p className="text-sm">Don't have an account?</p>{" "}
            <Link to="/signup">
              <p className="text-blue-500 text-sm">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;