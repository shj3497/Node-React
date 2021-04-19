const util = require('util');
const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');

const { User } = require('./models/User');
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

app.listen(port, ()=> util.log(`Example app listening on port ${port}!`));