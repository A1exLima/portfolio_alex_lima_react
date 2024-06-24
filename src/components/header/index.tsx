import {
  Brand,
  ContainerBrand,
  HeaderContainer,
  Menu,
  MenuSideBar,
  SideBar,
} from './style'

import { useState } from 'react'
import { Link } from 'react-scroll'

import { Link as LinkUrl } from 'react-router-dom'

import arrowLeft from '../../assets/icons/arrowLeft.svg'
import arrowRight from '../../assets/icons/arrowRight.svg'
import bar from '../../assets/icons/bar.svg'
import { IoMenu, IoClose, IoShareSocialSharp } from 'react-icons/io5'

const menuOptions = [
  {
    id: 1,
    name: 'Home',
    link: 'home',
  },
  {
    id: 2,
    name: 'Sobre',
    link: 'about',
  },
  {
    id: 3,
    name: 'Projetos',
    link: 'projects',
  },
  {
    id: 4,
    name: 'Conhecimentos',
    link: 'knowledge',
  },
  {
    id: 5,
    name: 'Contato',
    link: 'contact',
  },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const waitAndCloseMenu = () => {
    setTimeout(() => {
      setMenuOpen(false)
    }, 250)
  }

  return (
    <HeaderContainer>
      <ContainerBrand>
        <Brand
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-135}
          duration={1000}
          onClick={waitAndCloseMenu}
        >
          <span>ALEX</span>
          <img src={arrowLeft} alt="" />
          <span>CODE</span>
          <img src={bar} alt="" />
          <img src={arrowRight} alt="" />
        </Brand>

        <LinkUrl
          to="https://wa.me/?text=https://alexcode.com.br/"
          target="_blank"
          title="Clique aqui para compartilhar"
        >
          <IoShareSocialSharp />
        </LinkUrl>
      </ContainerBrand>

      <Menu>
        <ul>
          {menuOptions.map(
            (option) =>
              option.id !== 1 && (
                <Link
                  key={option.id}
                  activeClass="active"
                  to={option.link}
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1500}
                  onClick={waitAndCloseMenu}
                >
                  <li>{option.name}</li>
                </Link>
              ),
          )}
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
              <Link
                key={option.id}
                activeClass="active"
                to={option.link}
                spy={true}
                smooth={true}
                offset={-95}
                duration={1000}
                onClick={waitAndCloseMenu}
              >
                <li>{option.name}</li>
              </Link>
            ))}
          </ul>
        </MenuSideBar>
      </SideBar>
    </HeaderContainer>
  )
}
