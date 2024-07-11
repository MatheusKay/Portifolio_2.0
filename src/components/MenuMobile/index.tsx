import { useDispatch, useSelector } from 'react-redux'

import logoVetor from '../../assets/images/Matheus_Kayque_Logo.svg'

import { MenuContainer, Menu, MenuLinks } from './style'

import { RootReducer } from '../../store'
import { openOrClose } from '../../store/reducers/states'

const MenuMobile = () => {
  const { colorsWeb, menuMobileState } = useSelector(
    (s: RootReducer) => s.states
  )

  const dispatch = useDispatch()

  const closeMenuMobile = () => {
    dispatch(openOrClose())
  }

  return (
    <>
      {menuMobileState && (
        <MenuContainer>
          <Menu colors={colorsWeb}>
            <div>
              <div className="header_menu">
                <img src={logoVetor} alt="" />
                <button onClick={closeMenuMobile}>X</button>
              </div>
              <nav>
                <MenuLinks colors={colorsWeb}>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About me</a>
                  </li>
                  <li>
                    <a href="#">Skills</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </MenuLinks>
              </nav>
            </div>
            <span className="footer_menu">
              &copy; Todos os direitos reservados
            </span>
          </Menu>
          <span onClick={closeMenuMobile} className="overlay"></span>
        </MenuContainer>
      )}
    </>
  )
}

export default MenuMobile
