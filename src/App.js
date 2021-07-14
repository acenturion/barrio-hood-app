import './App.css';
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Router from "./router/router";
import CartProvider from "./providers/CartProvider.jsx";
import UserProvider from "./providers/UserProvider.jsx";

function App() {

  return (
    <div className="App">
      <CartProvider>
        <UserProvider>
          <NavBar/>
          <Router/>
          <Footer/>
        </UserProvider>
      </CartProvider>
    </div>
  );
}

export default App;
