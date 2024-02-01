import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = ({ history }) => {

    return (
      <AuthForm
        type="login"
        // form={form}
        // onChange={onChange}
        // onSubmit={onSubmit}
        // error={error}
      />
    );
  };
  
  export default withRouter(LoginForm);