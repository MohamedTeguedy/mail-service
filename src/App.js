import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductsTable from "./components/ProductsTable";
import Signup from "./components/Signup";
import Products from "./components/Products";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="add_product" element={<AddProduct />} />
          <Route path="add_product/:id" element={<AddProduct />} />
          <Route path="product_table" element={<ProductsTable />} />
          <Route path="products" element={<Products />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
