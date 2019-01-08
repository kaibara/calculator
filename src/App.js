import React, { Fragment, Component } from "react";
import Account from "./Contents/Account";
import Cache from "./Contents/Cache";
import Card from "./Contents/Card";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Cache />
        <Account />
        <Card />
      </Fragment>
    );
  }
}

export default App;
