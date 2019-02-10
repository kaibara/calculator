import React, { Fragment, Component } from "react";
import Account from "./Account";
import Cache from "./Cache";

class Income extends Component {
  render() {
    const styles={
      display: "flex",
      width: "400px"
    };
    const margin={
      marginBottom: "initial"
    };
    return (
      <Fragment>
        <h2 style={margin}>今月の現預金:&nbsp;</h2>
        <div className="items" style={styles}>
          <Cache />
          <Account />
        </div>
      </Fragment>
    );
  }
}

export default Income;
