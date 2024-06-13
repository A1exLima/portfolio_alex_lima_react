import { Brand, HeaderContainer, Menu } from './style'

import arrowLeft from '../../assets/icons/arrowLeft.svg'
import arrowRight from '../../assets/icons/arrowRight.svg'
import bar from '../../assets/icons/bar.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Brand to="/">
        <span>ALEX</span>
        <img src={arrowLeft} alt="" />
        <span>LIMA</span>
        <img src={bar} alt="" />
        <img src={arrowRight} alt="" />
      </Brand>

      <Menu>
        <ul>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/project">projetos</NavLink>
          </li>
          <li>
            <NavLink to="/knowledge">Conhecimentos</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contato</NavLink>
          </li>
        </ul>
      </Menu>
    </HeaderContainer>
  )
}
