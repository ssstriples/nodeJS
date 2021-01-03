const express = require('express');
const router = express.Router();

function testMiddleWare(req, res, next) {
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleWare2(req, res, next) {
    console.log('두번째 미들웨어');
    next();
}

function loginRequired(req, res, next) {
    // if(로그인이 되어있지 않으면) {
    //     res.redirect(로그인창으로)
    // } else {
    //     next()
    // }
}

router.get('/', testMiddleWare, testMiddleWare2, (req, res) => {
    res.send('admin 이후 url');
})

router.get('/products', loginRequired, (req, res) => {

    //res.send('admin products');
    res.render('admin/products.html', {
        message : '<p1>태그가 출력됩니다.</p1>',
        online : 'express'
    })
})

module.exports = router;