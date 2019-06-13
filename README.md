# softwaredream
크게, 네 개의 구조로 나눠서 문제를 설계 했습니다.

예상 아웃풋은 

1. input.js ->input 데이터가 들어가는 파일
2. main.js -> 터미널에서 실행을 하기 위한 메인 파일 
3. createbeds.js -> 정해진 input 데이터에 따른 침대배열을 생성하는 파일
4. bookedCount.js -> 각 침대 별 예약된 날 수(Date수)를 카운트 하기 위한 배열을 생성하는 파일

input.js에 인풋 데이터를 넣어두면, 이를 main.js에서 받아서 cretaedBeds.js, bookedCount.js 를 이용하여, 배열을 만든 뒤, 
main.js 함수 안에 있는, 손님을 idx 앞부분부터 순회하면서, 침대에 채우는 함수 fill, 
그리고 똑같이 채울 수 있는 침대라도, 예약이 많이 차 있는 침대부터 우선적으로 손님을 배치하기 위한 체크함수인 maxCheck 함수로 답을 구합니다.
