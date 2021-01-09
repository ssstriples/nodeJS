const wait1sec = new Promise(( resolve, reject ) => {
    console.log('시작!!')

    setTimeout( () => {
        resolve( console.log('1초뒤에 찍습니다!!!') );
        //reject( '에러' );
    }, 1000)
});

wait1sec.then(() => {
    console.log('Promise 이행 완료!!')
}).catch( (err) => {
    console.log(err);
})
