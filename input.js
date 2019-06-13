const n = 4; // 침대의 갯수를 input값에 입력해주면 됩니다.
const objs =[ // objs 배열은 예약 손님 object들을 입력해주면 됩니다. 
    { id: 1, date: 1, nights: 2 },
    { id: 2, date: 1, nights: 1 },
    { id: 3, date: 3, nights: 2 },
    { id: 4, date: 1, nights: 2 },
    { id: 5, date: 4, nights: 1 },
    { id: 6, date: 3, nights: 1 },
    { id: 7, date: 2, nights: 3 },
    { id: 8, date: 1, nights: 2 },
    { id: 9, date: 4, nights: 1 }
  ];
const days = 30 // 현재일 기준으로 최대 예약 가능 날짜입니다. (기본 30일 설정)
const input = {
    bedsNumber: n,
    guests: objs,
    maxDay: days,
};

module.exports = input