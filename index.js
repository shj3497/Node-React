const util = require('util');
const express = require('express');
const app = express();
const port = 5000;

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

app.listen(port, ()=> util.log(`Example app listening on port ${port}!`));