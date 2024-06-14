import styled from 'styled-components'

export const ProjectGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 1rem;

  .rotating {
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
    perspective: 100rem;
  }

  .rotated {
    transform: rotateY(180deg);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
