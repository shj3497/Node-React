const util = require('util');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

userSchema.pre('save', function(next){
    
    var user = this;

    // 만약 이 객체의 password가 변한다면
    if(user.isModified('password')){
        // 비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err){
                return next(err);
            }else{
                // user.password는 plaintext
                bcrypt.hash(user.password, salt, function(err, hash){
                    if(err){
                        return next(err);
                    }else{
                        user.password = hash;
                        next();
                    }
                })
            }
        })
    }
});

// 스키마를 만들고 모델로 감싸준다.
const User = mongoose.model('User', userSchema);

module.exports = {User}