import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const HeroContainer = styled.div`
  height: 500px;

  @media  (max-width: 1600px) {
    height: 85vh;
  }
`;

export const HeroContent = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fffefe;
  @media (max-width: 375px) {
    text-align: start;
    height: 80%;
  }
`;

export const HeroContentText = styled.div`
  width: 50%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media  (max-width: 600px) {
    width: 80%;
  }
  @media  (max-width: 375px) {
    position: absolute;
    align-items: flex-start;
  }
`;

export const HeroTitle = styled.h1`
  font-size:60px;
  font-weight: 500;
`;

export const HeroTitleText = styled.span`
  display: block;
`;

export const HeroText = styled.h3`
  font-size: 30px;
  font-weight: 400;
  padding: 2.5rem 2rem;
  @media  (max-width: 375px) {
    padding: 1.5rem 0;
  }
`;
export const HeroBtn = styled(Link)`
  text-decoration: none;
  outline: none;
  border: none;
`;
