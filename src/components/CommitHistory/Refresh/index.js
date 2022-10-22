import { useEffect, useState } from "react";

const TIME_TO_REFRESH = 30;

const Refresh = ({ handleClick: refreshCommits, canRefresh }) => {
  const [ seconds, setSeconds ] = useState(TIME_TO_REFRESH);

  useEffect(() => {
    if (!canRefresh) return;
    let intervalId;
    if (seconds === 0) {
      setSeconds(TIME_TO_REFRESH);
      refreshCommits();
    } else {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [seconds, canRefresh]);

  return <button onClick={() => refreshCommits()}>Refresh({seconds})</button>
}

export default Refresh;
