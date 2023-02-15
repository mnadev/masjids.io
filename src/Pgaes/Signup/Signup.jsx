import React, { useEffect, useRef, useState } from "react";

import { FcGoogle } from "react-icons/fc";

import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

import { usePassword } from "../../hooks/usePassword";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const accessToken = "";
  const [hidden, setHidden] = useState(true);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [items, setItems] = useState([]);

  const [checked, setChecked] = useState(false);

  const [ready, setReady] = useState(false);

  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePassword({
      firstPassword: password,
    });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const setPass = (event) => {
    setPassword(event.target.value);
  };

  const submitData = async (event) => {
    event.preventDefault();
    if (
      validLength &&
      hasNumber &&
      upperCase &&
      lowerCase &&
      specialChar &&
      checked
    ) {
      
    }
  };

  return (
    <div className="bg-black h-screen w-full max-lg:h-screen py-10">
      <div className="container xl:w-3/6 h-5/6 bg-white flex flex-row m-auto mt-10 rounded-md lg:w-3/6  md:w-4/6 lg:w-full  max-lg:flex-col w-full  max-lg:items-center">
        <div className="login xl:flex xl:flex-col flex-1 w-2/6 items-center justify-center px-24 max-lg:px-18 max-lg:w-full max-md:px-5 ">
          <div className="google_auth  w-5/6 flex flex-row gap-x-2 items-center justify-center rounded-md border py-2 my-10 cursor-pointer max-lg:w-full">
            <FcGoogle size={"22px"} />
            <p className="font-lg">Sign up with google</p>
          </div>

          <form
            action=""
            className="flex flex-col gap-y-3 w-5/6 max-lg:w-full  "
            onSubmit={() => {
              submitData(event);
            }}
          >
            <div className="email flex flex-col gap-y-3">
              <label htmlFor="email">Mosque Name</label>
              <input
                className="p-2 rounded-md border outline-none"
                type="name"
                name="name"
                required
                placeholder="Enter your name"
                value={name}
                onChange={() => {
                  handleNameChange(event);
                }}
              />
            </div>
            <div className="email flex flex-col gap-y-3">
              <label htmlFor="email">Email</label>
              <input
                className="p-2 rounded-md border outline-none"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
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
                required
                onChange={setPass}
                placeholder="Password"
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
              <ul className={`list-none`}>
                {validLength ? (
                  <li className="text-xs line-through">
                    between 15 and 30 character long
                  </li>
                ) : (
                  <li className="text-xs ">between 15 and 30 character long</li>
                )}
                {upperCase ? (
                  <li className="text-xs line-through">
                    {" "}
                    li uppercase character
                  </li>
                ) : (
                  <li className="text-xs ">uppercase character</li>
                )}
                {lowerCase ? (
                  <li className="text-xs line-through">lowercase character</li>
                ) : (
                  <li className="text-xs ">lowercase character</li>
                )}
                {hasNumber ? (
                  <li className="text-xs line-through">1 digit</li>
                ) : (
                  <li className="text-xs ">1 digit</li>
                )}
                {specialChar ? (
                  <li className="text-xs line-through">1 special character</li>
                ) : (
                  <li className="text-xs ">1 special character</li>
                )}
              </ul>
            </div>
            <div className="bio flex flex-col gap-y-3">
              <label htmlFor="">Bio</label>
              <textarea
                className="border-none outline-none"
                name="bio"
                id="bio"
                value={bio}
                onChange={() => {
                  handleBioChange(event);
                }}
                placeholder="tell us more about your self..."
              ></textarea>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-x-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="privacy"
                  value="privacy"
                  color="black"
                  checked={checked}
                  onChange={() => {
                    checked ? setChecked(false) : setChecked(true);
                  }}
                />
                <label className="text-sm text-gray-400" htmlFor="vehicle1">
                  By checking this box you agree on the privacy policy
                </label>
              </div>
            </div>
            <button
              className="text-white bg-black rounded-md py-2 mt-5"
              type="submit"
            >
              Sign up
            </button>
          </form>
          <div className="create_account flex flex-row items-center gap-x-2 mt-10 max-lg:mb-10">
            <p>already have an account?</p>{" "}
            <Link to="/login">
              <p className="text-blue-500">Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
