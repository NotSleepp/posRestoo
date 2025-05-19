import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Auth, Orders} from "./pages";
import Header from "./components/shared/Header";
import BottomNav from "./components/shared/BottomNav";

function App() {
  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="/Orders" element={<Orders />} />
          </Routes>
          <BottomNav />
        </Router>
    </>
  );
}

export default App;
