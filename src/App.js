import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() { 
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  
  function handleSearch(event) {
    setKeyword(event.target.value);
  }
  
  const handleCounter = () => setCounter(current => current + 1);
  console.log("I run all the time");

  useEffect(() => {
    console.log("call an api");
  },[]);
  
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(`Search for my ${keyword}`)
    };
  },[keyword]);
  

  return (
    <div>
      <input 
        value={keyword} 
        onChange={handleSearch} 
        type="text" 
        placeholder="Search here">          
      </input>

      <h1 className={styles.title}>Welcome Back to React {counter} times</h1>
      <Button onClickProp={handleCounter} textProp="click me"></Button>
    </div>
  );
}

export default App;