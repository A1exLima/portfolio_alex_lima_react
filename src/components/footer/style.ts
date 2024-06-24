import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: auto;
  padding: 0 0 3rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  white-space: nowrap;

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
    justify-content: center;
    gap: 0.5rem;

    font-size: 1.8rem;
    font-weight: 400;
    line-height: 125%;

    > img {
      width: 13rem;
      margin-bottom: 0.75rem;
    }
  }

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 0.5rem;

    > div {
      > span {
        display: none;
      }

      > p {
      }
    }

    > span {
      > img {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 380px) {
    > div {
      > span {
        display: none;
      }

      > p {
        font-size: clamp(1.2rem, 4vw, 1.8rem);
      }
    }
  }
`
