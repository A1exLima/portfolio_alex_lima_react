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
        <img src={alexLima} alt="" />
      </figure>

      <div>
        <div>
          <h2>Quem sou</h2>
          <h3>Alex Lima</h3>
          <h4>Front-End Developer</h4>

          <p>
            Desenvolvedor web front-end, especializado na criação e manutenção
            de interfaces web centradas na experiência do usuário. Sólido
            domínio das tecnologias essenciais, incluindo HTML, CSS, JavaScript,
            React e Node.js, além de familiaridade com SQLite, Knex, Git e
            integrações API.
          </p>
        </div>

        <div>
          <SocialNetworkContainer>
            <NavLink target="_blank" to="https://www.instagram.com/a1ex.lima/">
              <IoLogoInstagram />
            </NavLink>
          </SocialNetworkContainer>

          <SocialNetworkContainer>
            <NavLink target="_blank" to="https://www.linkedin.com/in/a1exlima/">
              <CiLinkedin />
            </NavLink>
          </SocialNetworkContainer>

          <SocialNetworkContainer>
            <NavLink target="_blank" to="https://www.youtube.com/@A1exLima">
              <PiYoutubeLogo />
            </NavLink>
          </SocialNetworkContainer>

          <SocialNetworkContainer>
            <NavLink target="_blank" to="https://github.com/A1exLima">
              <FaGithub />
            </NavLink>
          </SocialNetworkContainer>
        </div>
      </div>
    </AboutContainer>
  )
}
