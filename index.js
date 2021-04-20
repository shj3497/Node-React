const util = require('util');
const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./models/User.js');
const config = require('./config/key.js');


// application/x-www-form-urlencoded
// Express를 쓸 때 body-parser를 따로 임포트 하지 않아도 된다.
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());
// app.use(express.json());

const mongoose = require('mongoose');
// use~ 써주는 이유 : 안써주면 에러가 가끔 날때가 있음.

// config는 key.js를 불러왔고 key.js에서 dev.js를 호출하여 exports해온 것에서 
// 키값인 mongoURI로 value를 불러왔다.
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify:false
}).then(() => {
    util.log('mongoDB Connected...')
}).catch(err => {
    util.log(err)
});

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {

    // 회원가입시 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    // 현재 user는 User.js에서 가져온 객체이다.
    const user = new User(req.body);
    // .save() : db에 저장
    user.save((err, userInfo) => {
        if(err) {
            return res.json({success:false, err})
        }else{
            return res.status(200).json({
                success:true
            })
        }
        
    });
})

app.post('/login', (req, res) => {

    // 요청된 이메일을 데이터베이스에서 있는지 확인한다.
    User.findOne({email: req.body.email}, (err, user) => {
        if(!user){
            return res.json({
                loginSuccess: false,
                message:"제공된 이메일에 해당하는 유저가 없습니다."
            })
        }else{
            // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 일치하는지 확인
            user.comparePassword(req.body.password, (err, isMatch) => {
                if(!isMatch){
                    return res.json({
                        loginSuccess: false,
                        message:"비밀번호가 일치하지 않습니다."
                    })
                }else{
                    // 비밀번호가 일치하면 Token 생성
                    user.generateToken((err, user) => {
                        if(err){
                            return res.status(400).send(err);
                        }else{
                            // Token을 저장한다. where? 쿠키, 세션, localStorage
                            // 쿠키에 해보겠다.
                            res.cookie("x_auth", user.token).status(200).json({
                                loginSuccess:true,
                                userId: user._id
                            })
                        }
                    })
                }
            })
        }
    })

    
})



app.listen(port, ()=> util.log(`Example app listening on port ${port}!`));