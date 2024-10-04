import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PageRouter from "./pages/PageRouter";

function App() {
  return (
    <>
      <Router>
        <PageRouter />
      </Router>
    </>
  );
}

export default App;
