import "./App.css";
import GetStarted from "./components/GetStarted";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/register" element={<RegisterForm />}></Route>
     
      <Route path="/Home" element={<Home />}></Route>
    </Routes>
    
  );
}

export default App;
