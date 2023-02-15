import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Pgaes/HeaderFlag/Auth";
import WithoutAuth from "./Pgaes/HeaderFlag/WithoutAuth";
import WebEditor from "./Pgaes/Editor/WebEditor";
import Login from "./Pgaes/Login/Login";
import Signup from "./Pgaes/Signup/Signup";
import Home from "./Pgaes/Home/Home";
import FrontPage from "./Pgaes/FrontPage/FrontPage";
import NotFound from "./Pgaes/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutAuth />}>
            <Route path="/" element={<FrontPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<Auth />}>
            <Route path="/editor" element={<WebEditor />} />
            <Route path="/404" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
