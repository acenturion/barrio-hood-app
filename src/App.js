import './App.css';
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Router from "./router/router";
import CartProvider from "./providers/CartProvider";

function App() {

    return (
        <div className="App">
            <CartProvider>
                <NavBar/>
                <Router/>
                <Footer/>
            </CartProvider>
        </div>
    );
}

export default App;
