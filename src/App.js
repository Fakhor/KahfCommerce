import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Shop } from "./components/Pages/Shop";
import { KahfProgram } from "./components/Pages/KahfProgram";
import { Brand } from "./components/Pages/Brand";
import { Discovery } from "./components/Pages/Discovery";

function App() {
  return (
    <>
      <Router>
        <TopNavbar />
        <Navbar />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/brand" exact component={Brand} />
            <Route path="/kahfprogram" exact component={KahfProgram} />
            <Route path="/discovery" exact component={Discovery} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
