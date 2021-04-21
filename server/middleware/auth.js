const {User} = require('../models/User.js');

let auth = (req, res, next) => {
    // 인증처리를 하는 곳

    // 클라리언트 쿠키에서 토큰을 가져온다. >> 토큰에 user._id가 담겨져 있다.
    let token = req.cookies.x_auth;

    // 토큰을 복호화 한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        // 유저가 없으면
        if(!user) return res.json({
            isAuth: false,
            error: true
        })
        req.token = token;
        req.user = user;
        next();
    })
    // 유저가 있으면 인증 OK

    // 유저가 없으면 인증 NO!
}

module.exports = {auth};