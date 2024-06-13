import styled from 'styled-components'

interface FiltersProps {
  $color: string
}

export const RepositoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  border: 2px solid ${(props) => props.theme['border-theme']};
  border-radius: 8px;
  padding: 4rem;
  background-color: ${(props) => props.theme['container-theme']};

  @media (max-width: 525px) {
    gap: 1.7rem;
  }

  > h2 {
    margin-left: 2rem;
    font-size: 3.5rem;
    font-weight: 500;
    user-select: none;
    color: ${(props) => props.theme.textInUpperCase};
    letter-spacing: 0.1rem;
    text-align: center;

    > span {
      color: ${(props) => props.theme['blue-text']};
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
    display: flex;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 10rem 0 15rem 0;

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
`
