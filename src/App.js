import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home/Home";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ProductsTable from "./components/views/ProductsTable/ProductsTable";
import ProductCreate from "./components/views/ProductCreate/ProductCreate";
import ProductEdit from "./components/views/ProductEdit/ProductEdit";
import Error404 from "./components/views/Error404/Error404";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product/table" element={<ProductsTable />}/>
            <Route path="/product/create" element={<ProductCreate/>}/>
            <Route path="/product/edit" element={<ProductEdit/>}/>
            <Route path="/*" element={<Error404/>}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
        
    </div>
  );
}

export default App;
