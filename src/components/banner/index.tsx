import { BannerContainer } from './style'

import codeBanner from '../../assets/icons/codeBanner.svg'
import { MdWhatsapp } from 'react-icons/md'

import { TypingAnimation } from '../TypingAnimation'

export function Banner() {
  const textToType =
    'Comprometimento com a excelência, buscando constantemente maximizar o desempenho e contribuir para o sucesso harmonioso e produtivo.'

  return (
    <BannerContainer>
      <div>
        <h1>
          Capacidade de adaptar-se rapidamente a
          <span>novas tecnologias e metodologias.</span>
        </h1>

        <TypingAnimation text={textToType} />

        <a
          target="_blank"
          href="https://wa.me/5555119473302?text=Ol%C3%A1%21+Se+voc%C3%AA+est%C3%A1+vendo+esta+mensagem%2C+%C3%A9+porque+clicou+no+link+do+meu+portf%C3%B3lio.+Que+legal%21+%F0%9F%A4%96++Sou+desenvolvedor+front-end+e+adoraria+falar+mais+sobre+meu+trabalho.+E+se+quiser+discutir+projetos+ou+oportunidades%2C+%C3%A9+s%C3%B3+me+enviar+uma+mensagem.+Estou+ansioso+para+conversar+com+voc%C3%AA%21++ALEX%3CLIMA%2F%3E"
          rel="noreferrer"
        >
          <MdWhatsapp />
          <span>Fale comigo!</span>
        </a>
      </div>

      <figure>
        <img src={codeBanner} alt="Logomarca" />
      </figure>
    </BannerContainer>
  )
}
