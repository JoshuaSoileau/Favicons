/* eslint-disable no-restricted-globals */
import React from "react";
import { GlobalStyles } from "twin.macro";

function App() {
  return (
    <div>
      <GlobalStyles />
      <div tw="h-screen flex items-center justify-center bg-gray-900">
        <h1 tw="text-white text-xl  rounded-lg  p-12  bg-gray-700">
          This is a creat-react-app with Tailwind and Twin.Macro!
        </h1>
      </div>
    </div>
  );
}

export default App;
