import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PageRouter from "./pages/PageRouter";
import useHorizontalScroll from "./hooks/useHorizontalScroll";

function App() {
    useHorizontalScroll();

  return (
    <>
      <Router>
        <PageRouter />
      </Router>
    </>
  );
}

export default App;
