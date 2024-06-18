import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: fit-content;
  max-width: 100%;
  padding: 4rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background: ${(props) => props.theme['background-theme']};

  @media (max-width: 768px) {
    padding: 4rem 0 3rem 0;
  }
`

export const Brand = styled(Link)`
  border-bottom: 1px solid none;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  cursor: pointer;

  > span {
    font-size: 3rem;
    font-weight: 600;
    line-height: 160%;
    color: ${(props) => props.theme.textInUpperCase};
  }

  :nth-child(4) {
    margin: 0 0.1rem 0.2rem 0.2rem;
  }
`

export const Menu = styled.nav`
  > ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 4rem;

    > li {
      position: relative;
      display: flex;
      align-items: center;
      height: 4rem;
      font-size: 1.8rem;
      font-weight: 500;

      transition: all 0.3s ease-in-out 0s;

      &:hover {
        color: ${(props) => props.theme['blue-text']};
      }

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 2px;
        background: ${(props) => props.theme['border-gradient']};

        transform-origin: left;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;

        -webkit-transform-origin: left;
        -webkit-transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
      }

      &:hover:before {
        transform: scaleX(1);
        -webkit-transform: scaleX(1);
      }

      > a {
        &.active {
          color: ${(props) => props.theme['blue-text']};
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const SideBar = styled.nav`
  display: none;

  > svg {
    display: flex;
    font-size: 4.5rem;
    color: ${(props) => props.theme.textInUpperCase};
    cursor: pointer;

    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme['blue-text']};
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`
