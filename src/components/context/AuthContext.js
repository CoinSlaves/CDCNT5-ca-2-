// use context - kho trạng thái
// Để gọi api

import axios from 'axios';
import { createContext, useReducer } from 'react';
import { authReducer } from '../reducer/authReducer';
import { API_URL } from '../../common/constants';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
  });

  const loginUser = async (loginForm) => {
    const { email, password } = loginForm;
    try {
      const response = await axios.post(`${API_URL}/User/UserLogin`, {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const registerUser = async (registerForm) => {
    const { username, email, password, repwd } = registerForm;

    //         // const isBlankError = validatePasswordMatch(username, repwd)
    //         const emailError = validateEmail(email)
    //         const passwordError = validatePassword(password)
    //         const passwordMatchError = validatePasswordMatch(password, repwd)

    //         if (emailError || passwordError || passwordMatchError ){
    //           setError(emailError || passwordError || passwordMatchError)
    //   return
    //         }//|| isBlankError) {
    //           // return

    try {
      const response = await axios.post(`${API_URL}/User/UserRegister`, {
        email,
        password,
      });
      if (response.data.isSuccess === 1) {
        return response.data;
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const authContextData = {
    authState,
    registerUser,
    loginUser,
  };

  return <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
