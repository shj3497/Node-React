// 이 부분은 배포된 이후에 정의되는 곳으로
// heroku 같은 사이트에서 배포를 할 때
// Config Vars에서 key값으로 지정해눈 name(MONGO_URI)를
// 여기서의 value값으로 지정해준다.
module.exports={
    mongoURI:process.env.MONGO_URI
}