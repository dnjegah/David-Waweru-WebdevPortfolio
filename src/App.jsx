import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  
  return (
    <>
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          
            <main id="main-div" className="px-lg-4 pt-2">
              <Outlet />
            </main>
          
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;


