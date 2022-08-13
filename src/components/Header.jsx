import React, { useContext, useEffect, useState } from "react";
import Logo from "../../src/img/logo.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import Avatar from "../../src/img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  // const [isMenu, setisMenu] = useState(false)
  const [isMenu, setisMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setisMenu(!isMenu);
    }
  };

  const logout = () => {
    setisMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full items-center">
        <Link
          to={"/"}
          className="flex items-center gap-2 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg p-2"
        >
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-white hover:text-headingColor text-xl font-bold">
            City
          </p>
        </Link>

        {/* navbar */}
        <div className="md:flex w-full h-full items-end justify-end ml-auto px-20">
          <div className="w-auto p-2 flex items-center justify-center gap-8 bg-gradient-to-br font-semibold from-red-400 to-orange-500 rounded-lg">
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="flex items-center gap-8 "
            >
              <Link
                to={"/"}
                className="text-base text-white hover:text-headingColor duration-500 transition-all ease-in-out cursor-pointer"
              >
                Home
              </Link>
              <Link
                to={"Menu"}
                className="text-base text-white hover:text-headingColor duration-500 transition-all ease-in-out cursor-pointer"
              >
                Menu
              </Link>
              <li className="text-base text-white hover:text-headingColor duration-500 transition-all ease-in-out cursor-pointer">
                About Us
              </li>
              <li className="text-base text-white hover:text-headingColor duration-500 transition-all ease-in-out cursor-pointer">
                Service
              </li>
            </motion.ul>

            <div className="relative flex items-center justify-center">
              <MdShoppingBasket className="text-white text-2xl cursor-pointer" />
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">2</p>
              </div>
            </div>

            {/* user has login */}
            <div className="relative">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? user.photoURL : Avatar}
                alt="userprofile"
                onClick={login}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              />
              {isMenu && (
                <motion.div
                  initial={{ opactiry: 0, scale: 0.6 }}
                  animate={{ opactiry: 1, scale: 1 }}
                  exit={{ opactiry: 0, scale: 0.6 }}
                  className="w-40 bg-gradient-to-br from-red-400 to-orange-500 shadow-xl rounded-lg flex flex-col top-12 right-0 absolute"
                >
                  {user && user.email === "dschok182@gmail.com" && (
                    <Link to={"/createItem"}>
                      <p
                        className=" px-4 py-2 flex items-center gap-3 cursor-pointer hover:text-headingColor transition-all duration-100 ease-in-out text-white text-base"
                        onClick={() => setisMenu(false)}
                      >
                        New Item <MdAdd />
                      </p>
                    </Link>
                  )}
                  <p
                    onClick={ logout }
                    className=" px-4 py-2 flex items-center gap-3 cursor-pointer hover:text-headingColor transition-all duration-100 ease-in-out text-white text-base"
                  >
                    Log Out <MdLogout />
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-fullh-full">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumbg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            alt="userprofile"
            onClick={login}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
          />
          {isMenu && (
            <motion.div
              initial={{ opactiry: 0, scale: 0.6 }}
              animate={{ opactiry: 1, scale: 1 }}
              exit={{ opactiry: 0, scale: 0.6 }}
              className="w-40 bg-gray-500 shadow-xl rounded-lg flex flex-col top-12 right-0 absolute"
            >
              {user && user.email === "dschok182@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className=" px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col px-4 py-2 gap-4 ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                  onClick={() => setisMenu(false)}
                >
                  Home
                </li>
                <Link
                  to={"Menu"}
                  className="text-base text-white hover:text-headingColor duration-500 transition-all ease-in-out cursor-pointer"
                  onClick={() => setisMenu(false)}
                >
                  Menu
                </Link>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                  onClick={() => setisMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                  onClick={() => setisMenu(false)}
                >
                  Service
                </li>
              </ul>
              <p
                onClick={logout}
                className=" justify-center bg-gray-200 px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-300 rounded-md shadow-md transition-all duration-100 ease-in-out text-textColor text-base"
              >
                Log Out <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
