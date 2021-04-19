// process.env.NODE_ENV : 환경변수
// Local 환경에서는 Development
// Deploy(배포) 후 에는 production으로 나온다.
if(process.env.NODE_ENV === 'production'){
    // 배포가 된 이후라면 prod.js를 참고

    // exports란? 
    // require() 함수는 module.exports를 리턴한다.
    // exports하지 않는 변수는 undefined 이고,
    // exports한 변수는 defined이다.
    // module.exports = exports 이다. (Alias)
    // 참고 사이트 : https://medium.com/@chullino/require-exports-module-exports-%EA%B3%B5%EC%8B%9D%EB%AC%B8%EC%84%9C%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-1d024ec5aca3
    module.exports = require('./prod.js');
}else{
    // 아니라면 dev.js 참고
    module.exports = require('./dev.js');
}