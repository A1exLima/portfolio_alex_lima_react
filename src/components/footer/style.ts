import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: auto;
  padding: 4rem 0;

  //background: ${(props) => props.theme['container-theme']};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  > p {
    display: flex;
    gap: 0.5rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 125%;

    > span {
      color: ${(props) => props.theme['blue-text']};
      font-weight: 500;
    }
  }

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 125%;

    > svg {
      margin-top: 0.35rem;
      font-size: 3.2rem;
      color: ${(props) => props.theme['blue-object']};
    }
  }
`
