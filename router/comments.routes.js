//  일반적으로 router 개체를 사용하여 comment 에 대한 CRUD 작업을 처리하는 데 필요한 경로를 정의.
// router.get(), router.post(), router.put(), router.delete() 등과 같은 메서드를 호출하고 필요한 경로 경로를 제공하여 수행 및 핸들러 기능.
const router = require('express').Router();

module.exports=router;
// 예를 들어 게시물 ID로 댓글을 검색하는 경로를 정의하려면 다음과 같이 작성할 수 있음.
// router.get('/comments/:postId', (req, res) => {
  // 게시물 ID로 댓글 검색 처리 
// });