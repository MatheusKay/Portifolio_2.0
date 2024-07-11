import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ButtonMode from '../subComponents/ButtonMode'

import logoVetor from '../../assets/images/Matheus_Kayque_Logo.svg'

import { HeaderContainer, HeaderLinks, ButtonMobile } from './style'

import { RootReducer } from '../../store'
import { openOrClose } from '../../store/reducers/states'

const Header = () => {
  const { colorsWeb } = useSelector((s: RootReducer) => s.states)
  const [secAtive, setSecActive] = useState('home')

  const dispatch = useDispatch()

  const openMenuMobile = () => {
    dispatch(openOrClose())
  }

  const trocaSection = (name: string) => {
    setSecActive(name)
  }

  return (
    <HeaderContainer
      initial={{ opacity: 0, y: -100, position: 'relative' }}
      animate={{ opacity: 1, y: 0, position: 'fixed' }}
      transition={{ duration: 1.5 }}
      colors={colorsWeb}
    >
      <div className="container">
        <img src={logoVetor} alt="Matheus Kayque logo do portifolio" />
        <HeaderLinks colors={colorsWeb}>
          <ul>
            <li>
              <a
                onClick={() => trocaSection('home')}
                className={secAtive === 'home' ? 'section_active' : ''}
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => trocaSection('about')}
                className={secAtive === 'about' ? 'section_active' : ''}
                href="#about"
              >
                About me
              </a>
            </li>
            <li>
              <a
                onClick={() => trocaSection('project')}
                className={secAtive === 'project' ? 'section_active' : ''}
                href="#project"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => trocaSection('skill')}
                className={secAtive === 'skill' ? 'section_active' : ''}
                href="#skill"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => trocaSection('contact')}
                className={secAtive === 'contact' ? 'section_active' : ''}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </HeaderLinks>
        <div className="container_buttons">
          <ButtonMode />
          <ButtonMobile onClick={openMenuMobile}>
            <span></span>
            <span></span>
            <span></span>
          </ButtonMobile>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header
