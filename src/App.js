import './App.css';
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Router from "./router/router";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Router/>
            <Footer/>
        </div>
    );
}

export default App;
