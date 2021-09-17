import { Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import CocktailList from "./Pages/CocktailList/CocktailList";
import CocktailDetails from "./Pages/CocktailDetails/CocktailDetails";
import Error from "./Pages/Error/Error";
import FooterC from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/cocktails" component={CocktailList} />
        <Route path="/cocktails/cocktail/:id" component={CocktailDetails} />
        <Route path="/*" component={Error} />
      </Switch>
      <FooterC />
    </div>
  );
}

export default App;
