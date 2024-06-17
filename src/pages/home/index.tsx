import { Container, MainContainer } from './style'

import { Banner } from '../../components/banner'
import { About } from '../../components/about'
import { PortfolioContent } from '../../components/portfolioContent'
import { Knowledge } from '../../components/knowledge'
import { Contact } from '../../components/contact'

export function Home() {
  return (
    <MainContainer>
      <Container>
        <Banner />
        <About />
        <PortfolioContent />
        <Knowledge />
        <Contact />
      </Container>
    </MainContainer>
  )
}
