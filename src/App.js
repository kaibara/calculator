import React, { Fragment, Component } from "react";
import Cache from "Cache";

class App extends Component {
  render() {
    return <Calculator />;
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0
    };
  }
  input = event => {
    this.setState({ input: event.target.value });
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
        <Cache />
        <h2>口座</h2>
        <h3>
          現在:&nbsp;
          {this.state.sum}
        </h3>
        <input onClick={() => this.state.input} />
        <br />
        <button onClick={this.Plus}>収入</button>
        <button onClick={this.Main}>支出</button>
        <h2>カード</h2>
        <h3>
          現在:&nbsp;
          {this.state.sum}
        </h3>
        <input onClick={() => this.state.input} />
        <br />
        <button onClick={this.Plus}>収入</button>
        <button onClick={this.Main}>支出</button>
      </Fragment>
    );
  }
}

export default App;
