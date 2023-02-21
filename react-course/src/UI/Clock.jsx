import React, { useState, useEffect } from "react";

let currentTime = () => new Date().toLocaleString();

const Clock = () => {
  const [timeVal, setTimeVal] = useState(currentTime());
  setInterval(() => {
    setTimeVal(currentTime());
    // console.log(timeVal);
  }, 1000);

  // //Mounting and update phase
  //   useEffect(()=>{
  //     console.log('inside effect with no dep');
  //     return ()=>{
  //         console.log('unmounted with no dep');
  //     }
  //   })

  // Mounting phase
  useEffect(() => {
    console.log("inside effect with empty dep");
    const timerInterval = setInterval(() => {
      setTimeVal(currentTime());
      console.log(timeVal);
    }, 1000);
    return () => {
      // console.log('unmounted with empty dep');
      clearInterval(timerInterval);
    };
  }, []);

  // //   Update Phase
  //   useEffect(()=>{
  //     console.log('time updated');
  //     return ()=>{
  //         console.log('unmounted with timeVal dep');
  //     }
  //   },[timeVal])
  return (
    <>
      <div className="white">{timeVal.toString()}</div>
    </>
  );
};

export default Clock;
