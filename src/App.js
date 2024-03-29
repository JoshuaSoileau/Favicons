/* eslint-disable no-restricted-globals */
import React from "react";
import { GlobalStyles } from "twin.macro";
import Left from "./components/Left";
import Right from "./components/Right";
import LoadFont from "./LoadFont";
import { AppProvider } from "./providers/AppProvider";

import "./tailwind.css";

LoadFont();

function App() {
  return (
    <AppProvider>
      <GlobalStyles />

      <main className="bg-gradient-to-r from-blue-50  min-h-screen">
        <div
          style={{ minHeight: "calc(100vh - 57px)" }}
          className="flex flex-col justify-center"
        >
          <div className="grid lg:grid-cols-2 gap-32 items-center  max-w-7xl  mx-auto  px-8">
            <Left />
            <Right />
          </div>
        </div>
        <footer className="flex justify-center items-center py-4  border-t border-solid border-gray-200 w-full">
          Made with
          <span role="img" aria-label="anger" className="mx-2 mr-3">
            💢
          </span>
          {` by `}
          <a
            className="font-bold text-purple-500  hover:(text-purple-800 underline)  ml-1"
            href="https://twitter.com/joshua_soileau"
          >
            Josh
          </a>
          {`. View the`}
          &nbsp;
          <a
            className="font-bold text-purple-500  hover:(text-purple-800 underline)"
            href="https://github.com/JoshuaSoileau/Favicons"
          >
            source
          </a>
          .
        </footer>
      </main>
    </AppProvider>
  );
}

export default App;
