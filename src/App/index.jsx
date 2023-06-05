import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.cl};
    }
`;
class Test extends React.Component {
  state = {
    light: false,
  };
  render() {
    const theme = {
      bg: this.state.light ? "white" : "black",
      cl: this.state.light ? "black" : "white",
    };
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <button onClick={() => this.setState({ light: !this.state.light })}>
            onClick
          </button>
        </ThemeProvider>
      </>
    );
  }
}
export default Test;
