import React, { Fragment, Component } from "react"
import Income from "./components/Income/Income"
import Spending from "./components/Spending/Spending"
import Auth from "./components/Firebase/Auth"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Auth />
        <Income />
        <Spending />
      </Fragment>
    );
  }
}

export default App;
