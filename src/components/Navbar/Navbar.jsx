import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Menu,
  MenuIcon,
  MenuItem,
  MenuLink,
} from './NavbarStyles';
const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Rexty Movie Searcher</NavLogo>
          <MenuIcon onClick={handleClick}>
            {click ? <BiX /> : <BiMenu />}
          </MenuIcon>

          <Menu onClick={handleClick} click={click}>
            <MenuItem>
              <MenuLink>Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink>About</MenuLink>
            </MenuItem>
          </Menu>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default NavBar;
