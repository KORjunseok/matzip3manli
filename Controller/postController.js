const jwt = require('jsonwebtoken');
const Post = require('../database/Models/post.js');
const config = require('../config.js');
const {secretKey, expireIn} = config.jwt;
const bcrypt = require('bcrypt');

module.exports={
    // 새 게시물을 생성. 요청 본문 데이터를 기반으로 게시물 생성을 처리하는 코드를 추가해야 함.  데이터 유효성 검사, 새 게시물 개체 생성 및 데이터베이스에 저장이 포함될 수 있음.
    create : async (req, res, next) => {
        
    }
    ,
    //  게시물을 검색하기 위한 것. 데이터베이스를 쿼리하고 지정된 영역과 연결된 게시물을 반환하는 코드를 추가해야 함
    getPostsByZone : async (req, res, next) => {
        
    },
    //  모든 게시물을 가져오는 데 사용. 데이터베이스를 쿼리하고 모든 게시물을 검색하는 코드를 추가해야 함
    getPosts : async (req, res, next) => {
        
    },
    // ID로 특정 게시물을 검색. 제공된 게시물 ID를 기반으로 게시물을 찾아 반환하는 코드를 추가해야 함 
    getPost : async (req, res, next) => {
        
    },
    //  기존 게시물을 업데이트 함. . ID로 게시물을 찾고, 게시물 데이터의 유효성을 검사 및 업데이트하고, 업데이트된 게시물을 데이터베이스에 저장하는 코드를 추가해야 함.
    update : async (req, res, next) => {
        
    },
    // 게시물을 삭제하는 메소드. 해당 ID로 게시물을 찾고 데이터베이스에서 제거하는 코드를 추가해야 함.
    delete : async (req, res, next) => {
        
    }
};