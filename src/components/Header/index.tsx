import { useDispatch, useSelector } from 'react-redux'

import ButtonMode from '../subComponents/ButtonMode'

import { HeaderContainer, HeaderLinks, ButtonMobile } from './style'

import { RootReducer } from '../../store'
import { openOrClose } from '../../store/reducers/states'

const Header = () => {
  const { colorsWeb } = useSelector((s: RootReducer) => s.states)

  const dispatch = useDispatch()

  const openMenuMobile = () => {
    dispatch(openOrClose())
  }

  return (
    <HeaderContainer colors={colorsWeb}>
      <h1>Logo</h1>
      <HeaderLinks colors={colorsWeb}>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Skills</li>
          <li>Contact</li>
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
    </HeaderContainer>
  )
}

export default Header
