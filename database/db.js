const Sq = require('sequelize');

const config = require('../config.js');

// 객체 구조 분해를 사용하여 config.db 객체에서 필요한 구성 값(database, host, password, username)을 추출 함.
const {database, host, password, username} = config.db;

//  mysql이라는 Sequelize 클래스의 새 인스턴스를 생성합니다. Sequelize 생성자는 데이터베이스 이름, 사용자 이름, 암호 및 추가 옵션과 함께 호출됩니다. 옵션은 MySQL 데이터베이스에 연결하기 위해 호스트와 방언을 'mysql'로 지정함.
const mysql = new Sq.Sequelize(database,username,password,{
    host : host,
    dialect : 'mysql'
});

// const {Model} = Sq;

// class User extends Model{
    
// };

// User.init({},{Sq});

module.exports = mysql;