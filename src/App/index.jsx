import React from "react";
import { users } from "../mock/mock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const onPlus = () => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    };
    const onMinus = () => {
      this.setState({ count: this.state.count - 1 });
      console.log(this.state.count);
    };

    return (
      <React.Fragment>
        <div>Count:{this.state.count}</div>
        <button onClick={onPlus}>+</button>
        <button onClick={onMinus}>-</button>
        {users.map((v) => (
          <h1>
            {v.id}-{v.name}={this.props.data}
          </h1>
        ))}
      </React.Fragment>
    );
  }
}

export default App;
