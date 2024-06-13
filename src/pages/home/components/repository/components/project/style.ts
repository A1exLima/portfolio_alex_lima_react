import styled from 'styled-components'

export const BASE_COLORS = {
  red: 'project-red',
  blue: 'project-blue',
  violet: 'project-violet',
  purple: 'project-purple',
  green: 'project-green',
} as const

interface ProjectProps {
  $color: keyof typeof BASE_COLORS
  $background: string
}

export const ProjectsContainer = styled.div`
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

export const Project = styled.div<ProjectProps>`
  min-height: 30rem;
  background-color: ${(props) => props.theme['child-container']};
  border: 0.1rem solid ${({ theme, $color }) => theme[BASE_COLORS[$color]]};
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);

  .front,
  .back {
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
      gap: 2rem;

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > h2 {
          font-size: 2.4rem;
          font-weight: 500;
          line-height: 160%;
          user-select: none;
          color: ${(props) => props.theme.textInUpperCase};
        }

        > div {
          width: 6.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;

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
            cursor: pointer;
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
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 140%;
        color: ${(props) => props.theme.textInSmallCase};
      }
    }

    > div:nth-child(2) {
      height: fit-content;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;

      > a {
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        font-size: 2rem;
        font-weight: 400;
        color: ${({ theme, $color }) => theme[BASE_COLORS[$color]]};

        transition: filter 0.4s ease-in-out;

        &:hover {
          filter: brightness(120%);
        }
      }

      > div {
        height: fit-content;
        padding: 0.2rem;
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
    padding: 2.5rem;

    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > h2 {
        user-select: none;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 160%;
        color: ${(props) => props.theme.textInUpperCase};
      }

      > span {
        cursor: pointer;
        display: flex;
        cursor: pointer;
        font-size: 2.5rem;
        color: ${(props) => props.theme.textInSmallCase};

        transition: filter 0.3s ease-in-out;

        &:hover {
          filter: brightness(150%);
        }
      }
    }

    > a {
      width: 100%;
      height: 100%;

      .container-background {
        cursor: pointer;
        width: 100%;
        height: 100%;
        opacity: 0.7;
        background-image: url(${(props) => props.$background});
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        border-radius: 2px;
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
  }

  @media (max-width: 360px) {
    min-height: 34rem;
  }

  @media (max-width: 1120px) {
    .front {
      > div:nth-child(2) {
        flex-direction: column-reverse;
        align-items: start;
        gap: 2rem;
      }
    }
  }
`
