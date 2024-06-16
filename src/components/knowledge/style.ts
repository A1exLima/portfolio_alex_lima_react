import styled from 'styled-components'

export const KnowledgeContainer = styled.section`
  width: 100%;
  min-height: 65rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;

  border: 2px solid ${(props) => props.theme['border-theme']};
  border-radius: 8px;
  padding: 4rem;

  background-color: ${(props) => props.theme['container-theme']};

  > h2 {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 500;
    user-select: none;
    color: ${(props) => props.theme.textInUpperCase};
    letter-spacing: 0.1rem;

    > span {
      color: ${(props) => props.theme['blue-text']};
    }
  }
`

export const TechnologyReading = styled.p`
  min-height: 13.5rem;
  line-height: 150%;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.textInSmallCase};

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 525px) {
    min-height: 35.5rem;
  }
`

export const TechnologyKnowledgeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;

  @media (max-width: 790px) {
    justify-content: center;
  }

  @media (max-width: 525px) {
    gap: 1.5rem;
  }

  @media (max-width: 420px) {
    gap: 1rem;
  }
`

export const TechnologyKnowledgeButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme['child-border']};
  background-color: ${(props) => props.theme['child-container']};

  width: 10rem;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border 0.3s ease-in-out;

  &:hover {
    border: 2px solid ${(props) => props.theme['blue-object']};
  }

  > svg {
    color: ${(props) => props.theme['blue-object']};
    font-size: 6.1rem;
  }

  @media (max-width: 525px) {
    width: 8rem;
    height: 8rem;

    > svg {
      font-size: 4.5rem;
    }
  }
`
