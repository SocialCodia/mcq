import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about";
import AddMcq from "./pages/add-mcq";
import HomePage from "./pages/home";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/add' element={<AddMcq />} />
      <Route path='/about' element={<AboutUs />} />
    </Routes>
  )

}

export default App;