import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const FooterText = styled.p`
  color: #fff;
  margin: 0;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const Heart = styled.span`
  color: #f00;
`;
