import React from "react";
import { GiKey } from "react-icons/gi";
import { HiUserAdd } from "react-icons/hi";

export default function Login() {
  return (
    <div className="w-52">
      <input
        type="text"
        placeholder="ИНН/Логин"
        className="border border-aqua rounded-xl px-2 py-1 w-full mb-2"
      />
      <input
        type="password"
        placeholder="Пароль"
        className="border border-aqua rounded-xl px-2 py-1 w-full mb-2"
      />
      <button className="bg-teal-500 text-white w-full hover:cursor-pointer py-2 rounded mb-2">
        Войти
      </button>
      <div className="text-sm flex gap-2 text-gray-500 hover:text-blue-500 hover:cursor-pointer mb-1">
        <GiKey /> Забыли пароль?
      </div>
      <div className="text-sm flex gap-2 text-gray-500 hover:text-blue-500 hover:cursor-pointer">
        <HiUserAdd /> Регистрация
      </div>
    </div>
  );
}
