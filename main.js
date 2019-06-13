const createBeds = require('./createbeds');
const bookCountCreate = require('./bookedcount.js')
const input = require('./input.js');

var bookedCount = [];
var beds =[]
createBeds(input.bedsNumber,beds, input.maxDay);
bookCountCreate(input.bedsNumber,bookedCount); // BookedCount로 침대별 예약한 일수를 구할 수 있음 

const bedsNum = input.bedsNumber;
const guestsNum = input.guests.length;
const objs = input.guests
//maxCheck 으로 원소 체크 
maxCheck = (idx) =>{
    let max = bookedCount[idx][1];
    for(let i = idx+1; i < bookedCount.length; i++){
        if(max < bookedCount[i][1] && bookedCount[i][0]){
            return false;
        }
    }
    return true;
} 
// 손님을 idx 순서대로 순회하면서 침대에 채워넣기 
fill=(beds, objs) =>{
    for(let i = 0; i < guestsNum; i++){
        for(let j = 0; j < bedsNum; j++){
            let cnt = 0;
            for(let k = objs[i].date; k <= objs[i].date + objs[i].nights -1; k++){
                if(beds[j][k].vacancy === true){
                    cnt ++;
                }
            }
            if(cnt !== objs[i].nights){
                continue;
            }
            if(cnt === objs[i].nights){
                bookedCount[j][0] = true;
            }       
        }

        for(let j = 0; j < bedsNum; j++){
            if(bookedCount[j][0] === true){
                if(maxCheck(j)){
                    bookedCount[j][1] += objs[i].nights
                    for(let k = objs[i].date; k <= objs[i].date + objs[i].nights -1; k++){
                        beds[j][k]= {
                            vacancy: false,
                            id: objs[i].id
                        }
                    }
                    break;
                }
            }
        }
        for(let j = 0; j < bedsNum; j++){
            bookedCount[j][0] = false;
        }
    }
    return beds;
}

console.log(fill(beds, objs));