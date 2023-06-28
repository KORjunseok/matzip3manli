const jwt = require('jsonwebtoken');
const Comment = require('../database/Models/comment.js');
const config = require('../config.js');
const {secretKey, expireIn} = config.jwt;
const bcrypt = require('bcrypt');

module.exports={
    //  게시물 ID를 기반으로 댓글을 검색하기 위한 것. 데이터베이스를 쿼리하고 지정된 게시물 ID와 연결된 댓글을 반환하는 코드를 추가해야 함.
    getCommentsByPostId : async (req, res, next) => {
        
    },
    // 사용자 ID를 기반으로 댓글을 가져올 것. 지정된 사용자 ID와 연결된 댓글을 검색하는 기능을 구현해야 함
    getCommentsByUserId : async (req, res, next) => {
        
    },
    // 새 댓글을 만드는 역할. 데이터의 유효성을 검사하고 새 주석 개체를 만들고 데이터베이스에 저장해야 함
    create : async (req, res, next) => {
        
    }
    ,
    //  기존 댓글을 업데이트하는 데 사용.  제공된 댓글 ID를 기반으로 댓글을 찾고, 댓글 데이터를 검증 및 업데이트하고, 업데이트된 댓글을 데이터베이스에 저장하는 코드를 추가해야 함
    update : async (req, res, next) => {
        
    },
    // 댓글을 삭제하는 메소드. 해당 ID로 댓글을 찾아 DB에서 제거하는 코드를 추가해야 함
    delete : async (req, res, next) => {
        
    }
};