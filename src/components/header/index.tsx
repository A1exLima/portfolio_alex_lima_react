import { Brand, HeaderContainer, Menu, MenuSideBar, SideBar } from './style'

import { useState } from 'react'

import arrowLeft from '../../assets/icons/arrowLeft.svg'
import arrowRight from '../../assets/icons/arrowRight.svg'
import bar from '../../assets/icons/bar.svg'
import { NavLink } from 'react-router-dom'
import { IoMenu, IoClose } from 'react-icons/io5'

const menuOptions = [
  {
    id: 1,
    name: 'Sobre',
    link: '/about',
  },
  {
    id: 2,
    name: 'Projetos',
    link: '/project',
  },
  {
    id: 3,
    name: 'Conhecimentos',
    link: '/knowledge',
  },
  {
    id: 4,
    name: 'Contato',
    link: '/contact',
  },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

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
          {menuOptions.map((option) => (
            <li key={option.id}>
              <NavLink to={option.link}>{option.name}</NavLink>
            </li>
          ))}
        </ul>
      </Menu>

      <SideBar>
        {!menuOpen ? (
          <IoMenu className="open-button" onClick={toggleMenu} />
        ) : (
          <IoClose className="close-button" onClick={toggleMenu} />
        )}

        <MenuSideBar className={`${menuOpen ? 'menu-open' : ''}`}>
          <ul>
            {menuOptions.map((option) => (
              <li key={option.id}>
                <NavLink to={option.link}>{option.name}</NavLink>
              </li>
            ))}
          </ul>
        </MenuSideBar>
      </SideBar>
    </HeaderContainer>
  )
}
