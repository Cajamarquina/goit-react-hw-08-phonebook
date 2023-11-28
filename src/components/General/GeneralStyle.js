import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(
    0deg,
    rgb(217, 175, 217) 0%,
    rgb(151, 217, 225) 50%,
    rgb(255, 255, 255) 100%
  ) fixed;
  
  background-size: 100%;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
list-style: none;
padding: 0;
margin: 0;
}

h1 {
  margin: 0;
  text-align: center;
}

p {
  margin: 0;
}
`;