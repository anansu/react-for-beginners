import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";


// let fetched = fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function(response) {
//     return response.json(); // then으로 실행한 콜백함수가 다시 promise 객체를 return해주게끔 하면
//     // 다시한번 then을 통해서 promise가 settled (== locked-in == resolved) 된 이후에(그 중에서도 fulfilled 일 경우)
//     // 되었을 때 실행할 수 있는 콜백함수를 또 줄 수 있음. 이게 promise chaining이고 이걸 많이 쓴다.
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(response) {
//     console.log('reason', response);
// })

function StudyContent() {
    const [loading, setLoading] = useState(true);

    const getStudy = async() => {
        const json = await (await fetch(`https://jsonplaceholder.typicode.com/posts`)).json();
        console.log(json);
        setLoading(false);
        
    }
    useEffect(()=> {getStudy()}, []);

    const id = useParams();

    return (
        <div>
          {loading ? <h1>Loading...</h1> : 
          <div>
            <p>
              콜백함수는, 특정 함수가 "다른 함수의 입력값으로 전달되어서 호출된다"라고 하면
              그것을 callback function이라고 한다. 이미 이런 것들은 꽤 많이 쓰고 있는데, 
              배열 객체의 map 메소드라거나, filter 메소드가 이에 속한다.
            </p>
            <p>
              동기 VS 비동기는 지겹지? 실행흐름(순서)이 2개가 있는데 하나의 실행흐름만 사용하는게 동기.(Synchronous)
              setTimeout(function, millisecond); 이런 식으로 쓰면 다른 실행흐름에 setTimeout을 넘기고 작동하는데,
              이게 asynchronous(비동기)
              언제 비동기적인 처리를 하느냐? 서버-웹브라우저 통신 등은 언제 끝날지 "예측하기 어려움" 이런 예측하기 어려운
              일들을 주로 비동기적으로 처리함. AJAX는 브라우저 새실행 안하고 통신하게 하는 기술로 조금 다른 주제.
              fetch API에서 사용하는 then이 promise(?) 
              fetch는 url을 주면 특정값을 return해주는데, return value가 Promise 객체인데
              이 promise 객체는 response 객체를 돌려줌. 맨 처음에는 pending 상태였다가
              fulfilled or rejected 상태가 될 수 있음.(이 상태를 통칭하여 settled된 상태 == locked-in == resolved)
              함수의 return 값이 promise라면 비동기적인 처리를 담당하는 함수일 가능성이 높다.
              이 promise 객체는 두가지 메소드를 갖는데, 하나가 .then()이고 하나는 .catch()임. 이 두 메소드는
              안정된(settled 된 == resolved 된 == locked-in 된) promise에 대해서 처리해서 다시 새로운 
              promise 객체를 return할 수 있음. 그리고 promise 객체는 resolved 되면 Response 객체를
              넘겨줄 수 있다.
              then (callBackFnforfulfilled, callBackFnforRejected)
              이거 또 promise 객체 뱉는다고 했지? 계속해서 사용가능함.
              아무튼 then의 경우 암묵적으로 result라는 파라미터를 첫 번째 파라미터로 넘겨주고, 
              (result == response 객체와 동일하다고 보면 됨) 
              catch는 reason이라는 파라미터를 첫번째 파라미터로 넘겨줌.
              (reason == response 객체와 동일하다고 보면 됨)
              여기에 .text() 든 .json이든 주면 다시 promise 객체가 튀어나옴.
              이 promise의 역할은 json 텍스트를 js의 데이터타입으로 converting하는 promise인 것임.
            </p>
            </div>
          }
        </div>
    )
}
export default StudyContent;