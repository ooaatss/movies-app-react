import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyles';
export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: #0077b6;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 400;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

export const MenuIcon = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? '0' : '-100%')};
    background-color: #0096c7;
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;
  @media (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;
export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.08);
  }
  &:active {
    background-color: #0077b6;
    color: #fff;
  }
  @media  (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;
