import Header from "./components/header/Header";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import About from "./pages/About";
import Career from "./pages/Career";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [navLocation, setNavLocation] = useState([new Array().fill(false)]);

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;

    case "/Menu":
      component = <Menu />;
      break;

    case "/Order":
      component = <Order />;
      break;

    case "/About":
      component = <About />;
      break;

    case "/Career":
      component = <Career />;
      break;

    case "/Cart":
      component = <Cart />;
      break;
  }

  return (
    <>
      <Header navLocation={navLocation} />

      <div className="comp-container">{component}</div>
    </>
  );
}
export default App;
