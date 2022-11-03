import { useMobile } from "../../utils/useMobile";
import Header from "../Header/";
import Home from "../Home/";
import Products from "../Products/";
import Showcase from "../Showcase/";
import Quote from "../Quote/";
import "./App.css";

function App() {
  const isMobile = useMobile();

  return (
    <div className="App">
      <Header isMobile={isMobile} />
      <Home isMobile={isMobile} />
      <Products isMobile={isMobile} />
      <Showcase isMobile={isMobile} />
      <Quote isMobile={isMobile} />
    </div>
  );
}

export default App;
