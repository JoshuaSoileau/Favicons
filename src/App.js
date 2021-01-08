/* eslint-disable no-restricted-globals */
import React from "react";
import { GlobalStyles } from "twin.macro";
import Left from "./components/Left";
import Right from "./components/Right";
import LoadFont from "./LoadFont";
import { AppProvider } from "./providers/AppProvider";

LoadFont();

function App() {
  return (
    <AppProvider>
      <GlobalStyles />

      <main tw="bg-gradient-to-r from-blue-50 min-h-screen flex flex-col items-center">
        <div tw="min-h-screen grid lg:grid-cols-2 gap-32 items-center  max-w-7xl  mx-auto  px-8">
          <Left />
          <Right />
        </div>
      </main>
    </AppProvider>
  );
}

export default App;
