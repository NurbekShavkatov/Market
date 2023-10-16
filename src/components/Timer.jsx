import { useEffect,useState } from "react";
import './Timer.css'

const Counter = ({ count, label }) => (
    <div className="Counter">
      <div className="count">{count}</div>
      <div className="label">{label}</div>
    </div>
  );
  
  const Timer = ({ until }) => {
    const [msecsLeft, setMsecsLeft] = useState(until - Date.now());
  
    const secs = Math.floor(msecsLeft / 1000) % 60;
    const mins = Math.floor(msecsLeft / (60 * 1000)) % 60;
    const hours = Math.floor(msecsLeft / (60 * 60 * 1000)) % 24;
    const days = Math.floor(msecsLeft / (24 * 60 * 60 * 1000));
  
    useEffect(() => {
      const timer = setInterval(() => {
        setMsecsLeft((prev) => prev - 1000);
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="time-left">
        {/* {days && <Counter count={days} label="days" />}
        <span>:</span> */}
        {hours && <Counter count={hours} label="hours" />}
        <span>:</span>
        {mins && <Counter count={mins} label="minutes" />}
        <span>:</span>
        <Counter count={secs} label="seconds" />
      </div>
    );
  };
  

  
  export default Timer
  