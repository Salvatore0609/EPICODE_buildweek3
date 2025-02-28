import "./App.css";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";

import MessageBar from "./components/MessageBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import JobOffersPage from "./components/JobOffersPage";
import JobDetailsPage from "./components/JobDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/main-content" element={<MainContent />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/job-offers" element={<JobOffersPage />} />
          <Route path="/job-details/:id" element={<JobDetailsPage />} />
        </Routes>

        <MessageBar />
      </BrowserRouter>
    </>
  );
}

export default App;
