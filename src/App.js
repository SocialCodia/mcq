import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about";
import AddMcq from "./pages/add-mcq";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import UsersPage from "./pages/users";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Protected><HomePage /></Protected>}></Route>;
      <Route path='/add' element={<Protected><AddMcq /></Protected>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/about' element={<Protected><AboutUs /></Protected>} />
      <Route path='/users' element={<Protected><UsersPage /></Protected>} />
    </Routes>
  )

}

const Protected = ({ children }) => {
  let { isAuth } = useSelector(state => state.userSlice);
  return isAuth ? children : <Navigate to="/login" />;
}

export default App;