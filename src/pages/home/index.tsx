import { useState, useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Element as ScrollElement, Events } from 'react-scroll'
import { Container, MainContainer } from './style'
import { Banner } from '../../components/banner'
import { About } from '../../components/about'
import { PortfolioContent } from '../../components/portfolioContent'
import { Knowledge } from '../../components/knowledge'
import { Contact } from '../../components/contact'

export function Home() {
  const [currentSection, setCurrentSection] = useState<string>('home')

  useEffect(() => {
    const handleSetActive = (to: string) => {
      setCurrentSection(to)
    }

    Events.scrollEvent.register('end', handleSetActive)

    return () => {
      Events.scrollEvent.remove('end')
    }
  }, [])

  const renderHelmet = () => {
    switch (currentSection) {
      case 'about':
        return (
          <Helmet>
            <title>Sobre - Alex Lima Front-End Developer</title>
            <meta
              name="description"
              content="Eu sou o Alex Lima, um desenvolvedor web front-end focado em construir interfaces intuitivas e responsivas. Com experiência sólida em HTML, CSS, JavaScript e React, estou sempre em busca de novos desafios para aprimorar minhas habilidades e oferecer soluções inovadoras aos meus clientes."
            />
          </Helmet>
        )
      case 'projects':
        return (
          <Helmet>
            <title>Projetos - Alex Lima Front-End Developer</title>
            <meta
              name="description"
              content="Aqui estão alguns dos projetos que desenvolvi, demonstrando minha expertise em criar soluções web eficientes e atraentes. Cada projeto reflete meu compromisso com a qualidade e a experiência do usuário."
            />
          </Helmet>
        )
      case 'knowledge':
        return (
          <Helmet>
            <title>Conhecimentos - Alex Lima Front-End Developer</title>
            <meta
              name="description"
              content="Explore minha expertise em tecnologias front-end através desses cards interativos. Cada tecnologia representa meu compromisso em dominar ferramentas essenciais para oferecer soluções web de alto desempenho e impacto visual."
            />
          </Helmet>
        )
      case 'contact':
        return (
          <Helmet>
            <title>Contato - Alex Lima Front-End Developer</title>
            <meta
              name="description"
              content="Vamos iniciar uma conversa sobre seu projeto? Preencha o formulário abaixo ou conecte-se diretamente através dos botões de contato. Estou ansioso para ouvir sobre suas ideias e colaborar para transformá-las em realidade."
            />
          </Helmet>
        )
      case 'home':
      default:
        return (
          <Helmet>
            <title>Alex Lima - Desenvolvedor Front-End</title>
            <meta
              name="description"
              content="Conheça o portfólio de Alex Lima, desenvolvedor front-end especializado em criar interfaces web de alta qualidade com HTML, CSS, JavaScript, integrações API RESTful e React, além de familiaridade com Node.js, SQLite, Knex e mais"
            />
            <meta
              name="keywords"
              content="Portfólio desenvolvedor Alex Lima front-end, HTML, CSS, JavaScript, API RESTful, React, Node.js, SQLite e Knex."
            />
            <meta name="author" content="Alex da Silva Lima" />
            <meta
              property="og:title"
              content="Alex Lima - Portfólio de Desenvolvedor Front-End"
            />
            <meta
              property="og:description"
              content="Portfólio de Alex Lima, desenvolvedor front-end especializado em HTML, CSS, JavaScript, React, e mais. Explore minhas habilidades, experiência e projetos destacados."
            />
            <meta property="og:image" content="/card.png" />
            <meta property="og:url" content="https://alexcode.com.br/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="Alex Lima - Portfólio de Desenvolvedor Front-End"
            />
            <meta
              name="twitter:description"
              content="Portfólio de Alex Lima, desenvolvedor front-end especializado em HTML, CSS, JavaScript, React, e mais. Explore minhas habilidades, experiência e projetos destacados."
            />
            <meta name="twitter:image" content="/card.png" />
            <meta name="robots" content="index, follow" />
          </Helmet>
        )
    }
  }

  return (
    <HelmetProvider>
      <MainContainer>
        {renderHelmet()}
        <Container>
          <ScrollElement name="home">
            <Banner />
          </ScrollElement>
          <ScrollElement name="about">
            <About />
          </ScrollElement>
          <ScrollElement name="projects">
            <PortfolioContent />
          </ScrollElement>
          <ScrollElement name="knowledge">
            <Knowledge />
          </ScrollElement>
          <ScrollElement name="contact">
            <Contact />
          </ScrollElement>
        </Container>
      </MainContainer>
    </HelmetProvider>
  )
}
