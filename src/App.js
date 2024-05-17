import React, { useState, useEffect } from 'react';

function App () {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isactive, setIsActive] = useState(false);
  
  useEffect (() => {
    let timer = null;
    if (isactive) {
      timer = setInterval(() => {
        setSeconds((prevseconds) => {
          if (prevseconds === 59){
            setMinutes((prevminutes) => prevminutes + 1);
            return 0;
          }
          else{
            return (prevseconds + 1);
          }
        });
      }, 1000);
    }
    else {
      //useeffect clears the interval
      clearInterval(timer);
    }
    return () => clearInterval(timer);

  }, [isactive]);
    


  const toggle = () => {
    setIsActive(!isactive)
  }

  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  }

  return (
    <>
    <h1>Timer</h1>
    <h1>{minutes}:{seconds < 10 ? `0${seconds}` : seconds }</h1>
    <button onClick={toggle}>{isactive ? 'stop' : 'start'}</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}
export default App
