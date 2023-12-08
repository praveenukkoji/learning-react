import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemain }) {
  const mins = Math.floor(secondsRemain / 60);
  const secs = secondsRemain % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        //   console.log("tick");
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}
