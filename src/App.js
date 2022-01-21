import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./Shared/Footer/Footer";
import NavBar from "./Shared/NavBar/NavBar";
import TopBar from "./Shared/TopBar/TopBar";

function App() {
  return (
    <div className="">
      <TopBar></TopBar>
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
