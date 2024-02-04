import client from "./client";

//스토어 리스트 가져오기
export const storeList = () => client.get('/api/storeList');

//메뉴 리스트 가져오기
export const storeMenu = ( storeId ) =>
    client.get(`/api/${storeId}`);

