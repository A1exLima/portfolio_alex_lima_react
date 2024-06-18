import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: auto;
  padding: 4rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  > div {
    display: flex;
    gap: 0.8rem;

    > p {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 1.8rem;
      font-weight: 400;
      line-height: 125%;
    }

    > span {
      color: ${(props) => props.theme['blue-text']};
      font-weight: 500;
      text-align: center;

      > a {
        font-size: 1.8rem;
      }
    }
  }

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.8rem;
    font-weight: 400;
    line-height: 125%;

    > svg {
      margin-top: 0.35rem;
      font-size: 3.2rem;
      color: ${(props) => props.theme['blue-object']};
    }
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0 0 4rem 0;
  }

  @media (max-width: 580px) {
    > span {
      display: none;
    }

    > div {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 460px) {
    > div {
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      > p:last-child {
        margin-left: 0.5rem;
      }
    }
  }
`
