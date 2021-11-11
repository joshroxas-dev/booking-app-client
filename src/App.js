import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Actions/Add";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
