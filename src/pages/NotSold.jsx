import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";

export default function NotSold() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [plate, setPlate] = useState("");
  const [ownerType, setOwnerType] = useState("");
  const [region, setRegion] = useState("");
  const [branch, setBranch] = useState("");
  const [category, setCategory] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [uniqueRegions, setUniqueRegions] = useState([]);
  const [uniqueBranches, setUniqueBranches] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/plates").then((res) => {
      const data = res.data;
      setCards(data);
      setFilteredCards(data);
      setUniqueRegions([...new Set(data.map((c) => c.city).filter(Boolean))]);
      setUniqueBranches([
        ...new Set(data.map((c) => c.department).filter(Boolean)),
      ]);
      setUniqueCategories([
        ...new Set(data.map((c) => c.category).filter(Boolean)),
      ]);
    });
  }, []);

  const handleFilter = () => {
    let filtered = [...cards];

    if (plate.trim()) {
      const query = plate.replace(/\s/g, "").toUpperCase();
      filtered = filtered.filter((item) =>
        item.plate.replace(/\s/g, "").toUpperCase().includes(query)
      );
    }

    if (ownerType) filtered = filtered.filter((c) => c.ownerType === ownerType);
    if (region) filtered = filtered.filter((c) => c.city?.includes(region));
    if (branch)
      filtered = filtered.filter((c) => c.department?.includes(branch));
    if (category) filtered = filtered.filter((c) => c.category === category);
    if (endDate) filtered = filtered.filter((c) => c.endDate === endDate);
    if (minPrice)
      filtered = filtered.filter((c) => c.startPrice >= Number(minPrice));
    if (maxPrice)
      filtered = filtered.filter((c) => c.startPrice <= Number(maxPrice));

    console.log("Filtered cards:", filtered);

    setFilteredCards(filtered);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center border rounded">
            <span className=" px-2">01</span>
            <input
              type="text"
              placeholder="A 123 EA"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              className="flex-1 px-2 py-1 outline-none"
            />
          </div>
          <select
            value={ownerType}
            onChange={(e) => setOwnerType(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="ФЛ">Физическое лицо</option>
            <option value="ЮЛ">Юридическое лицо</option>
          </select>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="">Регион</option>
            {uniqueRegions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="">Филиал</option>
            {uniqueBranches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="">Категория</option>
            {uniqueCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <input
            type="number"
            placeholder="Сумма от"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <input
            type="number"
            placeholder="Сумма до"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <button
            onClick={handleFilter}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Поиск
          </button>
        </div>

        <div className="mt-4 mb-4 text-start">
          <button className="bg-teal-500 text-white px-6 py-1 rounded-full">
            г.Ташкент {filteredCards.length}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mb-4">
          {filteredCards.slice(5, visibleCount).map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <div className="mb-1 flex items-center justify-between">
                <div className="text-xl font-bold mb-2 border border-black p-2 rounded-xl text-center bg-gray-100 flex items-center justify-between space-x-2">
                  <span>{item.plate}</span>
                  <div className="flex flex-col items-center">
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
              </div>
              <hr className="mb-2 text-gray-400" />
              <div className="mb-1 flex items-center justify-between">
                <div className="mb-1 text-gray-700">
                  Дата выставления:
                  <br />
                  <span>{item.endDate}</span>
                </div>
                <div className="mb-2 text-gray-700">
                  Регион: <br /> <span>{item.region}</span>
                </div>
              </div>
              <hr className="mb-2 text-gray-400" />
              <div className="mb-1 text-gray-700">
                Район: <br />
                <span>{item.department}</span>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredCards.length && (
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded cursor-pointer mb-4"
            >
              Загрузить ещё...
            </button>
          </div>
        )}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
