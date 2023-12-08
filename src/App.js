import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/Productpage";
import Cart from "./pages/Cart";
import {Routes,Route} from "react-router-dom"






function App() {
  return (
    <div className="App">
    <Routes>
      
      <Route exact path="*" element={<Home/>}/>
      <Route exact path="/Register" element={<Register/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="/Productpage" element={<ProductPage/>}/>
      <Route exact path="/Cart" element={<Cart/>}/>
      </Routes>   
   
    </div>
  );
}

export default App;
