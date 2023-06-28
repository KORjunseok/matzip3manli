const router = require('express').Router();
const commentsRouter = require('./comments.routes.js');
const postsRouter = require('./posts.routes.js');
const usersRouter = require('./users.routes.js');

//  배열이 정의되며 여기에는 경로를 나타내는 객체와 다양한 경로에 대한 해당 라우터 모듈이 포함됩니다. 각 개체에는 path 및 route의 두 가지 속성 존재.
const defalutRouter = [
    {
        path : '/posts',
        route : postsRouter
    },
    {
        path : '/comments',
        route : commentsRouter
    },
    {
        path : '/users',
        route : usersRouter
    },
];

//  defaultRouter 배열의 각 객체를 반복하는 데 사용. 루프 내에서 router 개체의 use 메서드를 호출하여 지정된 경로(path)에 지정된 라우터 모듈(route)을 마운트 함.
defalutRouter.forEach(r=>{
    router.use(r.path,r.route);
});

module.exports=router;