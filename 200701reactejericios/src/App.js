import React from "react";
import "./styles.css";
import Home from "./Home";
import OtroComp from "./OtroComp";
import Frutas from "./Frutas";

export default function App() {
  return (
    <div className="App">
      <Home />
      <OtroComp nombre="Jacobo!" />
      <Frutas frutas={["Fresa", "Sandia", "Naranja"]} />{" "}
    </div>
  );
}
