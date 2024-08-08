import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`;

const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

function Header({ toggleTheme }) {
  return (
    <StyledHeader>
      <h1>Personal Finance Dashboard</h1>
      <ThemeToggle onClick={toggleTheme}>Toggle Theme</ThemeToggle>
    </StyledHeader>
  );
}

export default Header;
