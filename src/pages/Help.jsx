import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Help() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-gray-100">
        <div className="pt-8 text-center text-aqua text-3xl pb-8">
          Полезно знать
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8 mt-8">
          <h1 className="text-start text-gray-500 text-2xl mb-4">
            Постановление Кабинета Министров Республики Узбекистан №683 от 31
            августа 2017 г.
          </h1>
          <hr className="text-gray-200 mb-6" />
          <p className="mb-4">
            О совершенствовании порядка государственной регистрации и выдачи
            государственных регистрационных номерных знаков для
            автомототранспортных средств.
          </p>
          <a
            className="hover:cursor-pointer underline text-blue-500"
            href="https://avtoraqam.uzex.uz/Content/docs/%d0%9f%d0%9a%d0%9c%20683%2031.08.2017%20%D1%80%D1%83%D1%81%D1%81.docx"
          >
            Подробнее
          </a>

          <h1 className="text-start text-gray-500 text-2xl mb-4 mt-10">
            Постановление Кабинета Министров Республики Узбекистан №253 от 21
            июня 2023 г.
          </h1>
          <hr className="text-gray-200 mb-6" />
          <p className="mb-4">
            О внесении изменений и дополнений в постановление кабинета министров
            от 31 августа 2017 года № 683 «О совершенствовании порядка
            государственной регистрации и выдачи государственных регистрационных
            номерных знаков для автомототранспортных средств».
          </p>
          <a
            className="hover:cursor-pointer underline text-blue-500"
            href="https://lex.uz/docs/6511313"
          >
            Подробнее
          </a>

          <h1 className="text-start text-gray-500 text-2xl mb-4 mt-10">
            Образец письма на русском языке
          </h1>
          <hr className="text-gray-200 mb-6" />
          <a
            className="hover:cursor-pointer underline text-blue-500"
            href="https://avtoraqam.uzex.uz/Content/docs/%d0%9e%d0%b1%d1%80%d0%b0%d0%b7%d0%b5%d1%86_%d0%bd%d0%b0_%d0%bf%d0%b8%d1%81%d1%8c%d0%bc%d0%b0_%d0%bd%d0%b0_%d1%80%d1%83%d1%81%d1%81%d0%ba%d0%be%d0%bc_%d1%8f%d0%b7%d0%b8%d0%ba%d0%b0.docx"
          >
            Подробнее
          </a>

          <h1 className="text-start text-gray-500 text-2xl mb-4 mt-10">
            Краткая информационная выписка из Инструкции по вопросам обеспечения
            бесперебойной работы электронных торговых систем биржи и проводимым
            мероприятиям при возникновении нештатных ситуаций.
          </h1>
          <hr className="text-gray-200 mb-6" />
          <a
            className="hover:cursor-pointer underline text-blue-500"
            href="https://avtoraqam.uzex.uz/Content/docs/%d0%98%d0%bd%d1%81%d1%82%d1%80%d1%83%d0%ba%d1%86%d0%b8%d0%b8_%d0%bf%d0%be_%d0%b2%d0%be%d0%bf%d1%80%d0%be%d1%81%d0%b0%d0%bc_%d0%be%d0%b1%d0%b5%d1%81%d0%bf%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f_%d0%b1%d0%b5%d1%81%d0%bf%d0%b5%d1%80%d0%b5%d0%b1%d0%be%d0%b9%d0%bd%d0%be%d0%b9_%d1%80%d0%b0%d0%b1%d0%be%d1%82%d1%8b_%d1%8d%d0%bb%d0%b5%d0%ba%d1%82%d1%80%d0%be%d0%bd%d0%bd%d1%8b%d1%85.docx"
          >
            Подробнее
          </a>

          <h1 className="text-start text-gray-500 text-2xl mb-4 mt-10">
            Инструкция для покупателей автономеров в системе avtoraqam.uzex.uz
          </h1>
          <hr className="text-gray-200 mb-6" />
          <a
            className="hover:cursor-pointer underline text-blue-500"
            href="https://avtoraqam.uzex.uz/Content/docs/%d0%93%d0%be%d1%81%d0%bd%d0%be%d0%bc%d0%b5%d1%80%20%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%20ru.docx"
          >
            Подробнее
          </a>

          <h1 className="text-start text-gray-500 text-2xl mb-4 mt-10">
            Инструкция по вопросам обеспечения бесперебойной работы электронных
            торговых систем биржи и при возникновении нештатных ситуаций.
          </h1>
          <hr className="text-gray-200 mb-6" />
          <a
            className="hover:cursor-pointer text-blue-500 underline"
            href="https://avtoraqam.uzex.uz/Content/docs/Instructions_on%20_ensuring_of_system_ru.docx"
          >
            Подробнее
          </a>

          <h1 className="text-start text-gray-500 text-2xl mb-4 mt-10">
            Перечень государственных регистрационных номерных знаков для
            автотранспортных средств типа I, IA, III, IIIA, подлежащих выдаче с
            повышенной ставкой платежа
          </h1>
          <hr className="text-gray-200 mb-4" />
          <span
            className="hover:cursor-pointer underline text-blue-500 mb-4 inline-block"
            onClick={() => setShowTable(!showTable)}
          >
            {showTable ? "Скрыть" : "Подробнее"}
          </span>

          {showTable && (
            <div className="overflow-x-auto">
              <table className="w-full border text-sm text-left border-gray-300">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="border px-2 py-1">№</th>
                    <th className="border px-2 py-1">Наименование категории</th>
                    <th className="border px-2 py-1">
                      Количество ГРНЗ* в серия
                    </th>
                    <th className="border px-2 py-1">Комбинация цифр ГРНЗ*</th>
                    <th className="border px-2 py-1">
                      Стартовая цена (разные буквы)
                    </th>
                    <th className="border px-2 py-1">
                      Стартовая цена (одинаковые буквы)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <h1 className="text-center font-semibold flex items-center">
                    Город Ташкент
                  </h1>
                  <tr>
                    <td className="border px-2 py-1">1</td>
                    <td className="border px-2 py-1">1-я категория</td>
                    <td className="border px-2 py-1">9 пар</td>
                    <td className="border px-2 py-1">
                      001, 007, 100, 111, 222, 555, 700, 777, 888
                    </td>
                    <td className="border px-2 py-1">100 БРВ</td>
                    <td className="border px-2 py-1">130 БРВ</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">2</td>
                    <td className="border px-2 py-1">2-я категория</td>
                    <td className="border px-2 py-1">20 пар</td>
                    <td className="border px-2 py-1">
                      002, 005, 010, 020, 050, 070, 077, 080, 101, 200, 202,
                      212, 303, 505, 606, 707, 787, 808, 909, 999
                    </td>
                    <td className="border px-2 py-1">30 БРВ</td>
                    <td className="border px-2 py-1">40 БРВ</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">3</td>
                    <td className="border px-2 py-1">3-я категория</td>
                    <td className="border px-2 py-1">26 пар</td>
                    <td className="border px-2 py-1">
                      003, 004, 008, 009, 011, 022, 030, 033, 040, 044, 055,
                      088, 090 110, 220, 303, 400, 404, 550, 600, 701, 717, 757,
                      770, 900, 909
                    </td>
                    <td className="border px-2 py-1">10 БРВ</td>
                    <td className="border px-2 py-1">15 БРВ</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">4</td>
                    <td className="border px-2 py-1">4-я категория</td>
                    <td className="border px-2 py-1">36 пар</td>
                    <td className="border px-2 py-1">
                      006, 099 330, 440 606, 666 702, 703, 704, 705, 706, 708,
                      709, 710, 711, 712, 715, 721, 722, 727, 737, 747, 767,
                      771, 772, 773, 774, 775, 776, 778, 779, 787, 797 880, 990
                    </td>
                    <td className="border px-2 py-1">8 БРВ</td>
                    <td className="border px-2 py-1">10 БРВ</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">5</td>
                    <td className="border px-2 py-1">5-я категория</td>
                    <td className="border px-2 py-1">72 пар</td>
                    <td className="border px-2 py-1">
                      021, 060, 066 102, 121, 131, 141, 151, 161, 171, 177, 181,
                      191 212, 215, 232, 242, 252, 262, 272, 277, 282, 292 313,
                      323, 343, 353, 373, 383, 393 414, 424, 434, 454, 464, 474,
                      484, 494 515, 525, 535, 545, 565, 570, 571, 575, 577, 585,
                      595, 616, 656, 660, 676 616, 626, 636 646, 656, 676, 686,
                      696 733, 744, 755, 788, 799 818, 828, 838, 848, 858, 878,
                      898 919, 929, 939, 949, 959, 979, 989
                    </td>
                    <td className="border px-2 py-1">7 БРВ</td>
                    <td className="border px-2 py-1">8 БРВ</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">6</td>
                    <td className="border px-2 py-1">6-я категория</td>
                    <td className="border px-2 py-1">184 пар</td>
                    <td className="border px-2 py-1">
                      012, 015, 017, 071, 075 107, 112, 113, 114, 115, 116, 117,
                      118, 119, 122, 123, 133, 144, 155, 166, 170, 188, 199 201,
                      203, 205, 207, 210, 211, 221, 223, 224, 225, 226, 227,
                      228, 229, 233, 234, 244, 255, 266, 288, 299 301, 307, 311,
                      322, 331, 332, 334, 335, 336, 337, 338, 339, 344, 345,
                      355, 366, 363, 377, 388, 399 401, 402, 407, 411, 422, 433,
                      441, 442, 443, 445, 446, 447, 448, 449, 455, 456, 466,
                      477, 488, 499 501, 507, 510, 511, 522, 533, 544, 551, 552,
                      553, 554, 556, 557, 558, 559, 564, 566, 567, 588, 599 601,
                      607, 611, 622, 626, 633, 636, 644, 646, 655, 661, 662,
                      663, 664, 665, 667, 668, 669, 677, 678, 686, 688, 696, 699
                      713, 714, 716, 718, 719, 725, 720, 723, 730, 735, 740,
                      750, 760, 766, 780, 786, 789, 790 801, 807, 811, 822, 833,
                      844, 855, 866, 868, 877, 881, 882, 883, 884, 885, 886,
                      887, 889, 899 901, 907, 911, 922, 933, 944, 955, 966, 969,
                      977, 988, 991, 992, 993, 994, 995, 996, 997, 998
                    </td>
                    <td className="border px-2 py-1">6 БРВ</td>
                    <td className="border px-2 py-1">7 БРВ</td>
                  </tr>
                  <h1 className="text-center font-semibold flex items-center">
                    Республика Каракалпакстан и области
                  </h1>
                  <tr>
                    <td className="border px-2 py-1">7</td>
                    <td className="border px-2 py-1">1-я категория</td>
                    <td className="border px-2 py-1">9 пар</td>
                    <td className="border px-2 py-1">
                      001, 007, 100, 111, 222, 555, 700, 777, 888.
                    </td>
                    <td className="border px-2 py-1">25 БРВ</td>
                    <td className="border px-2 py-1">30 БРВ</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">8</td>
                    <td className="border px-2 py-1">2-я категория</td>
                    <td className="border px-2 py-1">20 пар</td>
                    <td className="border px-2 py-1">
                      0002, 005, 010, 020, 050, 070, 077, 080 101, 200, 202,
                      300, 333 444, 500, 505, 666, 707 800, 808, 999
                    </td>
                    <td className="border px-2 py-1">10 БРВ</td>
                    <td className="border px-2 py-1">15 БРВ</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">9</td>
                    <td className="border px-2 py-1">3-я категория</td>
                    <td className="border px-2 py-1">26 пар</td>
                    <td className="border px-2 py-1">
                      003, 004, 008, 009, 011, 022, 030, 033, 040, 044, 055,
                      088, 090 110, 220, 303, 400, 404, 550, 600, 701, 717, 757,
                      770, 900, 909
                    </td>
                    <td className="border px-2 py-1">8 БРВ</td>
                    <td className="border px-2 py-1">9 БВР</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">10</td>
                    <td className="border px-2 py-1">4-я категория</td>
                    <td className="border px-2 py-1">36 пар</td>
                    <td className="border px-2 py-1">
                      006, 099 330, 440 606, 666 702, 703, 704, 705, 706, 708,
                      709, 710, 711, 712, 715, 721, 722, 727, 737, 747, 767,
                      771, 772, 773, 774, 775, 776, 778, 779, 787, 797 880, 990
                    </td>
                    <td className="border px-2 py-1">7 БРВ</td>
                    <td className="border px-2 py-1">8 БРВ</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">11</td>
                    <td className="border px-2 py-1">5-я категория</td>
                    <td className="border px-2 py-1">72 пар</td>
                    <td className="border px-2 py-1">
                      021, 060, 066 102, 121, 131, 141, 151, 161, 171, 177, 181,
                      191 212, 215, 232, 242, 252, 262, 272, 277, 282, 292 313,
                      323, 343, 353, 373, 383, 393 414, 424, 434, 454, 464, 474,
                      484, 494 515, 525, 535, 545, 565, 570, 571, 575, 577, 585,
                      595, 616, 656, 660, 676 616, 626, 636 646, 656, 676, 686,
                      696 733, 744, 755, 788, 799 818, 828, 838, 848, 858, 878,
                      898 919, 929, 939, 949, 959, 979, 989
                    </td>
                    <td className="border px-2 py-1">6 БРВ</td>
                    <td className="border px-2 py-1">7 БРВ</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">12</td>
                    <td className="border px-2 py-1">6-я категория</td>
                    <td className="border px-2 py-1">184 пар</td>
                    <td className="border px-2 py-1">
                      012, 015, 017, 071, 075 107, 112, 113, 114, 115, 116, 117,
                      118, 119, 122, 123, 133, 144, 155, 166, 170, 188, 199 201,
                      203, 205, 207, 210, 211, 221, 223, 224, 225, 226, 227,
                      228, 229, 233, 234, 244, 255, 266, 288, 299 301, 307, 311,
                      322, 331, 332, 334, 335, 336, 337, 338, 339, 344, 345,
                      355, 366, 363, 377, 388, 399 401, 402, 407, 411, 422, 433,
                      441, 442, 443, 445, 446, 447, 448, 449, 455, 456, 466,
                      477, 488, 499 501, 507, 510, 511, 522, 533, 544, 551, 552,
                      553, 554, 556, 557, 558, 559, 564, 566, 567, 588, 599 601,
                      607, 611, 622, 626, 633, 636, 644, 646, 655, 661, 662,
                      663, 664, 665, 667, 668, 669, 677, 678, 686, 688, 696, 699
                      713, 714, 716, 718, 719, 725, 720, 723, 730, 735, 740,
                      750, 760, 766, 780, 786, 789, 790 801, 807, 811, 822, 833,
                      844, 855, 866, 868, 877, 881, 882, 883, 884, 885, 886,
                      887, 889, 899 901, 907, 911, 922, 933, 944, 955, 966, 969,
                      977, 988, 991, 992, 993, 994, 995, 996, 997, 998
                    </td>
                    <td className="border px-2 py-1">5 БРВ</td>
                    <td className="border px-2 py-1">6 БВР</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-2 text-xs text-gray-600">
                * ГРНЗ — государственные регистрационные номерные знаки <br />
                ** БРВ — Базовая расчетная величина
              </div>
            </div>
          )}

          <h1 className="text-start text-gray-500 text-2xl mb-4 mt-10">
            Часто задаваемые вопросы
          </h1>
          <hr className="text-gray-200 mb-4" />
          <button
            className="hover:cursor-pointer underline text-blue-500 flex items-center gap-1 mb-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            Подробнее
          </button>

          {isOpen && (
            <div className="space-y-4 text-sm text-gray-800">
              <p>
                <strong>
                  1. Где можно ознакомиться с законодательными актами?
                </strong>
                <br />
                Ознакомиться с постановлениями можно на сайте
                <a
                  className="text-blue-500 underline ml-1"
                  href="https://lex.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.lex.uz
                </a>
                .
              </p>
              <p>
                <strong>
                  2. Почему отсутствует моя серия номерных знаков?
                </strong>
                <br />
                Некоторые серии могут быть не активны или зарезервированы.
                Следите за обновлениями на платформе.
              </p>
              <p>
                <strong>3. Какова процедура участия в аукционе?</strong>
                <br />
                Процедура подробно изложена в пользовательском соглашении и
                разделе «Помощь».
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
