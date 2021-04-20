const util = require('util');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

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
    }else{
        next();
    }
});

// mongoose.Schema.methods
// comparePassword 라는 함수를 만들어 주는듯?
userSchema.methods.comparePassword = function(plainPassword, cb){

    // PlainPassword ex) 1234567
    // 암호화된 비밀번호 : $2b$10$12r544EsFQromn6/NmOR8.vaFAYhJD/9H9/o6ry/BfMDtKwaD/fvC

    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err){
            return cb(err)
        }else{
            cb(null, isMatch);
        }
    })
}

userSchema.methods.generateToken = function(cb){
    // jsonwebtoken을 이용해서 token 생성하기

    // this >> es6 문법으로 해당 함수를 호출한 this
    var user = this;

    // _id는 MongoDB에 있는 ID로 사용자가 정의한 컬럼이아니라 MongoDB가 만든 컬럼인듯
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    
    user.token = token;
    user.save(function(err, user){
        if(err){
            return cb(err)
        }else{
            return cb(null, user)
        }
    })
}

// 스키마를 만들고 모델로 감싸준다.
const User = mongoose.model('User', userSchema);

module.exports = {User}