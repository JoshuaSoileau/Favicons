/* eslint-disable no-restricted-globals */
import React from "react";
import { GlobalStyles } from "twin.macro";
import { LoadFont } from "./Fonts";
import { AppProvider } from "./providers/AppProvider";

LoadFont();

function App() {
  return (
    <AppProvider>
      <GlobalStyles />

      <div tw="h-screen flex items-center justify-center bg-gradient-to-r from-gray-100">
        <h1 tw="text-xl  rounded-4xl  p-12  bg-white font-serif">
          This is a creat-react-app with Tailwind and Twin.Macro!
        </h1>
      </div>
    </AppProvider>
  );
}

export default App;
