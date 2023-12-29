import { createGlobalStyle } from "styled-components";
import Javascript from "./pages/Javascript";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100%;
  }
`

export default function App() {
  return (
    <>
    <GlobalStyle />
    <Javascript />
    </>
  );
}
