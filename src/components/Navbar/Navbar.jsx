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
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);

  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            Rexty Movie Searcher
          </NavLogo>
          <MenuIcon onClick={handleClick}>
            {click ? <BiX /> : <BiMenu />}
          </MenuIcon>

          <Menu onClick={handleClick} click={click}>
            <MenuItem>
              <MenuLink >Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink >About</MenuLink>
            </MenuItem>
          </Menu>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default NavBar;
