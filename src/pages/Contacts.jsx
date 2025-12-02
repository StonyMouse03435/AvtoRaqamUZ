import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { CgFacebook } from "react-icons/cg";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

export default function Contacts() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="mb-8">
        <h1 className="text-start mb-6 text-3xl bg-[url('src/assets/About.png')] bg-cover bg-center h-64 flex items-center justify-start pl-8 text-white">
          MULOQOT UCHUN
        </h1>

        <div className="rounded-xl bg-white p-8 shadow-2xl">
          <h1 className="text-start mb-4 text-2xl">Qayta aloqa</h1>

          <div className="flex flex-wrap gap-8 mb-8">
            <div>
              <p className="mb-2">F.I.Sh *</p>
              <input
                type="text"
                className="border border-gray-300 w-[282px] h-[42px]"
              />
            </div>
            <div>
              <p className="mb-2">Telefon raqami *</p>
              <input
                type="text"
                className="border border-gray-300 w-[282px] h-[42px]"
              />
            </div>
            <div>
              <p className="mb-2">E-mail *</p>
              <input
                type="text"
                className="border border-gray-300 w-[282px] h-[42px]"
              />
            </div>
            <div>
              <p className="mb-2">Mavzu *</p>
              <input
                type="text"
                className="border border-gray-300 w-[282px] h-[42px]"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-2">Xabar *</p>
            <textarea className="border border-gray-300 w-full max-w-[595px] h-[100px]"></textarea>
          </div>

          <div className="mb-8">
            <img
              src="https://uzex.uz/DNTCaptchaImage/Show?data=VQ_sKffzmapU-1uIi-dRsCyVYeToeNRGu8iwWpVfw7i3Xg7Pg7-s_X84vEm2lKf2m0HeVU5IcoPgSAiASCMkilF0IBKFnkFd"
              alt="Captcha"
            />
            <input
              type="text"
              placeholder="Rasmdagi raqamni kiriting"
              className="p-4 border border-gray-300 w-full max-w-[595px] h-[42px] mt-2"
            />
          </div>

          <button className="bg-aqua text-white px-6 py-2 rounded-lg hover:opacity-90">
            Yuborish
          </button>
          <div className="bg-darkblue2 text-white p-8 rounded-lg mt-12">
            <div className="flex border-b border-white mb-4">
              <button
                className={`px-4 py-2 uppercase transition hover:cursor-pointer ${
                  activeTab === "info"
                    ? "bg-white text-darkblue2"
                    : "text-white hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("info")}
              >
                Bog'lanish uchun ma'lumot
              </button>
              <button
                className={`px-4 py-2 uppercase transition hover:cursor-pointer ${
                  activeTab === "map"
                    ? "bg-white text-darkblue2"
                    : "text-white hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("map")}
              >
                Joylashuv xaritasi
              </button>
            </div>

            {activeTab === "info" && (
              <div className="space-y-2">
                <p>
                  Manzil: 100090, Toshkent shahri, Yakkasaroy tumani, Bobur
                  ko'chasi 77 uy
                </p>
                <p>Mo'ljal: Toshkent sh. Yakkasaroy tumani IIB</p>
                <p>Avtobus bekati: №11, 40, 45, 47, 67, 76, 77, 94</p>
                <p>E-mail: info@rtsb.uz</p>
                <p>Ishonch telefoni: (+998 71) 213 33 03</p>
                <p>Call-markaz telefoni: (+998 71) 207 00 33</p>
                <p>Call-markaz qisqa raqami: 1162</p>
                <p>Telegram bot: @UZEXfeedbackbot</p>
                <div className="text-white flex gap-2 text-2xl">
                  <a className="hover:bg-white hover:text-blue-700" href="https://www.facebook.com/UZEXofficial">
                    <CgFacebook className="border cursor-pointer p-[3px]" />
                  </a>
                  <a className="hover:bg-white hover:text-blue-700" href="https://t.me/uzexuz">
                    <FaTelegramPlane className="border cursor-pointer p-[3px]" />
                  </a>
                  <a className="hover:bg-white hover:text-blue-700" href="https://www.twitter.com/uzexuz">
                    <FaTwitter className="border cursor-pointer p-[3px] " />
                  </a>
                  <a className="hover:bg-white hover:text-blue-700" href="https://www.instagram.com/uzexuz/">
                    <FaInstagram className="border cursor-pointer p-[3px]" />
                  </a>
                  <a className="hover:bg-white hover:text-blue-700" href="https://www.youtube.com/channel/UCHlaetr49Dpt0zmj7c0TDVQ?view_as=subscriber%3Fsub_confirmation%3D1">
                    <TfiYoutube className="border cursor-pointer p-[3px]" />
                  </a>
                </div>
              </div>
            )}

            {activeTab === "map" && (
              <div>
                <iframe
                  title="UzEX Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.8111694164834!2d69.25251381572905!3d41.29938107927225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8e9f3d51a9%3A0x6c0a6c6a4cc0e1ea!2sUzbek%20Republic%20Commodity%20Exchange!5e0!3m2!1sru!2s!4v1658329123456!5m2!1sru!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
