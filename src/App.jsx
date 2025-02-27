import "./App.css";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";

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

        <MessageBar />
      </BrowserRouter>
    </>
  );
}

export default App;
