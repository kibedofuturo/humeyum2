import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
  
  import Home from "../pages/Home";
  import NotFound from "../pages/NotFound";
  import GeralRecipes from "../pages/GeralRecipes";
  import Login from "../pages/Login";
  
  
  
  export default function PrivateRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/receitas" element={<GeralRecipes />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
  