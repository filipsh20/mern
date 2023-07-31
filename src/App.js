import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import { useSelector } from "react-redux";

function App() {

  const user = useSelector((state) => state.auth.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={user ? <Navigate to='/home' /> : <Navigate to='/login' />} />
        <Route path='/home:id' element={user ? <HomePage /> : <Navigate to='/login' />} />
        <Route path='/login' element={user ? <Navigate to='/home' /> : <LoginPage />} />
        <Route path='/register' element={user ? <Navigate to='/home' /> : <RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
