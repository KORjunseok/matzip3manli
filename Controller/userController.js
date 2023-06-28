const jwt = require('jsonwebtoken');
const User = require('../database/Models/user.js');
const config = require('../config.js');
const {secretKey, expireIn} = config.jwt;
const bcrypt = require('bcrypt');

module.exports = {
    // 새 사용자를 생성.
    create : async (req, res, next) => {
        
    },
    // 용자 로그인에 사용. 사용자 로그인 프로세스를 처리하는 코드를 추가해야 함. 제공된 자격 증명의 유효성 검사, JWT 토큰 생성 및 클라이언트로 다시 전송이 포함될 수 있음.
    login : async (req, res) => {
        
    },
    // 사용자를 로그아웃하는 데 사용. . 구현은 "인증" 쿠키를 지우고 사용자를 루트 URL("/")로 리디렉션합니다. 수정에 대한 특정 요구 사항이 없는 한 이 구현을 그대로 유지할 수 있음.
    logout : (req, res) => {
        res.clearCookie('Authorization');
        res.redirect('/');
    },
    // 사용자 정보를 업데이트 함 
    update : (req, res) => {
        
    }
};