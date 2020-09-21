import React from "react";
import ReactDOM from "react-dom";

class Ex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: parseInt(this.props.count) };
  }
  startCount = () => {
    setInterval(() => {
      this.setState({
        count: this.state.count + parseInt(this.props.increment)
      });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.startCount}>Click to start counter</button>
      </div>
    );
  }
}
ReactDOM.render(
  <Ex count="10" increment="100" />,
  document.getElementById("root")
);
