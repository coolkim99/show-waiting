import client from "./client";

//메뉴 리스트 가져오기
export const addItem = ( { storeId, name, price } ) => {

    console.log(storeId, name, price);
    return client.post(`/api/${storeId.storeId}/items/new`, {
    name, price
});
} 