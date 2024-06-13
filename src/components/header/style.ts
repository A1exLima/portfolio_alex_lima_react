import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  height: 13rem;
  padding: 4rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`

export const Brand = styled(Link)`
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
`
