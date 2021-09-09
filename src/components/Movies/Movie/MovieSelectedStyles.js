import styled from 'styled-components';
import { Container, Button } from '../../../GlobalStyles';
import { Link } from 'react-router-dom';
export const SingleMovieContainer = styled(Container)`
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;
  ${Container}
`;
export const ButtonBackLink = styled(Link)`
outline: none;
text-decoration: none;
`; 
export const ButtonBack = styled(Button)`
  align-self: flex-start;
  margin-bottom: 32px;
`;

export const MovieInfo = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }
`;

export const MovieImgContainer = styled.div`
  position: relative;
`;

export const MovieImg = styled.img`
  max-height: 400px;
  width: 100%;
  border-radius: 20px;
  @media (min-width: 800px) {
    max-height: 700px;
    width: initial;
  }
`;
export const MovieContent = styled.div`
`;
export const Review = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #0077b6;
  font-size: 25px;
  color: #fff;
  border-radius: 16px 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 56px;
  font-weight: 400;
  @media (min-width: 800px) {
    font-size: 40px;
  }
`;

export const MovieFact = styled.p`
margin-top: 12px;
font-size:20px;
line-height: 1.5;
`;

export const MovieFactSpan = styled.span`
font-weight: 600;
`;
