import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  winter: "cupcake",
  dark: "dark",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme" || themes.dark);
};

function Navbar() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme = () => {
    const { winter, dark } = themes;
    const newTheme = theme === dark ? winter : dark;
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className=" flex items-center w-80 py-10 border-b border-base-300">
      <div className="max-w-md mx-auto w-full px-4">
        <div className="flex justify-between ml-80">
          <h1 className=" text-center text-2xl font-bold mb-5 capitalize">
            Unsplash
          </h1>
          <div className="flex gap-10 mt-2 ml-96">
            <ul className="flex gap-10 font-bold">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
            <label className="swap swap-rotate mb-5">
              <input type="checkbox" onClick={handleTheme} />
              <BsSunFill className="swap-on h-4 w-4" />
              <BsMoonFill className="swap-off h-4 w-4" />
            </label>
          </div>
        </div>
        <SearchInput />
      </div>
    </div>
  );
}

export default Navbar;
