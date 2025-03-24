// c_operation01.js

//# === 연산자(Operation) === //
// : 수학적 계산을 위한 코드 (산술, 할당, 비교, 논리)

//! 산술 연산자
// 사칙연산
// ++, --, %(나눗셈-나머지)

let x = 10;
let y = 3;
console.log('==산술연산자==');
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// cf) 증감연산자: 수를 1씩 증가 또는 감소
//    >> 1항 연산식

x = 10
console.log(x++);
console.log(++x);
console.log(x--);
console.log(--x);

//! 2. 할당(대입) 연산자
// =(할당), +=, -=, *=, /=, %=

let a = 10
a += 5;
a -= 2;
a *= 3;
a /= 4;
console.log(a);

//! 3) 비교 연산자
// : 결과를 boolean값으로 반환 (상대적인 크기를 비교)

// 부등호: >, <, >=, <=
// 동등, 부등: ==, !=
// 일치, 불일치: ===, !==

let value1 = 10;
let value2 = '10';

//? cf) 동등(부등) VS 일치(불일치)
// 1) 동등, 부등
//    : 값의 동일성을 판단
//    - 데이터 유형은 고려하지 x
console.log(value1 == value2);
console.log(value1 != value2);

// 2) 일치, 불일치*****
//    : 엄격하게 값과 데이터 유형의 완전한 동일성을 판단
console.log(value1 === value2);
console.log(value1 !== value2);

// cf) 문자열 비교 연산자: 정렬(기본값 - 오름차순)
let str1 = 'abc';
let str2 = 'bcd';

console.log(str1 < str2);
console.log(str1 === str2);
console.log(str1 > str2);