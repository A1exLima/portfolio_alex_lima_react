import { FooterContainer } from './style'

import { FaCode } from 'react-icons/fa6'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>Copyright © 2024</p>
        <span>
          <a href="https://alexcode.com.br/" target="_blank" rel="noreferrer">
            alexcode.com.br
          </a>
        </span>
        <p>Todos os direitos reservados.</p>
      </div>

      <span>
        Powered by <FaCode />
      </span>
    </FooterContainer>
  )
}
