import React, { Fragment, Component } from "react";

class Spending extends Component {
  state = { sum: 0, input: 0 };
  input = event => {
    this.setState({ input: Number(event.target.value) });
    console.log(this.state.input);
  };
  Plus = () => {
    this.setState(prevState => ({ sum: this.state.sum + this.state.input }));
  };
  Minus = () => {
    this.setState(prevState => ({ sum: this.state.sum - this.state.input }));
  };
  render() {
    const styles={
      margin: "14.57px"
    };
    return (
      <Fragment>
        <h2>今月の支出:&nbsp;{this.state.sum}</h2>
        <div className="spending" style={styles}>
          <input value={this.state.input} onChange={this.input} />
          <br />
          <button onClick={this.Plus}>収入</button>
          <button onClick={this.Minus}>支出</button>
        </div>
      </Fragment>
    );
  }
}

export default Spending;
