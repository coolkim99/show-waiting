import client from "./client";

//스토어 리스트 가져오기
export const findOrdering = (storeId) => client.get(`/api/getordering/${storeId.storeId}`);