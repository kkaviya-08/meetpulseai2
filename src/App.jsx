import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* Background Effects */}

        <div className="blur blur1"></div>
        <div className="blur blur2"></div>
        <div className="blur blur3"></div>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;