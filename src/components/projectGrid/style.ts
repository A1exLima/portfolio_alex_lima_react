import styled from 'styled-components'

export const ProjectContainer = styled.div`
  min-height: 65rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 525px) {
    margin-top: 2rem;
  }
`

export const ProjectGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }

  .rotating {
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
    perspective: 100rem;
  }

  .rotated {
    transform: rotateY(180deg);
  }
`

export const ContainerPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`

export const NavigationButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 3.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textInUpperCase};
  font-size: 1.6rem;

  background-color: ${(props) => props.theme['blue-object']};
  cursor: pointer;

  &:disabled {
    background-color: ${(props) => props.theme['project-gray']};
    cursor: not-allowed;
  }
`
