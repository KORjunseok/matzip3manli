const Datatypes = require('sequelize').DataTypes;
const mysql = require('../db.js');

// Comment 변수에는 Sequelize에서 comment 모델을 정의하는 mysql.define('comment', {...}) 호출 결과가 할당.
const Comment = mysql.define('comment',{
    // 기본 키 역할을 하는 자동 증가 정수 필드입니다. null일 수 없습니다.
    id:{
        type:Datatypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    // 텍스트 필드입니다. null일 수 없습니다.
    comment:{
        type:Datatypes.TEXT,
        allowNull:false
    },
    // 문자열 필드입니다. null일 수 없습니다.
    nickname:{
        type:Datatypes.STRING,
        allowNull:false
    }
});

// 각 컨트롤러 메서드에서 'Comment' 모델을 사용하여 데이터베이스 작업(예: 쿼리, 생성, 업데이트, 삭제)을 수행해야 함.
module.exports=Comment;