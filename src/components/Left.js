import React from "react";
import "twin.macro";
import { useApp } from "../providers/AppProvider";

const Left = () => {
  const { emoji, setEmoji, setIsLooping } = useApp();

  const handleChange = ({ target: { value } }) => {
    const onlyEmojis = value?.replace(/[\p{L}\p{N}\p{P}\p{Z}]/gu, "");

    setEmoji(String(onlyEmojis));
  };

  return (
    <div>
      <div className="prose">
        <h1 className="text-6xl  font-serif font-bold">
          Turn&nbsp;
          <span className="text-pink-300">emojis</span>
          <span className="block">
            into&nbsp;
            <span className="text-green-600">favicons</span>
          </span>
        </h1>
        <p className="text-lg font-sans font-light mt-2">
          Did you know that you could use&nbsp;
          <a
            className="font-bold text-purple-500  hover:(text-purple-800 underline)"
            href="https://css-tricks.com/emojis-as-favicons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            emojis as favicons
          </a>
          ?
          <br />
          Let me help stub them out for you.
        </p>
      </div>

      <input
        type="text"
        className="text-7xl rounded-5xl bg-white p-12 py-6 mt-16 w-full  outline-none focus:(outline-none  shadow-2xl)  shadow-lg transition-all duration-500 ease-in-out"
        maxLength="8"
        onChange={handleChange}
        onFocus={() => setIsLooping(false)}
        value={emoji}
      />
    </div>
  );
};

export default Left;
