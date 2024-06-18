import styled from 'styled-components'

export const BannerContainer = styled.section`
  width: 100%;
  min-height: 60rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    max-width: 64.8rem;
    margin-top: -10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;

    > h1 {
      font-weight: 500;
      line-height: 130%;
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
      width: 82%;
      height: 8rem;
      font-weight: 500;
      line-height: 145%;
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
      background-color: ${(props) => props.theme['blue-object']};
      border-radius: 5px;

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

      transition: width 0.45s ease-in-out;

      &:hover {
        width: 36rem;
      }
    }
  }

  > figure {
    width: 45rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -10rem;

    > img {
      width: 100%;
    }
  }

  @media (max-width: 1120px) {
    > figure {
      display: none;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;

    > div {
      align-items: center;
      margin-top: -5rem;

      > h1 {
        text-align: center;
        font-size: clamp(3.5rem, 4.5vw, 4rem);
      }

      > p {
        text-align: center;
        font-size: clamp(1.6rem, 2vw, 1.8rem);
      }
    }
  }

  @media (max-width: 412px) {
    > div {
      > p {
        height: 9.5rem;
      }
    }
  }

  @media (max-width: 380px) {
    > div {
      > p {
        height: 8.6rem;
      }
    }
  }
`
