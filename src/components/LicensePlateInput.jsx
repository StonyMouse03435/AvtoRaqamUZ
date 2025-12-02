import React, { useState } from "react";
import { FaUserLarge, FaUserTie } from "react-icons/fa6";
import { TfiArrowCircleDown } from "react-icons/tfi";

export default function LicensePlateInput({
  regionCode,
  setRegionCode,
  plateFull,
  setPlateFull,
  onSearch,
  onAdvancedSearch,
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({
    region: "",
    branch: "",
    endDate: "",
    priceFrom: "",
    priceTo: "",
  });

  const handleRegionCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 2) setRegionCode(value);
  };

  const handlePlateFullChange = (e) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (value.length <= 6) setPlateFull(value);
  };

  const formatPlate = (plate) => {
    const p = plate.toUpperCase();
    const part1 = p.slice(0, 1);
    const part2 = p.slice(1, 4);
    const part3 = p.slice(4, 6);
    return [part1, part2, part3].filter(Boolean).join(" ");
  };

  const handleSearch = () => {
    if (onSearch) onSearch(`${regionCode}${plateFull}`);
  };

  const handleAdvancedSearch = () => {
    if (onAdvancedSearch) onAdvancedSearch(advancedFilters);
  };

  return (
    <div className="personalTabs">
      <div className="bg-aqua p-6">
        <div className="flex justify-center space-x-8 text-white text-lg font-medium">
          <div className="border-b-2 border-white pb-1 flex gap-2 hover:cursor-pointer">
            <FaUserLarge /> Физ. лицо
          </div>
          <div className="hover:border-b-2 hover:border-white hover:pb-1 flex gap-2 hover:cursor-pointer">
            <FaUserTie />
            Юр. лицо
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <div className="bg-white rounded-3xl font-sans shadow-md flex flex-col sm:flex-row items-center px-6 py-4 w-full sm:w-[500px] h-auto sm:h-[123px] border-2 border-black">
            <div className="flex items-center pr-3 border-r-2 border-black mb-2 sm:mb-0 sm:mr-4">
              <span className="text-4xl text-gray-400 mr-1">•</span>
              <input
                className="w-[40px] h-[80px] text-center text-4xl font-bold text-gray-400 uppercase bg-transparent border-none outline-none"
                type="text"
                placeholder="01"
                value={regionCode}
                onChange={handleRegionCodeChange}
                maxLength={2}
              />
            </div>

            <div className="flex items-center mb-2 sm:mb-0">
              <input
                className="w-[180px] h-[80px] text-start text-5xl font-bold text-gray-600 uppercase bg-transparent border-none outline-none"
                type="text"
                placeholder="A123EA"
                value={formatPlate(plateFull)}
                onChange={handlePlateFullChange}
                maxLength={8}
              />
            </div>

            <div className="flex flex-col items-center ml-auto pr-2">
              <div className="w-[30px] h-5 border border-gray-300 mb-1 overflow-hidden flex flex-col">
                <img
                  src="https://flagcdn.com/w320/uz.png"
                  alt="UZ"
                  className="w-10 h-7 object-cover"
                />
              </div>
              <span className="text-sm font-bold text-blue-800">UZ</span>
            </div>

            <span className="text-4xl text-gray-400 ml-2 hidden sm:inline">
              •
            </span>
          </div>

          <div className="ml-4 flex items-center space-x-2 mt-4 justify-center sm:justify-start hover:cursor-pointer">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
              />
            </svg>
            <span onClick={handleSearch} className="text-white text-lg">
              Поиск
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-white text-center font-bold text-lg mb-4 mt-4">
            Расширенный поиск
          </h3>
        </div>
        <div className="flex items-center justify-center space-x-2 text-white text-3xl cursor-pointer mt-2">
          <span onClick={() => setShowAdvanced(!showAdvanced)}>
            <TfiArrowCircleDown className="bg-aqua rounded-full" />
          </span>
        </div>
      </div>

      {showAdvanced && (
        <div className="bg-aqua px-6 pb-6 pt-4 text-white">
          <div className="items-center justify-center flex grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <select
              className="bg-white text-gray-700 p-1 rounded"
              value={advancedFilters.region}
              onChange={(e) =>
                setAdvancedFilters({
                  ...advancedFilters,
                  region: e.target.value,
                })
              }
            >
              <option value="">Регион</option>
              <option value="Ташкент">Ташкент</option>
              <option value="Самарканд">Самарканд</option>
            </select>

            <input
              className="bg-white text-gray-700 p-1 rounded"
              type="date"
              value={advancedFilters.endDate}
              onChange={(e) =>
                setAdvancedFilters({
                  ...advancedFilters,
                  endDate: e.target.value,
                })
              }
            />
          </div>

          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center space-x-4">
              <input
                className="bg-white text-gray-700 p-1 w-32 rounded"
                type="number"
                placeholder="Сумма от"
                value={advancedFilters.priceFrom}
                onChange={(e) =>
                  setAdvancedFilters({
                    ...advancedFilters,
                    priceFrom: e.target.value,
                  })
                }
              />
              <input
                className="bg-white text-gray-700 p-1 w-32 rounded"
                type="number"
                placeholder="Сумма до"
                value={advancedFilters.priceTo}
                onChange={(e) =>
                  setAdvancedFilters({
                    ...advancedFilters,
                    priceTo: e.target.value,
                  })
                }
              />
            </div>
            <select
              className="bg-white text-gray-700 p-1 rounded"
              value={advancedFilters.branch}
              onChange={(e) =>
                setAdvancedFilters({
                  ...advancedFilters,
                  branch: e.target.value,
                })
              }
            >
              <option value="">Филиал</option>
              <option value="UZEX">UZEX</option>
              <option value="UZRAQAM">UZRAQAM</option>
            </select>
          </div>

          <div className="text-center mt-4">
            <button
              className="bg-white text-aqua px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
              onClick={handleAdvancedSearch}
            >
              Применить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
