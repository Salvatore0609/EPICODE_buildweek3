import "./App.css";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import MessageBar from "./components/MessageBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/main-content" element={<MainContent />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
        <MessageBar />
      </BrowserRouter>
    </>
  );
}

export default App;
