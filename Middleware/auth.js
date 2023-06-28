const jwt = require('jsonwebtoken');

// eq(요청), res(응답) 및 next의 세 가지 매개변수를 사용하는 비동기 함수로 정의됩니다. 이러한 매개변수는 각각 요청 객체, 응답 객체 및 미들웨어 체인의 다음 함수를 나타냄.
async function isAuth(req,res,next){
    // isAuth 함수 내부에서 next 함수가 호출됩니다. next 함수는 체인의 다음 미들웨어 함수에 제어를 전달하는 데 사용.
    next();
}

// isAuth 함수는 module.exports를 사용하여 내보내므로 응용 프로그램의 다른 부분에서 미들웨어로 사용할 수 있음.
module.exports=isAuth;

// 이걸 구현해야 하나? 현재 isAuth 미들웨어 기능은 비어 있으며 인증 논리를 포함하지 않습니다. 실제 시나리오에서는 일반적으로 이 미들웨어 기능 내에서 인증 논리를 구현하여 JWT 유효성 검사, 사용자 인증 상태 확인 또는 사용자 권한 확인과 같은 들어오는 요청의 신뢰성을 확인합니다.