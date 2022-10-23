import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Shops from "./components/Shops/Shops";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shops />} />
        <Route path="/shop" element={<Shops />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
