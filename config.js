// 구성 값을 보유하는 'variable' 객체가 정의.
const variable = {
    db : {
        host : 'express-database.c1xqmf5yittd.ap-northeast-2.rds.amazonaws.com',
        username : 'root',
        password : '4321aaaa',
        database : 'matzip'
    },
    // jwt 속성에는 JWT(JSON Web Token) 처리를 위한 구성 값이 포함. 여기에는 토큰 서명 및 확인에 사용되는 'secretKey'와 토큰이 유효한 기간을 지정하는 'expireIn' 기간이 포함
    jwt : {
        secretKey : 'matzip-3manli',
        expireIn : '1d'
    },
    port : 3030,
    // bcrypt 속성에는 bcrypt 알고리즘을 사용하는 암호 해싱과 관련된 구성 값이 포함 
    bcrypt :{
        salt : 10
    },
    
};

module.exports = variable;
// 데이터베이스 연결 세부 정보, JWT 구성, 포트 번호 및 bcrypt 설정과 같은 애플리케이션의 다양한 설정을 쉽게 관리하고 업데이트 가능.