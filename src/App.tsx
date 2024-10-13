import "./App.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <div className="console">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
