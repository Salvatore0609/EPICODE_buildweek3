import "./App.css";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import MessageBar from "./components/MessageBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <MainContent />
        <Footer />
        <MessageBar />
      </BrowserRouter>
    </>
  );
}

export default App;
