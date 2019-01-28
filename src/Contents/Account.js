import React, { Fragment, Component } from "react";

class Card extends Component {
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
    return (
      <Fragment>
        <h2>口座</h2>
        <h3>
          現在:&nbsp;
          {this.state.sum}
        </h3>
        <input value={this.state.input} onChange={this.input} />
        <br />
        <button onClick={this.Plus}>収入</button>
        <button onClick={this.Minus}>支出</button>
      </Fragment>
    );
  }
}

export default Card;
