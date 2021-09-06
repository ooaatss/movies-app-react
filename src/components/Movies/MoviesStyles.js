import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const MovieContainer = styled(Container)`
  padding: 32px 16px;
  ${Container}
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  
`;
export const InputSearch = styled.input`
  width: 100%;
  margin-right: 16px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 0 16px;
  font-size: 16px;
  outline: none;
`;
export const MovieGrid = styled.div`
  display: grid;
  column-gap: 32px;
  row-gap: 64px;
  grid-template-columns: 1fr;
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
export const Movie = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const MovieImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
export const Review = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #0077b6;
  color: #fff;
  border-radius: 16px 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;