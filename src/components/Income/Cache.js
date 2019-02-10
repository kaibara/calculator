import React, { Fragment, Component } from "react";

class Cache extends Component {
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
      margin: "auto"
    };
    return (
      <Fragment>
        <div className="cache" style={styles}>
          <h2 >現金:&nbsp;{this.state.sum}</h2>
          <input value={this.state.input} onChange={this.input} />
          <br />
          <button onClick={this.Plus}>収入</button>
          <button onClick={this.Minus}>支出</button>
        </div>
      </Fragment>
    );
  }
}

export default Cache;
