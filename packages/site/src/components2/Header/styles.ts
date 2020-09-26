import styled, { css, DefaultTheme } from 'styled-components'

const screenModifiers = {
  middleScreen: (theme) => css`
    @media (max-width: ${theme.breakpoints.medium}) {
      width: 100%;
      height: unset;

      .header__top {
        overflow: hidden;
        height: unset;
        transition: max-height 0.5s ease-in-out;

        &.closed {
          overflow: hidden;
          max-height: 80px;
        }

        &.opened {
          max-height: 100vh;
        }
      }

      .nav-toggle-label {
        display: unset;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0.8em;
        height: 40px;
        display: flex;
        align-items: center;
        border: solid 2px ${theme.colors.white};
        padding: 1rem;
        border-radius: 5px;
        cursor: pointer;
        span,
        span::before,
        span::after {
          display: block;
          background: ${theme.colors.white};
          width: 2em;
          height: 2px;
          position: relative;
          border-radius: 2px;
        }

        span::before,
        span::after {
          content: '';
          position: absolute;
        }
        span::before {
          bottom: 8px;
        }
        span::after {
          top: 8px;
        }
      }
    }
  `,

  smallScreen: (theme) => css`
    @media (max-width: ${theme.breakpoints.small}) {
      background: green;
    }
  `
}

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 280px;
    background: ${theme.colors.headerBg};
    color: ${theme.colors.white};

    .nav-toggle-label {
      display: none;
    }
    .header__top {
      text-align: center;
      height: 100%;

      & > div {
        margin-top: 2rem;
        margin-bottom: 5rem;
      }

      .header__body {
        & > * {
          margin-bottom: 5rem;
        }
      }
    }

    .header__social {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 90%;
        border-bottom: solid 1px ${theme.colors.gray};
        position: absolute;
        left: 5%;
        top: 100%;
      }
    }

    .header__logo {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    .header__social {
      ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        text-align: center;
        align-items: center;
        justify-content: center;
        li {
          margin: 1.3rem;
          a {
            color: white;
          }
        }
      }
    }

    .header__menu {
      ul {
        text-align: center;
        li {
          line-height: ${theme.spacings.large};
          cursor: pointer;
          list-style: none;

          position: relative;
          &::before {
            content: '';
            top: 0;
            left: 0;
            position: absolute;
            width: 0;
            height: 100%;
            background-color: ${theme.colors.primaryHover};
            transition: width 0.3s ease-in-out;
            z-index: ${theme.layers.deep1};
            opacity: 0.4;
          }
          &:hover {
            &::before {
              width: 100%;
            }

            a {
              color: ${theme.colors.white};
            }
          }
        }
        a {
          text-decoration: none;
          color: ${theme.colors.white};
          &:active {
            color: ${theme.colors.gray};
          }
        }
      }
    }

    ${screenModifiers.middleScreen(theme)}
    ${screenModifiers.smallScreen(theme)}
  `}
`
