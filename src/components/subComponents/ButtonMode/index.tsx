import { useDispatch, useSelector } from 'react-redux'
import { spring } from 'framer-motion'

import vetorSun from '../../../assets/images/vetor_sun.svg'
import vetorMoon from '../../../assets/images/vetor_moon.svg'

import { ButtonCotainer, Button } from './style'

import { RootReducer } from '../../../store'
import { changeMode } from '../../../store/reducers/states'

const ButtonMode = () => {
  const { screenMode } = useSelector((s: RootReducer) => s.states)
  const dispatch = useDispatch()

  const heandleMode = () => {
    dispatch(changeMode())
  }

  return (
    <ButtonCotainer onClick={heandleMode} isDarkMode={screenMode}>
      <Button layout transition={spring} />
      <img
        src={screenMode ? vetorSun : vetorMoon}
        alt="Imagem da lua para ilustrar o modo escuro"
      />
    </ButtonCotainer>
  )
}

export default ButtonMode
