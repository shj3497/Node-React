const util = require('util');
const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./models/User.js');
const config = require('./config/key.js');

const { auth } = require('./middleware/auth.js');


// application/x-www-form-urlencoded
// Express를 쓸 때 body-parser를 따로 임포트 하지 않아도 된다.
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());
// app.use(express.json());

app.use(cookieParser());

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

// Client(Postman) 통신

app.post('/api/users/register', (req, res) => {

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

app.post('/api/users/login', (req, res) => {

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

app.get('/api/users/auth', auth, (req, res) => {

    // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 True라는 말.
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})

app.get('/api/users/logout', auth, (req, res) => {
    // findOneAndUpdate : Update문
    // 1:선택자, 2:업데이트할 내용, 3. callback
    User.findOneAndUpdate({
        _id: req.user._id
    }, 
    {token: ""}, (err, user) => {
        if(err) return res.json({success:false, err});
        // .send() >> : 결과값을 text로 보낸다.
        return res.status(200).send({
            success: true
        })
    })
})

app.listen(port, ()=> util.log(`Example app listening on port ${port}!`));

// Client(React) 통신
app.get('/api/hello', (req, res) => {

    res.send('안녕하세요 ~ !');
})