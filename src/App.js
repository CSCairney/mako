import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./pages/MainRouter";

function App() {
  return (
    <>
      <Router>
        <MainRouter />
      </Router>
    </>
  );
}

export default App;
