const Datatypes = require('sequelize').DataTypes;
const mysql = require('../db.js');
const Comment = require('./comment.js');

// Post 변수에는 Sequelize에서 post 모델을 정의하는 mysql.define('post', {...}) 호출 결과가 할당 함.
const Post = mysql.define('post',{
    // 기본 키 역할을 하는 자동 증가 정수 필드입니다. null일 수 없습니다.
    id:{
        type:Datatypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    //  문자열 필드입니다. null일 수 없습니다.
    nickname:{
        type:Datatypes.STRING,
        allowNull:false
    },
    //  문자열 필드입니다. null일 수 없습니다.
    restaurantName:{
        type:Datatypes.STRING,
        allowNull:false
    },
    zone:{
        type:Datatypes.STRING,
        allowNull:false
    },
    // 문자열 필드. null이 허용됩니다.
    menu:{
        type:Datatypes.STRING,
        allowNull:true
    },
    // 텍스트 필드입니다. null일 수 없습니다.
    content:{
        type:Datatypes.TEXT,
        allowNull:false
    },
    // : 게시물에 대한 좋아요 수를 나타내는 정수 필드입니다. 기본값은 0입니다.
    like:{
        type:Datatypes.INTEGER,
        defaultValue:0
    },
    // 게시물과 관련된 음식 이미지의 URL을 나타내는 문자열 필드입니다. null이 허용.
    foodImgURL:{
        type:Datatypes.STRING,
        allowNull:true
    }
});
// ost 모델과 Comment 모델 간의 일대다 연결을 설정합니다. 즉, 게시물에는 여러 댓글이 연결될 수 있음.
Post.hasMany(Comment);
//  module.exports를 사용하여 Post 모델을 내보내어 응용 프로그램의 다른 부분에서 사용할 수 있도록 함.
module.exports=Post;