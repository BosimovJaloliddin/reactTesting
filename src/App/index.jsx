import React, { Component } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background: ${(props) => props.theme.bg};
        background: ${(props) => props.theme.cl};
    }
`;
class App extends Component {
  state = {
    ligth: false,
  };
  render() {
    const theme = {
      bg: this.state.ligth ? "white" : "black",
      cl: this.state.ligth ? "black" : "white",
    };
    const onClick = () => {
      this.setState({ ligth: !this.state.ligth });
    };
    console.log(this.state.ligth);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <button onClick={onClick}>click</button>
      </ThemeProvider>
    );
  }
}
export default App;
