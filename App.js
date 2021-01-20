import logo from "./logo.svg";
import "./App.css";
import Thepay from "./Payment/Thepay";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paynow from "./Payment/Paynow";
import Message from "./Message";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Thepay} />
          <Route path="/paynow" exact component={Paynow} />
          <Route path="/thanks" exact component={Message} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
