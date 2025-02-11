"use client";
import arroy from "@/public/main/arroy-down.svg";
import stella from "@/public/main/stella.svg";
import Image from "next/image";
import { useState } from "react";

export default function Stella() {
  const [isOpenCity, setIsOpenCity] = useState(false);
  const [isCity, setIsCity] = useState("Краснодар");

  const [isOpenAzs, setIsOpenAzs] = useState(false);
  const [isAzs, setIsAzs] = useState("Ростовское ш., 5");

  function toggleCity(item) {
    if (item == "Краснодар") {
      setIsAzs("Ростовское ш., 5");
    }
    if (item == "Курганинск") {
      setIsAzs("Шоссейная, 31");
    }
    setIsCity(item);
  }

  return (
    <div className="relative">
      <Image
        src={stella}
        width="auto"
        height="auto"
        alt="фото АЗС"
        className="max-w-[402px] -mt-80 -mb-36 -mr-2  z-20"
      />

      <div className="absolute top-[75px] left-[130px] ">
        {/* --------Выбор города--------- */}
        <div
          className="w-[196px] flex items-center justify-center gap-[10px] border-b-3 border-green cursor-pointer"
          onClick={() => setIsOpenCity(!isOpenCity)}
        >
          <span className="py-2 text-base font-bold text-center leading-4 select-none">
            {isCity}
          </span>
          <ul
            className={`w-full ${
              isOpenCity ? `flex` : `hidden`
            } absolute top-10 flex-col bg-gray-200`}
          >
            <li
              className="py-1 cursor-pointer hover:bg-gray-light text-center select-none"
              onClick={() => toggleCity("Краснодар")}
            >
              Краснодар
            </li>
            <li
              className="py-1 cursor-pointer hover:bg-gray-light text-center select-none"
              onClick={() => toggleCity("Курганинск")}
            >
              Курганинск
            </li>
          </ul>
          <Image
            src={arroy}
            width="auto"
            height="auto"
            alt="фото АЗС"
            className="w-6 select-none"
          />
        </div>

        {/* ----------Выбор АЗС----------- */}
        <div
          className="mt-[10px] w-[196px] flex items-center justify-center gap-[10px] border-b-3 border-green cursor-pointer"
          onClick={() => setIsOpenAzs(!isOpenAzs)}
        >
          <span className="py-2 text-base font-bold text-center leading-4 select-none select-none">
            {isAzs}
          </span>

          {isCity == "Краснодар" && (
            <ul
              className={`w-full ${
                isOpenAzs ? `flex` : `hidden`
              } absolute top-21 flex-col bg-gray-200 animate-simple`}
            >
              <li
                className="py-1 cursor-pointer hover:bg-gray-light text-center select-none"
                onClick={() => setIsAzs("Ростовское ш., 5")}
              >
                Ростовское ш., 5
              </li>
              <li
                className="py-1 cursor-pointer hover:bg-gray-light text-center select-none"
                onClick={() => setIsAzs("Сормовская, 200")}
              >
                Сормовская, 200
              </li>
              <li
                className="py-1 cursor-pointer hover:bg-gray-light text-center select-none"
                onClick={() => setIsAzs("Мачуги, 9")}
              >
                Мачуги, 9
              </li>
            </ul>
          )}

          {isCity == "Курганинск" && (
            <ul
              className={`w-full ${
                isOpenAzs ? `scale-100 flex` : `scale-25 hidden`
              } absolute top-21 flex-col bg-gray-200 animate-simple`}
            >
              <li
                className="py-1 cursor-pointer hover:bg-gray-light text-center select-none"
                onClick={() => setIsAzs("Шоссейная, 31")}
              >
                Шоссейная, 31
              </li>
            </ul>
          )}

          <Image
            src={arroy}
            width="auto"
            height="auto"
            alt="фото АЗС"
            className="w-6 select-none"
          />
        </div>

        {/* --------------Цены------------- */}
      </div>
    </div>
  );
}
