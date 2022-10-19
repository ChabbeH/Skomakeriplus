import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import HeaderImage from "../src/images/butik.jpg";

import Home from "./Pages/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Hero image={HeaderImage} />
      <Home />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
