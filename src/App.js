import React, { Fragment, Component } from "react";
import Account from "./Contents/Account";
import Cache from "./Contents/Cache";
import Card from "./Contents/Card";
import Auth from "./Firebase/Auth"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Auth />
        <Cache />
        <Account />
        <Card />
      </Fragment>
    );
  }
}

export default App;
