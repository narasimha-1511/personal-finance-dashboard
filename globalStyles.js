import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
  }

  .App {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    width: 100%;
    margin-bottom: 20px;
  }

  .full-width {
    width: 100%;
  }

  .forms {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .forms > * {
    flex: 1 1 300px;
    margin: 10px;
  }

  .lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .lists > * {
    flex: 1 1 300px;
    margin: 10px;
  }

  .charts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .charts > * {
    flex: 1 1 100%;
    margin: 10px;
  }

  @media (max-width: 768px) {
    .forms, .lists, .charts {
      flex-direction: column;
    }

    .forms > *, .lists > *, .charts > * {
      flex: 1 1 100%;
    }
  }
`;
