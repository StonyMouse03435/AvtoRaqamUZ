import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LicensePlateInput from "../components/LicensePlateInput";
import Footer from "../components/Footer";
import { RiAuctionFill } from "react-icons/ri";
import { LuClock9 } from "react-icons/lu";
import { GrDiamond } from "react-icons/gr";
import { MdOutlinePercent } from "react-icons/md";

export default function HomePage() {
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [regionCode, setRegionCode] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [activeTab, setActiveTab] = useState("listed");
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    fetch("http://localhost:3000/plates")
      .then((res) => res.json())
      .then((data) => {
        setPlates(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching plates:", error);
        setLoading(false);
      });
  }, []);

  const tabs = [
    {
      id: "listed",
      label: "Выставленные",
      icon: <RiAuctionFill />,
      count: 73497,
    },
    {
      id: "ending",
      label: "Заканчивающиеся сегодня",
      icon: <LuClock9 />,
      count: 4998,
    },
    { id: "vip", label: "Заказные номера", icon: <GrDiamond />, count: 8 },
    {
      id: "special",
      label: "Спец. Предложение",
      icon: <MdOutlinePercent />,
      count: 485,
    },
  ];

  const filteredPlates = plates.filter((item) => {
    const raw = item.plate.replace(/\s/g, "").toUpperCase();
    const query = `${regionCode}${plateNumber}`.toUpperCase();
    const matchesQuery = raw.includes(query);

    const matchesTab =
      activeTab === "listed" ||
      (activeTab === "ending" && item.type === "expire_today") ||
      (activeTab === "vip" && item.type === "custom") ||
      (activeTab === "special" && item.type === "special_offer");

    return matchesQuery && matchesTab;
  });

  return (
    <div className="HomePage container mx-auto">
      <Navbar />

      <LicensePlateInput
        regionCode={regionCode}
        setRegionCode={setRegionCode}
        plateFull={plateNumber}
        setPlateFull={setPlateNumber}
        onSearch={(query) => {
          console.log("Поиск по номеру:", query);
        }}
      />

      <div className="flex justify-center gap-4 mt-6 text-sm font-medium mb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded shadow transition ${
              activeTab === tab.id
                ? "bg-aqua text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
            <span className="bg-darkblue text-white rounded-full px-2">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="bg-teal-500 text-white px-6 py-1 rounded-full">
          г.Ташкент (18056)
        </button>
      </div>

      <div className="cards flex flex-wrap justify-center gap-4 p-4">
        {loading ? (
          <p className="text-gray-500">Загрузка...</p>
        ) : plates.length === 0 ? (
          <p className="text-gray-500">Нет данных</p>
        ) : (
          filteredPlates.slice(4, visibleCount).map((item) => (
            <div
              key={item.id}
              className="w-64 border border-gray-400 rounded-xl shadow p-4 text-sm bg-white"
            >
              <div className="text-xl font-bold mb-2 border border-gray-400 p-2 rounded text-center bg-gray-100 flex items-center justify-between">
                <span>{item.plate}</span>
                <div className="flex flex-col items-center ml-auto">
                  <img
                    src="https://flagcdn.com/w320/uz.png"
                    alt="UZ"
                    className="w-8 h-5 object-cover"
                  />
                  <span className="text-blue-800 font-bold text-xs mt-0.5">
                    UZ
                  </span>
                </div>
              </div>
              <hr className="mb-2 text-gray-400" />

              <div className="mb-1 flex items-center justify-between">
                <div className="mb-1 text-gray-700">
                  № лота: <br />
                  <span className="font-semibold">{item.id}</span>
                </div>
                <div className="mb-1 text-gray-700">
                  Категория: <br />
                  <span className="bg-bgblue text-blue-600">Физ. лицо</span>
                </div>
              </div>
              <hr className="mb-2 text-gray-400" />

              <div className="mb-1 flex items-center justify-between">
                <div className="mb-1 text-gray-700">
                  Старт. цена:
                  <br />
                  <span className="font-semibold">{item.startPrice}</span>
                </div>
                <div className="mb-1 text-gray-700">
                  Текущая цена:
                  <br />
                  <span
                    className={
                      item.currentPrice.includes("3")
                        ? "text-green-600 font-bold"
                        : "text-gray-500"
                    }
                  >
                    {item.currentPrice}
                  </span>
                </div>
              </div>
              <hr className="mb-2 text-gray-400" />

              <div className="mb-1 flex items-center justify-between">
                <div className="mb-1 text-gray-700">
                  Дата окончания:
                  <br />
                  <span>{item.endDate}</span>
                </div>
                <div className="mb-2 text-gray-700">
                  Регион: <br /> <span>{item.region}</span>
                </div>
              </div>
              <hr className="mb-2 text-gray-400" />

              <button className="bg-lime-500 text-white px-4 py-1 rounded hover:bg-lime-600 transition">
                Подробнее
              </button>
            </div>
          ))
        )}
        {visibleCount < filteredPlates.length && (
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded cursor-pointer"
            >
              Загрузить ещё...
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
