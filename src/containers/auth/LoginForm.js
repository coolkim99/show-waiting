import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, login } from '../../modules/auth';
import { check } from '../../modules/user';
import { findStores } from '../../modules/stores';

const LoginForm = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user
    }));

    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
          changeField({
            form: 'login',
            key: name,
            value,
          }),
        );
      };

      // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        const {email, password} = form;
        dispatch(login({ email, password }));
    };

      // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
          console.log('오류 발생');
          console.log(authError);
          setError('로그인 실패');
          return;
        }
        if (auth) {
          console.log('로그인 성공');
          console.log(auth.result.id);
        //   dispatch(check(auth.id));
        }
      }, [auth, authError, dispatch, user]);

      useEffect(() => {        
        if (auth) {
            if(auth.result.type == "CONSUMER") {
                dispatch(findStores());
                history.push('/main');
            }
        }
      }, [history, auth, dispatch]);


    return (
      <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
    );
  };
  
  export default withRouter(LoginForm);