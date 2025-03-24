// async04.js

//# async & await
// async(asynchronous: 비동기적인)
// await(기다리다)
// - async 함수 내에서 await 키워드를 사용
// - 비동기 작업이 완료될때까지 await의 실행을 일시적으로 멈춤

//? async 함수 구조
// : 함수 자체를 비동기 함수로 정의하는 키워드
// : async function 함수명() {}
// - 항상 Promise 객체를 반환

// +) async 함수 내부에서 await 키워드를 사용하여 Promise의 결과를 기다림

async function fetchUserData() {
  // fetch('url') 메서드
  // : 해당 url을 사용하여 서버와 통신을 하는 메서드
  // : Response 객체를 반환

  let data = await fetch('https://api.example.com/data'); // 시간이 걸리는 작업 + await(기다림)

  let jsonData = await data.json(); // 가져온 json 데이터를 JS 객체로 변환: 시간이 걸리는 작업 + await(기다림)

  console.log(jsonData);
}

//! async, await의 특징
// : 비동기적 코드를 동기적으로 작성 (가독성 향상)
// : async 함수 내에서만! await 사용 가능!
// - 하나의 async 함수 내에서 여러 개의 await가 가능

//! 비동기 작업와 예외 처리
// : 외부와 연결되는 작업은 주로 '비동기 작업'으로 작성
// - 예외 처리 코드와 함께 사용 '권장'
async function fetchCustomerData() {
  try {
    // 실제 로직이 구현되는 블록

    let data = await fetch('url'); // fetch()함수: Response 객체를 반환

    if (!data.ok) {
      throw new Error('네트워크 응답이 실패되어 데이터를 정상적으로 가져오지 못하였습니다.');
    }

    // .json() 메서드
    // : json 데이터를 parse(분석)하여 JS 객체로 반환
    let jsonData = await data.json();
    console.log(jsonData);

  } catch(error) {
    // try 블록에서 에러 발생 시 해당 에러를 매개변수로 받아 처리

    // cf) cer: console.error();
    //    - 콘솔 출력문이 빨간색으로 예외처럼 출력
    console.error(error.message); // Failed to parse URL from url
  }
}

fetchCustomerData();

//& fetch() 함수
// : 네트워크 요청을 비동기적으로 처리
// - Promise를 반환: HTTP 응답을 나타내는 Response 객체

//& Response 객체
// 1) ok
// : HTTP 상태코드가 200~299 범위에 있을 때 true를 반환
// >> 요청이 성공적으로 완료 되었음을 반환

// 2) status
// : 응답의 HTTP 상태코드를 반환 (예. 200, 404, 500 등)

// 3) statusText
// : 응답의 HTTP 상태코드에 대한 텍스트 메시지 반환 (예. "OK", "NOT FOUND", "SERVER ERROR" 등)

// 4) headers: 응답 헤더를 나타냄, 응답의 메타데이터나 특정 값을 포함

// 5) body: 응답의 본문, 해당 데이터를 .json() 사용으로 data 추출 