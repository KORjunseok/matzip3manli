const Datatypes = require('sequelize').DataTypes;
const mysql = require('../db.js');
const Post = require('./post.js');
const Comment = require('./comment.js');

// User 변수에는 Sequelize에서 user 모델을 정의하는 mysql.define('user', {...}) 호출 결과가 할당.
const User = mysql.define('user',{
    // 기본 키 역할을 하는 자동 증가 정수 필드입니다. null일 수 없습니다.
    id:{
        type:Datatypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Datatypes.STRING,
        allowNull:false
    },
    //  문자열 필드입니다. 고유해야 하며 null이 허용되지 않음.
    nickname:{
        type:Datatypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:Datatypes.STRING,
        allowNull:false
    },
    email:{
        type:Datatypes.STRING,
        allowNull:false
    },
    imageURL:{
        type:Datatypes.STRING,
        allowNull:true
    },
    // 텍스트 필드입니다. null이 허용됩니다.
    introduce:{
        type:Datatypes.TEXT,
        allowNull:true
    },
    phone:{
        type:Datatypes.INTEGER,
        allowNull:true
    }
});

// 각각 User 모델과 Post 및 Comment 모델 간의 일대다 연결을 설정합니다. 이는 사용자가 여러 게시물과 댓글을 연관시킬 수 있음을 의미.
User.hasMany(Post);
User.hasMany(Comment);

module.exports=User;