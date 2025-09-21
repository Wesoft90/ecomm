
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {

    console.log("Component Mounted, Clock Started");
    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);

    // cleanup interval on unmount
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      Clock : {clock.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
