import { FooterContainer } from './style'

import encrypt from '../../assets/icons/lets-encrypt.svg'

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
        <img
          src={encrypt}
          alt="Certificado SSL"
          title="O Let’s Encrypt é uma Autoridade de Certificação (CA) gratuita, automatizada e aberta, que oferece certificados SSL/TLS com o objetivo de tornar a Web mais segura. Estes certificados permitem a comunicação criptografada entre o servidor web e os navegadores dos usuários, garantindo a privacidade e a segurança dos dados transmitidos."
        />
      </span>
    </FooterContainer>
  )
}
