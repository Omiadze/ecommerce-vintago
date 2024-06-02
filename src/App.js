import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Products";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [clickedItems, setClickedItems] = useState([]);

  return (
    <div className="App">
      <Nav numberOfItems={numberOfItems} setNumberOfItems={setNumberOfItems} />
      <main>
        <Outlet
          context={{
            numberOfItems,
            setNumberOfItems,
            clickedItems,
            setClickedItems,
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
