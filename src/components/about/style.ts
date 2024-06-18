import styled from 'styled-components'

export const AboutContainer = styled.section`
  width: 100%;
  height: 65rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  border: 2px solid ${(props) => props.theme['border-theme']};
  border-radius: 8px;
  padding: 4rem;

  background-color: ${(props) => props.theme['container-theme']};

  > figure {
    min-width: 51.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      margin-left: 1rem;
      width: 95%;
      height: 100%;
      object-fit: contain;
      filter: drop-shadow(
        1px 2px 5px ${(props) => props.theme['child-border']}
      );
    }

    animation: oscillation 6s ease-in-out infinite;

    @keyframes oscillation {
      0%,
      100% {
        filter: brightness(110%);
      }
      50% {
        filter: brightness(125%);
      }
    }
  }

  > div {
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

    > div:nth-child(1) {
      > h2 {
        line-height: 160%;
        letter-spacing: 0.02rem;
        font-size: 2.5rem;
        font-weight: 500;
        color: ${(props) => props.theme['blue-text']};
        padding-bottom: 1.8rem;
      }

      > h3 {
        line-height: 100%;
        font-size: 4rem;
        font-weight: 600;
        color: ${(props) => props.theme.textInUpperCase};
        padding-bottom: 0.6rem;
      }

      > h4 {
        line-height: 160%;
        letter-spacing: 0.15rem;
        font-size: 2.2rem;
        font-weight: 400;
        color: ${(props) => props.theme.textInUpperCase};
        padding-bottom: 1.3rem;
      }

      > p {
        line-height: 160%;
        letter-spacing: 0.1rem;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${(props) => props.theme.textInSmallCase};
      }
    }

    > div:nth-child(2) {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      padding-top: 2rem;
    }
  }

  @media (max-width: 1120px) {
    flex-direction: column;
    height: fit-content;

    > figure {
      width: 100%;
      height: 45rem;
    }

    > div {
      > div:nth-child(1) {
        > h2 {
          padding-bottom: 1rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    > div {
      > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        align-items: center;

        > h2 {
          padding-bottom: 0.8rem;
        }

        > p {
          text-align: center;
          line-height: 140%;
        }
      }

      > div:nth-child(2) {
        justify-content: center;
      }
    }
  }

  @media (max-width: 540px) {
    > figure {
      min-width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 395px) {
    > div {
      > div:nth-child(2) {
        gap: 1rem;
      }
    }
  }
`

export const SocialNetworkContainer = styled.div`
  width: 7rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['background-theme']};
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme['border-theme']};

  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 2px solid ${(props) => props.theme['blue-object']};
  }

  > a > svg {
    font-size: 3.5rem;
    color: ${(props) => props.theme['blue-object']};
  }
`
