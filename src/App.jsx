import "./SASS/styles.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

  document.title = "MarketPlus";


function App() {

  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:GroupID" element={<ItemListContainer />} />
              <Route path="/detail/:ProductID" element={<ItemDetailContainer />} />
            </Routes>  
        </BrowserRouter >

          <Footer />
      </header>
    </div>
  );
}

export default App;
