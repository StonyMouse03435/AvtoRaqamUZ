import React from "react";
import UZEXLogo from "../assets/uzex.png";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-aqua text-white py-4">
      <div>
        <div>
          <div className="p-8 flex justify-between items-start gap-8">
            <p>
              ИНН 200933985 <br /> Расчетный счет для юр. лиц:
              20208000900600257039
              <br /> Банк 00491,ОПЕРУ ЧАБ "Трастбанк"
            </p>
            <div className="flex justify-between items-start gap-8">
              <p>АО "Узбекская Республиканская товарно-сырьевая биржа"</p>
              <p>
                Тел: 71 207-00-33 Факс: 71 213-33-19
                <br /> E-mail: info@rtsb.uz
              </p>
            </div>
            <div className="flex justify-between items-start gap-8">
              <p>
                Адрес: 100090, Республика Узбекистан, г.Ташкент, ул.Бобура,77
              </p>
              <img src={UZEXLogo} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
