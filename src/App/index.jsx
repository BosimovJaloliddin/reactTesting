import React from "react";
import { users } from "../mock/mock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: users,
      count: 0,
      login: "",
      surname: "",
    };
  }
  render() {
    const { data, count, login, surname } = this.state;
    const onPlus = () => {
      this.setState({ count: count + 1 });
    };
    const onMinus = () => {
      this.setState({ count: count - 1 });
    };

    const onChange = ({ target: { value, name } }) => {
      this.setState({ [name]: value });
    };

    const addUser = () => {
      let res = [
        ...data,
        {
          id: data.length + 1,
          name: login,
          urername: surname,
        },
      ];
      this.setState({ data: res, login: "", surname: "" });
    };
    const onDelete = (id) => {
      let res = data.filter((v) => v.id !== id);
      this.setState({ data: res });
    };
    return (
      <React.Fragment>
        <div>Count:{count}</div>
        <button onClick={onPlus}>+</button>
        <button onClick={onMinus}>-</button>
        <hr />
        <h1>Name:{login}</h1>
        <h1>Surname:{surname}</h1>
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
        <hr style={{ margin: "2rem 0" }} />
        {data.map((v) => (
          <h1>
            {v.id}-{v.name}={v.phone}{" "}
            <button onClick={() => onDelete(v.id)}>dalete</button>
          </h1>
        ))}
        <input
          value={login}
          name="login"
          onChange={onChange}
          type="text"
          placeholder="name"
        />
        <input
          value={surname}
          name="surname"
          onChange={onChange}
          type="text"
          placeholder="name"
        />
        <button onClick={addUser}>Add</button>
        <hr style={{ margin: "2rem 0" }} />
      </React.Fragment>
    );
  }
}

export default App;
