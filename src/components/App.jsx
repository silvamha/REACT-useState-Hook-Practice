import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  
  const [currentTime, setCurrentTime] = useState(time)

  const showTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime)
  }
  console.log(currentTime);  


  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick = {showTime}>Get Time</button>
    </div>
  );
}

export default App;
