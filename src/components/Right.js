import React from "react";
import "twin.macro";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import { useApp } from "../providers/AppProvider";

const Right = () => {
  const { emoji, setIsLooping } = useApp();
  const [copied, copy] = useCopyToClipboard(`<link
  rel="icon"
  href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>"
/>`);

  return (
    <aside tw="bg-yellow-100  rounded-2xl  overflow-hidden">
      <header tw="p-8  text-yellow-900  text-2xl">
        <strong tw="font-serif">The HTML.</strong>
        &nbsp;Put this in the &lt;head&gt;
      </header>
      <div tw="p-8  border-t-2 border-solid border-yellow-200">
        <pre tw="whitespace-pre-wrap  text-lg">
          <code tw="text-yellow-900">
            {`<link
  rel="icon"
  href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>"
/>`}
          </code>
        </pre>
      </div>
      <footer>
        <button
          type="button"
          tw="w-full p-8 bg-yellow-500 bg-opacity-30  flex  text-yellow-900  focus:(outline-none bg-opacity-40)  hover:(bg-opacity-40)"
          onClick={copy}
          onFocus={() => setIsLooping(false)}
        >
          {copied ? (
            <div>
              <span role="img" aria-label="checkmark">
                ✅
              </span>
              &nbsp; &nbsp; Copied!
            </div>
          ) : (
            <div>
              <span role="img" aria-label="checkmark">
                📋
              </span>
              &nbsp; &nbsp;Click to copy
            </div>
          )}
        </button>
      </footer>
    </aside>
  );
};

export default Right;
