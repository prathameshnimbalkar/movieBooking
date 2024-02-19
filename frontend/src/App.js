import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import ForgotPasswordForm from './pages/ForgotPasswordForm';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';

const App= () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />}></Route>
        <Route path='/Booking' element={<Booking />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>

        <Route path='/login' element={<LoginForm />}></Route>
       
        <Route path='/signup' element={<SignUpForm />}></Route>
       
        <Route path='/forgotpassword' element={<ForgotPasswordForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
