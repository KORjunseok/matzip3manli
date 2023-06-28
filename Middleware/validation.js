const validator = require('express-validator');

// cookie, query, param, body 및 validationResult를 포함하여 validator 개체의 다양한 속성을 분해합니다. 이러한 속성은 express-validator에서 제공하는 다양한 유효성 검사 함수 및 결과 처리기를 나타냄.
const {cookie,query,param,body,validationResult} = validator;

// req(요청), res(응답) 및 next의 세 가지 매개변수를 사용하는 validate 함수가 정의됩니다. 함수 내에서 validationResult(req)를 사용하여 유효성 검사 오류를 확인하고 errors 변수에 결과를 저장함.
const validate = function(req,res,next){
    // 유효성 검사 오류(errors.isEmpty())가 없으면 next 함수가 호출되어 체인의 다음 미들웨어 함수로 제어를 전달함.
    const errors = validationResult(req);
    if(errors.isEmpty()){
        next();
    // 유효성 검사 오류가 있는 경우 함수는 400 상태 코드와 errorMessage 속성이 포함된 JSON 개체로 응답합니다. errorMessage 속성은 errors.array()를 사용하여 유효성 검사 오류에서 추출한 오류 메시지의 배열임.
    }else{
        res.status(400).json({
            errorMessage:errors.array().map((v,idx)=>`${idx+1} : ${v.msg}`)
        });
    }
};

// 다양한 경로 또는 작업에 대한 사전 정의된 유효성 검사 규칙을 포함하는 'defaultValidate' 객체가 정의됩니다. 이 예에서는 express-validator의 body() 유효성 검사기를 사용하여 요청 본문의 nickname 및 name 필드를 확인하는 createUser 유효성 검사 규칙을 포함합니다. 'validate' 기능도 최종 유효성 검사 단계로 포함.
const defaultValidate = {
    createUser:[
        body('nickname').trim().isLength({min:1}).withMessage('닉네임을 입력해주세요.'),
        body('name').trim().notEmpty().withMessage('이름을 입력해주세요.'),
        validate
    ],
    loginUser:[

    ],
    
};

// defaultValidate 개체는 module.exports를 사용하여 내보내어 응용 프로그램의 다른 부분에서 요청 유효성 검사에 사용할 수 있도록 함.
module.exports=defaultValidate;

// 이 유효성 검사 미들웨어를 사용하려면 일반적으로 경로 또는 컨트롤러에서 defaultValidate 개체를 가져오고 defaultValidate 개체의 해당 키에 액세스하여 사전 정의된 유효성 검사 규칙을 적절한 경로 또는 작업에 적용함.
