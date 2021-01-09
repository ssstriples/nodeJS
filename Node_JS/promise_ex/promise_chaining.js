const p1 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve(
            {
                p1_text : "p1의 텍스트"
            }
        );
    }, 2000)
});

const p2 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve(
            {
                p2_text : "p2의 텍스트"
            }
            //reject('error error')
        );
    }, 3000)
});

// p1.then( (result1) => {
//     console.log("p1 = " + result1.p1_text);
//     return p2;
// }).then( (result2) => {
//     console.log("p2 = " + result2.p2_text);
// });

Promise.all( [p1, p2] ).then( (result) => {
    console.log("p1 = " + result[0].p1_text );
    console.log("p2 = " + result[1].p2_text );
}).catch( (err) => {
    console.log(err);
});