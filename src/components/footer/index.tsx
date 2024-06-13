import { FooterContainer } from './style'
import { FaCode } from 'react-icons/fa6'
export function Footer() {
  return (
    <FooterContainer>
      <p>
        Copyright © 2024
        <span>
          <a
            href="https://www.linkedin.com/in/a1exlima/"
            target="_blank"
            rel="noreferrer"
          >
            alexlima.com
          </a>
        </span>
        .Todos os direitos reservados.
      </p>
      <span>
        Powered by <FaCode />
      </span>
    </FooterContainer>
  )
}
