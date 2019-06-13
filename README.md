# softwaredream

먼저, 작동 방법은  
1. input.js 파일에, 형식에 맞는 input 데이터를 넣은 후, 
2. Terminal에서 해당 디렉토리로 이동한 후 "node main" 을 입력하여, node 엔진을 통해 실행할 수 있습니다. 

예상 아웃풋은 아래와 같이 침대 크기 수 만큼의 배열을 갖으며, 각 침대 배열 원소는 내부에 날짜별 오름차순으로 object 를 원소로 갖습니다. 
따라서, 아래 아웃풋으로 첫번째 침대의 Date: 1~2 는 id: 1번 손님이 예약하였으므로, vacancy 은 false, 해당 기간동안 해당 번호의 침대를 예약한 손님의 id인 1로 값을 수정된 것을 볼 수 있습니다. 

[ [ { vacancy: true, id: 0 },
    { vacancy: false, id: 1 },
    { vacancy: false, id: 1 },
    { vacancy: false, id: 3 },
    { vacancy: false, id: 3 },
    { vacancy: true, id: 0 } ],
  [ { vacancy: true, id: 0 },
    { vacancy: false, id: 2 },
    { vacancy: false, id: 7 },
    { vacancy: false, id: 7 },
    { vacancy: false, id: 7 },
    { vacancy: true, id: 0 } ],
  [ { vacancy: true, id: 0 },
    { vacancy: false, id: 4 },
    { vacancy: false, id: 4 },
    { vacancy: false, id: 6 },
    { vacancy: false, id: 5 },
    { vacancy: true, id: 0 } ],
  [ { vacancy: true, id: 0 },
    { vacancy: false, id: 8 },
    { vacancy: false, id: 8 },
    { vacancy: true, id: 0 },
    { vacancy: false, id: 9 },
    { vacancy: true, id: 0 } ] ]

코드 구성은 크게, 네 개의 구조로 나눠서 문제를 설계 했습니다.

1. input.js ->input 데이터가 들어가는 파일
2. main.js -> 터미널에서 실행을 하기 위한 메인 파일 
3. createbeds.js -> 정해진 input 데이터에 따른 침대배열을 생성하는 파일
4. bookedCount.js -> 각 침대 별 예약된 날 수(Date수)를 카운트 하기 위한 배열을 생성하는 파일

input.js에 인풋 데이터를 넣어두면, 이를 main.js에서 받아서 cretaedBeds.js, bookedCount.js 를 이용하여, 배열을 만든 뒤, 
main.js 함수 안에 있는, 손님을 idx 앞부분부터 순회하면서, 침대에 채우는 함수 fill, 
그리고 똑같이 채울 수 있는 침대라도, 예약이 많이 차 있는 침대부터 우선적으로 손님을 배치하기 위한 체크함수인 maxCheck 함수로 답을 구합니다.

또한, 알고리즘을 설계할 때 아래와 같은 원칙으로 설계하였습니다.

1. 예약자의 idx가 작을수록 먼저 예약한 손님이며, 이익의 극대화보다도 먼저 예약한 손님을 우선으로 예약받아야 한다.
2. 어떤 예약자가 배치될 수 있는 침대가 2개 이상인 경우, 더욱 예약이 많이 차 있는 침대에 우선적으로 배치한다. (예약이 많은 침대에 우선적으로 넣을 것)

