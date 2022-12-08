import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthContextProvider from './components/context/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
