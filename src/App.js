import logo from "./logo.svg";
import "./App.css";
import First from "./components/first";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderSummary from "./components/orderSummary/OrderSummary";
import AddressDetails from "./components/checkout/AddressDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/ordersummary" element={<OrderSummary />} />
          <Route path="/addressdetails" element={<AddressDetails />} />
        </Routes>
      </Router>
      {/* <First /> */}
    </>
  );
}

export default App;
