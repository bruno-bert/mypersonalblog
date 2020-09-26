import styled, { css, DefaultTheme } from 'styled-components'

import Header from 'components2/Header'
import Footer from 'components2/Footer'

const MainContent = styled.main`
  ${() => css``}
`

const Layout = ({ children }) => (
  <>
    <Header />
    <MainContent>
     {children}
     <Footer />
    </MainContent>
    
  </>
)

export default Layout
