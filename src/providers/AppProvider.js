import React, { useContext, useState } from "react";
import useInterval from "../hooks/useInterval";

const AppContext = React.createContext({
  data: {},
  setData: () => {},
});

const emojis = ["😅", "💢", "🎲", "🎤", "🥇", "😳", "😅", "😅"];

export const AppProvider = ({ children }) => {
  const [isLooping, setIsLooping] = useState(true);
  const [userHasChanged, setUserHasChanged] = useState(false);
  const [emoji, setEmoji] = useState("😅");

  const updateEmoji = (newValue) => {
    document
      .getElementById("favicon")
      .setAttribute(
        "href",
        `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${newValue}</text></svg>`
      );
    setEmoji(newValue);
  };

  const goToNextEmoji = () => {
    let currentIndex = emojis.indexOf(emoji);
    if (currentIndex === -1) currentIndex = 0;

    let nextIndex = currentIndex + 1;
    if (nextIndex + 1 > emojis.length) nextIndex = 0;

    updateEmoji(emojis[nextIndex]);
  };

  useInterval(goToNextEmoji, isLooping ? 750 : null);

  return (
    <AppContext.Provider
      value={{
        isLooping,
        setIsLooping,

        emoji,
        setEmoji,

        userHasChanged,
        setUserHasChanged,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (context === undefined || context === null) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};
