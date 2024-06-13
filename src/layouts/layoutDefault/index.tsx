import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { LayoutDefaultContainer } from './style'
import { Outlet } from 'react-router-dom'
export function LayoutDefault() {
  return (
    <LayoutDefaultContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutDefaultContainer>
  )
}
