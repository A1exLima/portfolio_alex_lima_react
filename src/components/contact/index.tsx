import { ContactButton, ContactContainer, FormContainer } from './style'

import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import { Tooltip, tooltipClasses } from '@mui/material'
import { styled } from '@mui/material/styles'

import { FaDownload, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaPhone } from 'react-icons/fa6'
import { PiYoutubeLogoLight } from 'react-icons/pi'

import { defaultTheme } from '../../styles/themes/defaultTheme'

interface CustomTooltipProps {
  className?: string
  title: React.ReactNode
  arrow?: boolean
  children: ReactElement
}

const CustomTooltip = styled(({ className, ...props }: CustomTooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: defaultTheme['child-container'],
    color: defaultTheme['toolTip-color'],
    fontSize: theme.typography.pxToRem(20), // Define o tamanho da fonte
    fontFamily: 'Archivo',
    border: `2px solid ${defaultTheme['blue-object']}`,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: defaultTheme['blue-object'],
  },
}))

export function Contact() {
  return (
    <ContactContainer>
      <h2>
        Contato <span>.</span>
      </h2>

      <h3>Vamos lá?</h3>

      <div>
        <p>
          Preencha o formulário abaixo para esclarecemos suas dúvidas e dar
          início ao seu projeto!
        </p>

        <form action="">
          <FormContainer>
            <input id="name" type="text" placeholder="Nome *" />
            <input id="email" type="email" placeholder="Email *" />
            <input id="subject" type="text" placeholder="Assunto *" />

            <textarea
              name="message"
              id="message"
              placeholder="Mensagem *"
            ></textarea>

            <button type="button">ENVIAR</button>
          </FormContainer>
        </form>
      </div>

      <div>
        <NavLink to="/curriculoAlexLimaFrontEndDeveloper.pdf" target="_blank">
          <CustomTooltip title="Download Currículo" arrow>
            <ContactButton>
              <FaDownload />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="mailto: alex.lima_dev@outlook.com" target="_blank">
          <CustomTooltip title="Envie um e-mail" arrow>
            <ContactButton>
              <MdEmail />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="https://wa.me/5511947330282" target="_blank">
          <CustomTooltip title="Chamada ou WhatsApp" arrow>
            <ContactButton>
              <FaPhone />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="https://www.linkedin.com/in/a1exlima/" target="_blank">
          <CustomTooltip title="Rede Social LinkedIn" arrow>
            <ContactButton>
              <CiLinkedin />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="https://github.com/A1exLima/" target="_blank">
          <CustomTooltip title="Repositório GitHub" arrow>
            <ContactButton>
              <FaGithub />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="https://www.youtube.com/@A1exLima" target="_blank">
          <CustomTooltip title="Canal no Youtube" arrow>
            <ContactButton>
              <PiYoutubeLogoLight />
            </ContactButton>
          </CustomTooltip>
        </NavLink>

        <NavLink to="https://www.instagram.com/a1ex.lima" target="_blank">
          <CustomTooltip title="Rede Social Instagram" arrow>
            <ContactButton>
              <FaInstagram />
            </ContactButton>
          </CustomTooltip>
        </NavLink>
      </div>
    </ContactContainer>
  )
}
