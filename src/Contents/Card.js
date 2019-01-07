import React, { Fragment, Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0
    };
  }
  input = () => {
    this.setState({ input: this.state.input });
  };
  Plus = () => {
    this.setState({ sum: this.state.sum + this.state.input });
  };
  Main = () => {
    this.setState({ sum: this.state.sum - this.state.input });
  };
  render() {
    return (
      <Fragment>
        <h2>現金</h2>
        <h3>
          現在:&nbsp;
          {this.state.sum}
        </h3>
        <input onChange={this.input} />
        <br />
        <button onClick={this.Plus}>収入</button>
        <button onClick={this.Main}>支出</button>
      </Fragment>
    );
  }
}

export default Card;
