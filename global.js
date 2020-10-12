/*
node.js 자체적으로 지원하는 전역변수를 알아본다.
1. __dirname: 현재 실행중인 js파일의 풀 경로 반환
2. __filename: 파일명 반환

node.js 자체적으로 지원하는 전역객체를 알아본다.
1.console
2.exports
3.module
4.process
5/global
*/ 
// console.log("지금 실행 중인 파일명은 ", __filename);
// console.log("지금 실행 중인 디렉토리는 ", __dirname);

//console 객체
//실행 시 시작 시간을 출력해 준다.
// console.time("myCPU"); //원하는 제목을 넣어줄 수 있다.

// //~~~~~~~~~로직 수행

// for(var i =0; i<=1_000_000; i++){   
// }
// console.log("1,000,000번 수행 완료")

// console.timeEnd("myCPU");// 종료시간을 출력해준다.

//process 객체
// console.log(process.arch); //cpu에 대한 정보
// console.log(process.env); //컴퓨터 환경
// console.log(process.platform);