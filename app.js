const express = require('express');
const app = express();

// router
const router = require('./router/index.js');

// config
const config = require('./config.js');

// cookie - parser
const cookieParser = require('cookie-parser');

// DB - mysql
const mysql = require('./database/db.js');
const models = require('./database/Models/index.js');


// 미들웨어 기능은 app.use()를 사용하여 적용. 요청에서 JSON 데이터를 구문 분석하기 위한 express.json() 미들웨어와 쿠키 처리를 위한 cookieParser() 미들웨어가 포함 됨.
app.use(express.json());
app.use(cookieParser());

// 응용 프로그램에서 사용 가능한 경로의 개요를 제공하는 루트 경로("/")에 대해 HTTP GET 경로가 정의.
app.get('/',(req, res, next) => {
   res.status(200).json({
    path:{
        user:{
            1: 'POST /users/signup 회원가입',
            2: 'POST /users/login 로그인',
            3: 'GET /users/logout 로그아웃',
            4: 'PUT /users/:userId 유저 프로필 수정'
        },
        post:{
            1: 'GET /posts 게시글 전체 조회',
            2: 'GET /posts?zone= 지역별 조회',
            3: 'GET /posts/:postId 게시글 상세 조회',
            4: 'POST /posts 게시글 작성',
            5: 'PUT /posts/:postId 게시글 수정',
            6: 'DELETE /posts/:postId 게시글 삭제'
        },
        comment:{
            1: 'GET /comments/:postId 게시글 상세 댓글 조회',
            2: 'GET /comments/:userId 유저가 작성한 댓글 조회',
            3: 'POST /comments/:postId 댓글 작성',
            4: 'PUT /comments/:commentId 댓글 수정',
            5: 'DELETE /comments/:commentId 댓글 삭제'
        }
    }
   }) 
});

// router 미들웨어는 app.use('/', router)를 사용하여 루트 경로("/")에 적용. 들어오는 모든 요청이 router 모듈에 정의된 경로에 의해 처리 됨
app.use('/',router);

// 정의된 모델을 데이터베이스 스키마와 동기화하기 위해 mysql.sync() 메서드 호출. 동기화 완료 시 app.listen()을 사용하여 지정된 포트에서 콘솔.로그 출력
(async ()=>{
    await mysql.sync().then(()=>{
        app.listen(config.port,()=>{
            console.log(`${config.port} is running..`);
        });
    });
})();

// 이 코드는 Express 애플리케이션을 설정하고, 미들웨어를 구성하고, 경로를 정의하고, 데이터베이스 연결을 설정하고, 지정된 포트에서 들어오는 요청을 수신하기 위해 서버를 시작.