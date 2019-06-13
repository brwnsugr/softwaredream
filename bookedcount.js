module.exports = bookcount = (bedsnum, arr) =>{
    for(let i = 0; i < bedsnum; i++){
        arr.push([false, 0]);
    }
    return arr;
}