import client from "./client";

//회원가입
export const join = ({ email, type, name, password }) =>
    client.post('/api/join', { email, type, name, password });

//로그인
export const login = ({ email, password }) => 
    client.post('/api/login', { email, password });
