import React from "react";

/**
 * Taken from: https://www.joshwcomeau.com/snippets/react-hooks/use-interval/
 *
 * @param {func} callback - function to execute on an interval
 * @param {Number, null} delay  - time (in ms) between iterations, or null (to disable interval)
 */
export default function useInterval(callback, delay) {
  const intervalId = React.useRef(null);
  const savedCallback = React.useRef(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
  });
  React.useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === "number") {
      intervalId.current = window.setInterval(tick, delay);
      return () => window.clearInterval(intervalId.current);
    }
  }, [delay]);
  return intervalId.current;
}
