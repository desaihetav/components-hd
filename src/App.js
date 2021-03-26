import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Documentation } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/docs">
          <Documentation />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
