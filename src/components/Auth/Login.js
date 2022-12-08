import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../../common/Alert';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [alert, setAlert] = useState(null);

  const { loginUser } = useContext(AuthContext);

  const { email, password } = loginForm;

  const onChangeLoginForm = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();

    try {
      const registerData = await loginUser(loginForm);

      if (registerData.isSuccess === 1) {
        navigate('/');
        return;
      } else if (registerData.isSuccess === 0) {
        setAlert({
          message: 'Password is incorrect',
          type: 'success',
        });
        setTimeout(() => setAlert(null), 5000);
        return;
      } else {
        setAlert({
          message: 'Login failury',
          type: 'error',
        });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
      setAlert({
        message: 'Login failury',
        type: 'error',
      });
      setTimeout(() => setAlert(null), 5000);
    }
  };

  return (
    <>
      <div>{alert !== null && <Alert alert={alert} />}</div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">LOGIN</h1>
            <p className="py-6"></p>
          </div>
          <div className="card flex-shrink-0 sm:w-full  max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={login} method="post">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  className="input input-bordered"
                  onChange={onChangeLoginForm}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  className="input input-bordered"
                  onChange={onChangeLoginForm}
                />

                <label className="label">
                  <Link to="/register" className="label-text-alt link link-hover">
                    Not have account ? Please register!
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
