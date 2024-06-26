import { AboutContainer, SocialNetworkContainer } from './style'

import { NavLink } from 'react-router-dom'

import { IoLogoInstagram } from 'react-icons/io5'
import { CiLinkedin } from 'react-icons/ci'
import { PiYoutubeLogo } from 'react-icons/pi'
import { FaGithub } from 'react-icons/fa'

import alexLima from '../../assets/images/about/alexLima.png'

export function About() {
  return (
    <AboutContainer>
      <figure>
        <img src={alexLima} alt="Alex Lima desenvolvedor front-end" />
      </figure>

      <div>
        <div>
          <h2>Quem sou</h2>
          <h3>Alex Lima</h3>
          <h4>Front-End Developer</h4>

          <p>
            Desenvolvedor web Front-End, especializado na criação e manutenção
            de interfaces web centradas na experiência do usuário. Sólido
            domínio das tecnologias essenciais, incluindo HTML, CSS, JavaScript,
            integrações API RESTful e React, além de familiaridade com Node.js,
            SQLite e Knex.
          </p>
        </div>

        <div>
          <SocialNetworkContainer title="Rede Social Instagram">
            <NavLink target="_blank" to="https://www.instagram.com/a1ex.lima/">
              <IoLogoInstagram />
            </NavLink>
          </SocialNetworkContainer>

          <SocialNetworkContainer title="Rede Social LinkedIn">
            <NavLink target="_blank" to="https://www.linkedin.com/in/a1exlima/">
              <CiLinkedin />
            </NavLink>
          </SocialNetworkContainer>

          <SocialNetworkContainer title="Canal no Youtube">
            <NavLink target="_blank" to="https://www.youtube.com/@A1exLima">
              <PiYoutubeLogo />
            </NavLink>
          </SocialNetworkContainer>

          <SocialNetworkContainer title="Repositório GitHub">
            <NavLink target="_blank" to="https://github.com/A1exLima">
              <FaGithub />
            </NavLink>
          </SocialNetworkContainer>
        </div>
      </div>
    </AboutContainer>
  )
}
