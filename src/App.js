import * as React from "react";
import {BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail.js";
import Home from "./routes/Home.js";
import StudyContent from "./routes/StudyContent.js";


function App() {
  return <Router>
    <Switch>
      <Route path="/hello">
        <h1>Hello</h1>
      </Route>

      <Route path="/movie/:id">
        <Detail />
      </Route>

      <Route path="/study">
        <StudyContent />
      </Route>

      <Route path="/">
        <Home />
      </Route>

    </Switch>
  </Router>;
  // Switch는 Route를 찾아서, 컴포넌트를 렌더링함.
  // Route는 page path와 동일함.
  // 이거 웃기긴 한데, home을 가능하면 맨 밑에 두어라. exact 옵션 전부 쓸게 아니면 ㅋㅋㅋ...
}

export default App;





///////////////////////////////////////////////////////////////////////////////////////////////////////


// import { useState, useEffect } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coinArray, setCoinArray] = useState([]);
//   const [inputValue, setInputValue] = useState(0);
//   const [selectedOptionValue, setSelectedOptionValue] = useState(0);
//   const [selectedOptionName, setSelectedOptionName] = useState(0);

//   const handleInputChange = (event) => setInputValue(event.target.value);

//   const handleOptionChange = (event) => {
//     console.log(event.target.selectedIndex);
//     console.log(selectedOptionName);
//     // 이 부분에서 가져오는 target은 select임. 그리고 select의 value는
//     // 기본적으로 "현재 select된 option의 텍스트(?) - 우리눈에 보이는 그거"를 갖는다.
//     // 근데 내가 갖고 싶은건 사실 해당 옵션의 텍스트가 아니라 price 뿐이다.
//     // 그래서 select가 아니라 option 쪽에 vlaue를 따로 설정해두었다.
//     // 그러면 그때부터 그 값을 가져온다!
//     // 다만 selected된 옵션의 이름을 갖고 오고 싶었는데, 그건 fail.. 일단 이걸로 끝
//     // fail인 줄 알았는데, selectedIndex가 있다..!
//     // selectedIndex의 값을 가져와서 coinArray에서 대조하여 그 id를 다시 selectedOptionId로 세팅하면
//     setSelectedOptionValue(event.target.value);
//     setSelectedOptionName(coinArray[event.target.selectedIndex].name);
//   };

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers").
//     then((response) => response.json()).
//     then((json) => {
//       setCoinArray(json); 
//       setLoading(false);
//       setSelectedOptionValue(json[0].quotes.USD.price);
//       setSelectedOptionName(json[0].name);
//     });}
//       , [])
// // 기억해라 fetch(api요청 url).then(받은 response로 뭐시기)
    
//   return (
//     <div>
//       <h1>The Coins! {loading ? "" : "(" + (coinArray.length) + ")"}</h1>
//       {loading ? <strong>Loading...</strong> : 
//         <select
//         onChange={handleOptionChange}
//         value={selectedOptionValue}
//         >
//           {coinArray.map((coin) => 
//           <option 
//             key={coin["id"]}
//             value={coin.quotes["USD"].price}>
//             {coin["name"]} ({coin.symbol}): {(coin.quotes["USD"].price).toFixed(2)} $
//           </option>)}
//         </select>
//       }

//       <hr />
//       <input 
//         type="number" 
//         placeholder="How much dollar do you have?"
//         onChange={handleInputChange}
//         value={inputValue}
//       />
      
//       <p>You have {inputValue} $</p>
//       <p>So you can buy {inputValue/selectedOptionValue} amount of {selectedOptionName}</p>

//     </div>
//     // 관건은 어떻게 select box에 접근하냐임.
//   )
// }
// // jsx에서 javascript 함수를 쓰려면 script 가 아니라 {}로 써야한다.
// // 그냥 script 하고 하면 안되는건가?

// export default App;




















///////////////////////////////////////////////////////////////////////////





// import { useState, useEffect } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [toDoArray, setToDoArray] = useState([]);

//   const handleChange = (event) => setInputValue(event.target.value);

//   // 참고로... 화살표 함수랑 그냥 함수의 차이는 binding 되는 this가 다르다
//   // 실행 컨텍스트가 다른건데 그냥 그런게 있는갑다...하고 지나가자.
//   // 설명은 봤지만 와닿지가 않음. arrow function으로 
//   // const 함수명 = () => {내용} 혹은 
//   // const 함수명 = () => 내용; 로 쓴다는 것만 이해하자
//   // The first one has implicit return. In the second one you have to write 'return'

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (inputValue === "") {
//       return;
//     } 
//       setToDoArray(currentArray => [inputValue, ...currentArray]);
//       // 아래 코드랑 역할은 똑같다.
//       // setToDoArray(function(currentArray) {
//       //   return [inputValue, ...currentArray]
//       // })
//       setInputValue("");
//   };

//   // setState로 state를 수정할 때, 특히 배열을 수정할 때 주의해라.
//   // 기본적으로 state에 "변화"를 일으키는 것은 허용하지 않음. 아예 해당 값을 다른 값으로 "교체"하는 것이
//   // 허용되는 것으로 지금 내 이해수준에선 받아들여진다.
//   // state를 수정하는 함수를 쓸 때는 2가지 옵션이 있음.
//   // 1. setState(값) : 이런 식으로 하면 해당 state를 그냥 값 으로 설정해버린다.
//   // 2. setState(함수) : 함수를 보낼 때, react.js는 함수의 첫번째 arg로 현재의 state를 보낸다.
//   // 이 setState함수의 첫 arg에서 받은 state를 갖고 새로운 state를 만들든 계산하든 하는거임.
  
//   useEffect(() => console.log(toDoArray)
//   ,[toDoArray]);

//   return (
//     <div>
//       <h1>My To Do List ({toDoArray.length})</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           onChange={handleChange}
//           type="text" 
//           placeholder="Wirte your to do" 
//           value={inputValue} />

//         <button>
//           Add To Do
//         </button>

//       </form>
//       <hr />
//       <ul>
//         {toDoArray.map((item, index, arr) => <li key={index}>{item}</li>)}
//       </ul>
//     </div>
//     );
// }



/////////////////////////////////////////////////////////////////////////////////////////////

// import Button from "./Button";
// import styles from "./App.module.css";
// import { useState, useEffect } from "react";

// // function Hello() {
// //   useEffect(() => {console.log("created");
// //   return () => console.log("destroyed");}, []);
// //   return <h1>Hello</h1>
// // }

// function Hello() {
//   useEffect(function () {
//     console.log("created");
//     return function () {return console.log("destroyed")};
//   } , []);
//   return <h1>Hello</h1>
// }

// // 컴포넌트가 destroyed 될 때 뭔가 할 수 있게 해주는게 clean up function
// // 뭐 분석 이벤트를 보낸다든가 등. 그냥 애초에 useEffect가 function을 부르는데
// // 그 안에다가 function을 한번 더 넣어두는 거임. 
// // 익명의 function인데 () => {} 로 하는거나, function () {}로 하는거나 같다.


// function App() { 
//   const [counter, setCounter] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const [showing, setShowing] = useState(false);
//   const handleShowing = () => setShowing(current => !current);


  
//   function handleSearch(event) {
//     setKeyword(event.target.value);
//   }
  
//   const handleCounter = () => setCounter(current => current + 1);

//   useEffect(() => {
//     console.log("I run only once");
//   },[]);

//   useEffect(() => {
//     if (keyword !== "" && keyword.length > 5) {
//       console.log(`I run when 'keyword' changes`)
//     };
//   },[keyword]);

//   useEffect(() => {
//     console.log("I run 'counter' changes")
//   },[counter]);
//   // useEffect를 활용하면 두개의 인자를 받아서 (1) 첫번째 인자는 실행할 함수
//   // (2) 어디에 dependency를 가져서 변화할 때마다 실행될지 를 세세하게 설정할 수 있다.
//   // react는 state가 변화할 때 컴포넌트를 재실행시키는게 기본인데, 그걸 세부적으로 조정할 수 있게 되는 것

//   return (
//     <div>
//       <input 
//         value={keyword} 
//         onChange={handleSearch} 
//         type="text" 
//         placeholder="Search here">          
//       </input>

//       <button onClick={handleShowing}>{showing ? "Hide" : "Show" }</button>
//       {showing ? <Hello></Hello> : null}

//       <h1 className={styles.title}>Welcome Back to React {counter} times</h1>
//       <Button onClickProp={handleCounter} textProp="click me"></Button>
//     </div>
//   );
// }

// export default App;