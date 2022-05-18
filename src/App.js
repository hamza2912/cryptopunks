import './App.css';
import './firebase';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Emaillist from './pages/emaillist';

function App() {
  return (
    <BrowserRouter>

    <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/emaillist" component={Emaillist} />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
