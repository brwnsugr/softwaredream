module.exports = create = (n, beds, days) =>{
    const info = {
        vacancy: true,
        id: 0,
    }
    for(let i = 0; i < n; i++){
        beds.push([])
        for(let j = 0; j <= days; j++){
            beds[i].push(info);
        }
    }
    return beds
}

