import styled from 'styled-components'

export const BannerContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    max-width: 65.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
      font-weight: 500;
      line-height: 125%;
      padding-bottom: 4rem;
      font-size: 4rem;
      color: ${(props) => props.theme.textInUpperCase};

      > span {
        padding-left: 0.8rem;
        color: ${(props) => props.theme['blue-text']};
      }

      position: relative;
      animation: banner_title_animation 1s ease-in-out;

      @keyframes banner_title_animation {
        0% {
          opacity: 0;
          top: -2rem;
        }

        100% {
          opacity: 1;
          top: 0rem;
        }
      }
    }

    > p {
      height: 4.6rem;
      font-weight: 500;
      line-height: 125%;
      font-size: 1.8rem;
      color: ${(props) => props.theme.textInSmallCase};

      > span {
        color: ${(props) => props.theme['blue-text']};
      }
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      width: 33rem;
      height: 6rem;
      margin-top: 4rem;
      background-color: ${(props) => props.theme['blue-object']};
      border-radius: 0.8rem;

      > span {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 125%;
        color: ${(props) => props.theme.textInUpperCase};
        padding-top: 0.2rem;
      }

      > svg {
        color: ${(props) => props.theme.textInUpperCase};
        font-size: 3rem;
      }

      transition: width 0.35s ease-in-out;

      &:hover {
        width: 36rem;
      }
    }

    @media (max-width: 768px) {
      align-items: center;

      > h1 {
        text-align: center;
        font-size: clamp(3.5rem, 4.5vw, 4rem);
      }

      > p {
        text-align: center;
        font-size: clamp(1.6rem, 2vw, 1.8rem);
      }
    }

    @media (max-width: 545px) {
      > p {
        height: 6.6rem;
      }
    }

    @media (max-width: 380px) {
      > p {
        height: 8.6rem;
      }
    }
  }

  > figure {
    width: 45rem;
    height: 43rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 100%;
    }

    @media (max-width: 1120px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: start;
  }
`
