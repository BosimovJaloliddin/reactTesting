import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.cl};
  }
`;

export default class App extends Component {
  state = {
    light: false,
  };
  render() {
    const them = {
      bg: this.state.light ? "white" : "black",
      cl: this.state.light ? "black" : "white",
    };
    return (
      <ThemeProvider theme={them}>
        <GlobalStyle />
        <button onClick={() => this.setState({ light: !this.state.light })}>
          click
        </button>
      </ThemeProvider>
    );
  }
}
