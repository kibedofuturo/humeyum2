import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";

export default function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SingUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}
