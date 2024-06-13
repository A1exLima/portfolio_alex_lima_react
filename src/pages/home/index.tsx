import { Container, MainContainer } from './style'

import { Banner } from './components/banner'
import { About } from './components/about'
import { Repository } from './components/repository'

export function Home() {
  return (
    <MainContainer>
      <Container>
        <Banner />
        <About />
        <Repository />
      </Container>
    </MainContainer>
  )
}
