import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "../components/Login";
import { IoMdVideocam, IoIosArrowDown } from "react-icons/io";
import AvtoRaqamLogo from "../assets/avtoraqam-logo.png";
import LoginBg from "../assets/login-bg.png";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <nav className="navbar container mx-auto pb-4 relative">
      <div className="logo flex items-center justify-between">
        <div className="logoImg">
          <NavLink to={"/"}>
            <img className="pr-16" width={322} src={AvtoRaqamLogo} alt="" />
          </NavLink>
        </div>

        <div className="lang-log flex items-center justify-center gap-8">
          <div className="store flex gap-8">
            <a
              href="https://itunes.apple.com/us/app/avtoraqam/id1299601559"
              target="_blank"
            >
              <img
                src="https://avtoraqam.uzex.uz/Content/img/app-store.png"
                width="120"
                alt=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=uz.uzex.gosnomer.gosnomer"
              target="_blank"
            >
              <img
                src="https://avtoraqam.uzex.uz/Content/img/google-play.png"
                width="120"
                alt=""
              />
            </a>
          </div>

          <div className="language flex items-center gap-4 pr-8">
            <a href="/cyrl/home/changelang?redirecturl=%2Fru%2F">Ўз</a>
            <a href="#">O`z</a>
            <a
              className="text-aqua underline font-semibold"
              href="/ru/home/changelang?redirecturl=%2Fru%2F"
            >
              Ру
            </a>
          </div>
        </div>

        <div className="login flex items-center gap-2 relative">
          <button
            onClick={toggleLogin}
            className="logInButton flex gap-2 items-center"
          >
            <span className="border-gray-400 border-l-[2px] h-6"></span>
            <img src={LoginBg} alt="" />
            <span className="text-md text-gray-400">Войти</span>
            <IoIosArrowDown className="text-xl text-gray-400" />
          </button>

          {showLogin && (
            <div
              className={`absolute top-10 right-0 z-50 bg-white shadow-lg p-4 rounded-md
                transform transition-all
            ${showLogin ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
            >
              <Login />
            </div>
          )}
        </div>
      </div>

      <div className="links flex justify-center gap-12 items-center pt-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[4px] after:bg-aqua after:transition-all after:duration-300"
              : "relative text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[4px] after:bg-aqua after:transition-all after:duration-300 hover:after:w-full"
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[4px] after:bg-aqua after:transition-all after:duration-300"
              : "relative text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[4px] after:bg-aqua after:transition-all after:duration-300 hover:after:w-full"
          }
        >
          О нас
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) =>
            isActive
              ? "relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[4px] after:bg-aqua after:transition-all after:duration-300"
              : "relative text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[4px] after:bg-aqua after:transition-all after:duration-300 hover:after:w-full"
          }
        >
          Полезно знать
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive
              ? "relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[4px] after:bg-aqua after:transition-all after:duration-300"
              : "relative text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[4px] after:bg-aqua after:transition-all after:duration-300 hover:after:w-full"
          }
        >
          Контакты
        </NavLink>
        <NavLink
          to="/not-sold-numbers"
          className={({ isActive }) =>
            isActive
              ? "relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[4px] after:bg-aqua after:transition-all after:duration-300"
              : "relative text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[4px] after:bg-aqua after:transition-all after:duration-300 hover:after:w-full"
          }
        >
          Не проданные
        </NavLink>
        <NavLink
          to="/video-instructions"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive
                ? "relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[4px] after:bg-aqua after:transition-all after:duration-300"
                : "relative text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[4px] after:bg-aqua after:transition-all after:duration-300 hover:after:w-full"
            }`
          }
        >
          <IoMdVideocam />
          Видео инструкция
        </NavLink>
      </div>
    </nav>
  );
}
