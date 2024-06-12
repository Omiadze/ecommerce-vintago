import "./App.css";

import Nav from "./Components/Nav";

import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [clickedItems, setClickedItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

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
            subtotal,
            setSubtotal,
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
