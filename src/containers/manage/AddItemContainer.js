import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { initializeForm, addItem, changeForm } from '../../modules/item';
import AddItem from '../../components/manage/AddItem';
import { findMenu } from '../../modules/menu';


const AddItemForm = ({ match, history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    let { storeId } = match.params;
    const { form, auth, item, itemError } = useSelector(({ auth, item }) => ({
      form: item.add,
      auth: auth.auth.result,
      item: item.item,
      itemError: item.error,
    }));
    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
      const { value, name } = e.target;
      dispatch(
        changeForm({
          form: 'add',
          key: name,
          value,
        }),
      );
    };
  
    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
      e.preventDefault();
      const { name, price } = form;
      if([name, price ].includes('')) {
        setError('빈 칸을 모두 입력하세요.');
        return;
      }
      console.log(storeId, name, price);
      dispatch(addItem({ storeId: {storeId}, name, price }));
      
    };
  
    // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
    useEffect(() => {
      dispatch(initializeForm('add'));
    }, [dispatch]);

    useEffect(() => {
    if (itemError) {
        // 상품명이 이미 존재할 때
        // if (itemError.response.status === 409) {
        //   setError('이미 존재하는 상품명입니다.');
        //   return;
        // }
        // 기타 이유
        setError('상품 등록 실패');
        return;
      }
      if (item) {
        console.log("상품 등록 성공");
        dispatch(findMenu(storeId));
        dispatch(initializeForm('add'));
    }
    }, [itemError, item]);
   
    return (
      <AddItem
        type="add"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error = {error}
      />
    );
  };
  
  export default withRouter(AddItemForm);