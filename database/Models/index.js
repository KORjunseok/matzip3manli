// import Models
const User = require('./user.js');
const Post = require('./post.js');
const Comment = require('./comment.js');

// 용 프로그램의 다른 부분에서 "database/Models" 디렉터리를 가져오고 필요한 특정 모델에 액세스하여 모델에 쉽게 액세스할 수 있습니다. 예를 들어 User 모델에 액세스하려면 다른 파일에서 const { User } = require('../database/Models');를 사용할 수 있음.
module.exports={
    User:User,
    Post:Post,
    Comment:Comment
};