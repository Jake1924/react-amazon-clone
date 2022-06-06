import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header /> 
                <Home/>
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <Header /> <h1>Login or SignUp 🚀</h1>
              </>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header /> <h1>Checkout</h1>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
