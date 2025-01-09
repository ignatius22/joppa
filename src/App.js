import "./App.css";
import { Routes, Route } from "react-router-dom";
import './assets/fonts/ClashDisplay/clash-display.css';


import { Home } from "./pages";
import { Layout } from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
