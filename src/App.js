import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shipment from "./components/Shipment/Shipment";
import Shops from "./components/Shops/Shops";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shops />} />
        <Route path="/shop" element={<Shops />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
