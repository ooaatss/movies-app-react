import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #0096C7;
    color: #333;
}
`;

export default GlobalStyles;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }

  @media (min-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  background-color: #0077b6;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: #fff;
    ${(props) =>
      props.onHover ? `transform: translateY(-0.5rem) scale(1.02)` : ''};
    color: #0077b6;
  }
`;

export const OutlineButton = styled.button`
  border-radius: 20px;
  border: 2px solid #0077b6;
  color: #0077b6;
  outline: none;
  padding: 10px 20px;
  font-size: 18px;
  transition: all 0.5s ease;
  background-color: #fff;

  &:hover {
    background-color: #0077b6;
    color: #fff;
    border: none;
    ${(props) =>
      props.onHover ? `transform: translateY(-0.5rem) scale(1.02)` : ''};
  }
`;
