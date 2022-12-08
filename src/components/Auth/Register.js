import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../../common/Alert';
import { AuthContext } from '../context/AuthContext';
// import { validateEmail, validatePassword, validatePasswordMatch } from '../../../../common/validate';

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    repwd: '',
  });

  const { registerUser } = useContext(AuthContext);

  const [alert, setAlert] = useState(null);

  const { username, email, password, repwd } = registerForm;

  const onChangeRegisterForm = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const registerData = await registerUser(registerForm);

      if (registerData.isSuccess === 1) {
        setAlert({
          message: 'Register Succcess',
          type: 'success',
        });
        setTimeout(() => setAlert(null), 5000);
        return;
      }
      setAlert({
        message: 'Register failury',
        type: 'error',
      });
      setTimeout(() => setAlert(null), 5000);
    } catch (error) {
      console.log(error);
      setAlert({
        message: 'Register failury',
        type: 'error',
      });
      setTimeout(() => setAlert(null), 5000);
    }
  };

  return (
    <>
      {alert !== null && <Alert alert={alert} />}
      <div className="hero min-h-screen bg-base-200 w-full">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">REGISTER</h1>
            <p className="py-6"></p>
          </div>
          <div className="card w-3/4 flex-shrink-0 sm:w-full  max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={register} method="post">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>

                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  className="input input-bordered"
                  onChange={onChangeRegisterForm}
                />

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  className="input input-bordered"
                  onChange={onChangeRegisterForm}
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
                  onChange={onChangeRegisterForm}
                />
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="repwd"
                  value={repwd}
                  className="input input-bordered"
                  onChange={onChangeRegisterForm}
                />
                <label className="label">
                  <Link to="/forget-password" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already account? Please login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
