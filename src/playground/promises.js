const promise = new Promise((resolve, reject)=> {
    setTimeout(() =>{
        resolve({
            name: 'Damien',
            age: 39
        })
        //reject('Broken');
    }, 1500);
        
});

console.log('Bfore')

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject)=> {
        setTimeout(() =>{
            resolve({
                name: 'Damien',
                age: 39
            })
        }, 1500);
            
    });
}).then((str)=>{
    console.log('doesthis run', str)
}).catch((error) =>{
    console.log('error:', error);
});


console.log('After');