module.exports = create = (n, beds) =>{
    const info = {
        vacancy: true,
        id: 0,
    }
    for(let i = 0; i < n; i++){
        beds.push([])
        for(let j = 0; j <= 5; j++){
            beds[i].push(info);
        }
    }
    return beds
}

