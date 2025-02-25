import "./App.css";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer";
import MessageBar from "./components/MessageBar";

function App() {
  return (
    <>
      <TopBar />
      <MainContent />
      <MessageBar />
      <Footer />
    </>
  );
}

export default App;
