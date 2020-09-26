import * as S from './styles'
import Link from 'next/link'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const [menuState, setMenuState] = useState('closed')

  return (
    <S.Wrapper>
      <div className={`header__top ${menuState}`}>
        <div className="header__title">
          <h1>CodePills</h1>
        </div>

        <div
          className={`nav-toggle-label ${menuState}`}
          onClick={() =>
            setMenuState(menuState == 'opened' ? 'closed' : 'opened')
          }
        >
          <span></span>
        </div>

        <div className={`header__body ${menuState}`}>
          <img className="header__logo" src="img/logo2.svg" alt="Logo" />
          <p className="header__description">
            A description about the blog purpose
          </p>

          <nav className="header__social">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/bdepaula/" target="self">
                  {' '}
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </a>
              </li>
              <li>
                <a href="https://github.com/bruno-bert" target="self">
                  {' '}
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__bottom">
            <nav className="header__menu">
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>The Author</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Header
