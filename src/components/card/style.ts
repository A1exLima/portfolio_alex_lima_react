import styled from 'styled-components'

import { BASE_COLORS } from '../../registrationProjectsAndTechnologies/projectRegistration'

interface CardContainerProps {
  $color: keyof typeof BASE_COLORS
  $background: string
}

export const CardContainer = styled.div<CardContainerProps>`
  cursor: pointer;
  min-height: 32.5rem;
  background-color: ${(props) => props.theme['child-container']};
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);

  .front,
  .back {
    border-radius: 5px;
    border: 1px solid ${({ theme, $color }) => theme[BASE_COLORS[$color]]};
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .front {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5rem;

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > p:first-child {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${(props) => props.theme.textInSmallCase};
        margin-bottom: -0.8rem;
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        @media (max-width: 820px) {
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 768px) {
          flex-direction: row;
          align-items: center;
        }

        @media (max-width: 385px) {
          flex-direction: column;
          align-items: flex-start;
        }

        > h2 {
          font-size: clamp(1.9rem, 2vw, 2.4rem);
          font-weight: 500;
          line-height: 160%;
          user-select: none;
          color: ${({ theme, $color }) => theme[BASE_COLORS[$color]]};

          @media (max-width: 768px) {
            font-size: 2.4rem;
          }
        }

        > div {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.5rem;

          > a {
            display: flex;

            > svg {
              font-size: 2.25rem;
              color: ${(props) => props.theme.textInSmallCase};
            }

            transition: filter 0.3s ease-in-out;

            &:hover {
              filter: brightness(150%);
            }
          }

          > svg {
            margin-right: 0.2rem;
            font-size: 2.5rem;
            color: ${(props) => props.theme.textInSmallCase};

            transition: filter 0.3s ease-in-out;

            &:hover {
              filter: brightness(150%);
            }
          }
        }
      }

      > p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
        user-select: none;
        font-size: clamp(1.5rem, 1.5vw, 1.8rem);

        font-weight: 400;
        line-height: 140%;
        color: ${(props) => props.theme.textInSmallCase};

        margin-top: 0.5rem;

        @media (max-width: 768px) {
          font-size: 1.8rem;
        }
      }
    }

    > div:nth-child(2) {
      height: fit-content;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;

      > a {
        opacity: 0.85;
        user-select: none;
        white-space: nowrap;
        font-size: clamp(1.8rem, 1.7vw, 2.2rem);
        font-weight: 500;
        color: ${({ theme, $color }) => theme[BASE_COLORS[$color]]};

        transition:
          opacity 0.4s ease-in-out,
          filter 0.4s ease-in-out;

        &:hover {
          opacity: 1;
          filter: brightness(125%);
        }

        @media (max-width: 768px) {
          font-size: 2.2rem;
        }
      }

      > div {
        height: fit-content;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;

        > span {
          display: flex;
          font-size: 2.5rem;
          color: ${(props) => props.theme.textInSmallCase};
          opacity: 0.8;
          margin-right: 0.1rem;
          margin-bottom: 0.3rem;
        }
      }
    }
  }

  .back {
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 2rem;
    background-color: ${(props) => props.theme['child-container']};
    padding: 2.9rem 2.5rem 2.5rem 2.5rem;

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > p:first-child {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${(props) => props.theme.textInSmallCase};
        margin-bottom: -0.8rem;
      }

      > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > h2 {
          font-size: clamp(1.9rem, 2vw, 2.4rem);
          font-weight: 500;
          line-height: 160%;
          user-select: none;
          color: ${({ theme, $color }) => theme[BASE_COLORS[$color]]};

          @media (max-width: 768px) {
            font-size: 2.4rem;
          }

          @media (max-width: 380px) {
            font-size: clamp(1.8rem, 4.5vw, 2.2rem);
          }
        }

        > span {
          > svg {
            display: flex;
            transform: scaleX(-1);
            font-size: 2.5rem;
            color: ${(props) => props.theme.textInSmallCase};
          }

          transition: filter 0.3s ease-in-out;

          &:hover {
            filter: brightness(150%);
          }
        }
      }
    }

    .container-background {
      width: 100%;
      height: 100%;
      opacity: 0.85;
      background-image: url(${(props) => props.$background});
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
      border-radius: 5px;
      box-shadow: ${({ theme }) => `${theme.textInSmallCase}20`} 0px 0px 20px
        1px;

      transition: opacity 0.4s ease-in-out 0s;

      &:hover {
        opacity: 1;
      }

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 2px;
        background: ${({ theme, $color }) => theme[BASE_COLORS[$color]]};

        transform-origin: left;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;

        -webkit-transform-origin: left;
        -webkit-transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
      }

      &:hover:before {
        transform: scaleX(1);
        -webkit-transform: scaleX(1);
      }
    }
  }

  @media (max-width: 1120px) {
    .front {
      > div:nth-child(2) {
        flex-direction: column-reverse;
        align-items: start;
        gap: 1.5rem;
      }
    }
  }

  @media (max-width: 440px) {
    min-height: 35.5rem;
  }

  @media (max-width: 360px) {
    min-height: 38.5rem;
  }
`
