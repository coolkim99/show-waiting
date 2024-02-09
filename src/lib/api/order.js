import client from "./client";

//스토어 주문 가져오기
export const findOrdering = (storeId) => client.get(`/api/getordering/${storeId.storeId}`);

//스토어 주문 다된것 가져오기
export const findDone = (storeId) => client.get(`/api/getdone/${storeId.storeId}`);

//주문 완료
export const orderDone = ({ id }) => {
    return client.put(`/api/done`, { id });
} 

//주문 미완료
export const orderNotDone = ({ id }) => {
    console.log(id);
    return client.put(`/api/notDone`, { id });
} 

export const order = ({storeId, itemId, userId, count}) => {
    console.log(storeId, itemId, userId, count);
    return client.post(`/api/${storeId}/order/${itemId}`, {
        userId, count 
    })
}