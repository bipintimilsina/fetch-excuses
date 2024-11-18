import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  // import Axios from "axios"

  const [excuse, setExcuse] = useState("");

  const fetchData = (category) => {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response[0].excuse);
        setExcuse(response[0].excuse)
      });
  };
  // useEffect(() => fetchData());

  return (
    <>
      <div className="App">
        <h1>Generate an Excuse</h1>
        <button onClick={()=>{fetchData('party')}}>Party</button>
        <button onClick={()=>fetchData('family')}>Family</button>
        <button onClick={()=>fetchData('office')}>Office</button>
      </div>

      <div className="excuses">
        <h5>{excuse}</h5>
      </div>
    </>
  );
}

export default App;
