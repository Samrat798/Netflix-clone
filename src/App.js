import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import BrowsePage from "./pages/BrowsePage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<BrowsePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
