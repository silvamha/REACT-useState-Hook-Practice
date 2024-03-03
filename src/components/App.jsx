import React, { useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const showTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  let timer = setTimeout(() =>{
    showTime()
  },1000)

  console.log(currentTime);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      {/* <h2 onLoad={timer}>Timer Goes Here</h2> */}
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
