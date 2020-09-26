import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.header`
  ${() => css`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 1fr 1fr;

  `}
`
