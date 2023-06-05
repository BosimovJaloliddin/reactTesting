import React from "react";
import { users } from "../mock/mock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      login: "",
      surname: "",
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

    const onChange = ({ target: { value, name } }) => {
      this.setState({ name: (this.state[name] = value) });
    };

    return (
      <React.Fragment>
        <div>Count:{this.state.count}</div>
        <button onClick={onPlus}>+</button>
        <button onClick={onMinus}>-</button>
        <hr />
        <h1>Name:{this.state.login}</h1>
        <h1>Surname:{this.state.surname}</h1>
        <input
          name="login"
          onChange={onChange}
          type="text"
          placeholder="login"
        />
        <input
          name="surname"
          onChange={onChange}
          type="text"
          placeholder="surname"
        />
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
