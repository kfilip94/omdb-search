import MoviesPage from './pages/MoviesPage';
import styled, { createGlobalStyle } from "styled-components";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  text-align: center;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
  max-width: 600px;
`;

const GlobalStyle = createGlobalStyle`
  button, input {
    border: none;
    user-select: none;
    outline: none;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  * {
    font-family: sans-serif;
  }
`;

const App = () => {
  return (
    <AppStyled>
      <GlobalStyle />
      <MoviesPage />
    </AppStyled>
  );
}

export default App;
