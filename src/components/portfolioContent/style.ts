import styled from 'styled-components'

interface FiltersProps {
  $color: string
}

export const PortfolioContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  border: 2px solid ${(props) => props.theme['border-theme']};
  border-radius: 8px;
  padding: 4rem;
  background-color: ${(props) => props.theme['container-theme']};

  > div {
    > h2 {
      margin-left: 2rem;
      font-size: 3.5rem;
      font-weight: 500;
      user-select: none;
      color: ${(props) => props.theme.textInUpperCase};
      letter-spacing: 0.1rem;
      text-align: center;

      @media (max-width: 525px) {
        margin-bottom: 1.5rem;
      }

      > span {
        color: ${(props) => props.theme['blue-text']};
      }
    }

    .alert-card {
      position: absolute;
      top: 2rem;
      left: 2rem;
      opacity: 0;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${(props) => props.theme['alert-message']};

      @media (max-width: 380px) {
        top: 1rem;
        left: 1rem;
      }
    }

    .animate {
      opacity: 1;
      animation: appear-blink-disappear 3s ease-in-out;
    }

    @keyframes appear-blink-disappear {
      0% {
        opacity: 0;
      }
      16.66% {
        opacity: 1;
      }
      33.33% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      66.66% {
        opacity: 0;
      }
      83.33% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`

export const FilterContainer = styled.div`
  position: relative;
  height: 5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4.45rem;
  min-height: 4.45rem;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: ${(props) => props.theme['blue-object']};
  border: none;
  cursor: pointer;

  > svg {
    display: flex;
    color: ${(props) => props.theme.textInUpperCase};
    font-size: 2.45rem;
  }

  transition: filter 0.4s ease-in-out;

  &:hover {
    filter: brightness(120%);
  }

  @media (max-width: 350px) {
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.4);
  }
`

export const FilterProjects = styled.div`
  display: none;
  transform-origin: left;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => props.theme['child-container']};
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 5px;
  z-index: 1;

  @media (max-width: 350px) {
    position: absolute;
    left: 5.5rem;
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.4);
  }

  &.open {
    display: flex;
    animation: appear 0.6s forwards;
  }

  &.close {
    animation: hide 0.6s forwards;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: scaleX(0);
    }

    100% {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  @keyframes hide {
    0% {
      display: flex;
      opacity: 1;
      transform: scaleX(1);
    }

    100% {
      opacity: 0;
      transform: scaleX(0);
    }
  }
`

export const Filters = styled.span<FiltersProps>`
  cursor: pointer;
  display: flex;

  color: ${(props) =>
    props.$color === 'blue'
      ? props.theme['blue-text']
      : props.theme.textInSmallCase};

  transition: color 0.2s ease-in-out;

  &:hover {
    @media (min-width: 769px) {
      color: ${(props) => props.theme['blue-text']};
    }
  }

  > svg {
    font-size: 2.5rem;
  }
`

export const ProjectNotFound = styled.div`
  width: 100%;
  min-height: 65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    margin-top: -5rem;

    > svg {
      font-size: 10rem;
      opacity: 0.6;
      color: ${(props) => props.theme.textInSmallCase};

      animation: rotateNotFound 3s infinite alternate;

      @keyframes rotateNotFound {
        to {
          filter: brightness(120%);
          transform: rotateY(360deg);
        }
      }
    }

    > span {
      font-weight: 500;
      opacity: 0.6;
    }
  }

  @media (max-width: 768px) {
    min-height: 67.5rem;
  }
`
