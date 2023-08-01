import { HashRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home.js"
import Traveldestinations from "./pages/Traveldestinations";
import NavigationBar from "./Components/NavigationBar";
import Content from "./Components/Content";
import Login from "./pages/Login";
import timessquarehd from "./images/timessquarehd.jpg"
import Footer from "./Components/Footer.js";


function App() {
  return (
    <div className="App" >
      <Router>
        <NavigationBar></NavigationBar >

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/traveldestinations" element={<Traveldestinations />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </Router>
      {/*  <Content /> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
