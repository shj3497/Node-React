const util = require('util');
const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');

const { User } = require('./models/User');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
// use~ 써주는 이유 : 안써주면 에러가 가끔 날때가 있음.
mongoose.connect(`mongodb+srv://shj3497:rkawkrhrnak1!@node-react.j15yu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
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