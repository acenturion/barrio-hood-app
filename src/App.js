import './App.css';
import NavBar from "./components/Navbar/NavBar";
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Stores from "./pages/Stores";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Switch>
                <Route path="/tiendas">
                    <Stores/>
                </Route>
                <Route path="/supermercado">
                    <Stores/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
