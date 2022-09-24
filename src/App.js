import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => console.log("I am here") ,[])
  return <h1>Hello</h1>
}

function App() { 
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const handleShowing = () => setShowing(current => !current);


  
  function handleSearch(event) {
    setKeyword(event.target.value);
  }
  
  const handleCounter = () => setCounter(current => current + 1);

  useEffect(() => {
    console.log("I run only once");
  },[]);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(`I run when 'keyword' changes`)
    };
  },[keyword]);

  useEffect(() => {
    console.log("I run 'counter' changes")
  },[counter]);
  // useEffect를 활용하면 두개의 인자를 받아서 (1) 첫번째 인자는 실행할 함수
  // (2) 어디에 dependency를 가져서 변화할 때마다 실행될지 를 세세하게 설정할 수 있다.
  // react는 state가 변화할 때 컴포넌트를 재실행시키는게 기본인데, 그걸 세부적으로 조정할 수 있게 되는 것

  return (
    <div>
      <input 
        value={keyword} 
        onChange={handleSearch} 
        type="text" 
        placeholder="Search here">          
      </input>

      <button onClick={handleShowing}>{showing ? "Hide" : "Show" }</button>
      {showing ? <Hello></Hello> : null}

      <h1 className={styles.title}>Welcome Back to React {counter} times</h1>
      <Button onClickProp={handleCounter} textProp="click me"></Button>
    </div>
  );
}

export default App;