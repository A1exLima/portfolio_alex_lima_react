import styled from 'styled-components'

interface AlertMessageProps {
  $color: boolean
}

export const ContactContainer = styled.section`
  width: 100%;
  min-height: 65rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  border: 2px solid ${(props) => props.theme['border-theme']};
  border-radius: 8px;
  padding: 4rem;

  background-color: ${(props) => props.theme['container-theme']};

  > h2 {
    margin-left: 1rem;
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

  > h3 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 500;
    color: ${(props) => props.theme['blue-text']};
    letter-spacing: 0.1rem;
  }

  > div:nth-child(3) {
    max-width: 68.4rem;
    margin-top: -2rem;

    > p {
      margin-bottom: 6rem;
      text-align: center;
      font-weight: 500;
      line-height: 145%;
      font-size: 1.8rem;
      color: ${(props) => props.theme.textInSmallCase};
    }
  }

  > div:nth-child(4) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;

    > a {
      &:focus {
        outline: 0;
      }
    }
  }

  @media (max-width: 768px) {
    > div:last-child {
      justify-content: center;
    }
  }

  @media (max-width: 420px) {
    > div:last-child {
      gap: 1.5rem;
      margin-bottom: 0;
    }
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .error {
    color: ${(props) => props.theme['text-validation']};
    font-size: 1.25rem;
    margin: 0 0 -1.2rem 1.6rem;
  }

  > input {
    border: none;
    background: none;
    border-bottom: 1px solid ${(props) => props.theme['border-theme']};
    padding: 0 0 2rem 1.6rem;

    transition: border 0.4s ease-in-out;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-object']};
    }

    &:focus {
      outline: 0;
      border-bottom: 1px solid ${(props) => props.theme['blue-object']};
    }

    font-size: 1.6rem;
    letter-spacing: 1px;
    font-weight: 500;
    color: ${(props) => props.theme.textInUpperCase};

    &::placeholder {
      letter-spacing: 0;
    }
  }

  > textarea {
    height: 15rem;
    resize: none;

    border: none;
    background: none;
    border-bottom: 1px solid ${(props) => props.theme['border-theme']};
    padding: 0 0 2rem 1.6rem;

    transition: border 0.4s ease-in-out;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-object']};
    }

    &:focus {
      outline: 0;
      border-bottom: 1px solid ${(props) => props.theme['blue-object']};
    }

    font-size: 1.6rem;
    letter-spacing: 1px;
    font-weight: 500;
    font-family: var(--font-Archivo);
    color: ${(props) => props.theme.textInUpperCase};

    &::placeholder {
      letter-spacing: 0;
    }
  }

  > button {
    cursor: pointer;
    margin-top: 1rem;
    border: none;
    width: 100%;
    height: 6rem;
    background-color: ${(props) => props.theme['blue-object']};
    border-radius: 0.8rem;

    font-size: 1.6rem;
    font-weight: 600;
    color: ${(props) => props.theme.textInUpperCase};

    transition: filter 0.3s ease-in-out;

    &:focus {
      outline: none;
      box-shadow: 1px 2px 25px ${(props) => props.theme['child-border']};
    }

    &:hover {
      filter: brightness(120%);
    }

    .loading-button {
      display: flex;
      align-items: center;
      justify-content: center;

      animation: rotate 0.8s linear infinite;

      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      > svg {
        font-size: 2.4rem;
        color: ${(props) => props.theme.textInUpperCase};
      }
    }
  }
`

export const ContactButton = styled.button`
  cursor: pointer;
  border: 2px solid ${(props) => props.theme['child-border']};
  border-radius: 8px;
  background-color: ${(props) => props.theme['background-theme']};

  width: 6.8rem;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: 0;
    border: 2px solid ${(props) => props.theme['blue-object']};
    border-radius: 8px;
  }

  > svg {
    font-size: 3.1rem;
    color: ${(props) => props.theme['blue-object']};
  }

  transition: border 0.3s ease-in-out;

  &:hover {
    border: 2px solid ${(props) => props.theme['blue-object']};
  }

  @media (max-width: 420px) {
    width: 5.8rem;
    height: 6rem;

    > svg {
      font-size: 2.9rem;
      color: ${(props) => props.theme['blue-object']};
    }
  }
`

export const AlertMessage = styled.div<AlertMessageProps>`
  .alert-send-message {
    margin-top: 4rem;
    display: flex;
    justify-content: center;

    text-align: center;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme, $color }) =>
      $color ? theme['text-validation'] : theme['alert-message']};
  }
`
