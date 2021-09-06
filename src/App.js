import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.js";
import Cart from "./Cart.js";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
      <Home />
      <Cart />
      </CartProvider>
    </>
  );
}

export default App;
