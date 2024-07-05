import { useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import { RootReducer } from '../store'

export type Props = {
  colors: {
    backgroundColor: string
    backgroundMenuMobile: string
    titleColor: string
    textColor: string
    colorDetails: string
    colorDetailsText: string
  }
}

export const colors = {
  red: {
    redTone1: '#da0c12',
    redTone2: '#c5090e',
    redTone3: '#af0609',
    redTone4: '#9a0305',
    redTone5: '#840000'
  },
  black: {
    blackTone1: '#525252',
    blackTone2: '#3e3e3e',
    blackTone3: '#292929',
    blackTone4: '#151515',
    blackTone5: '#000000'
  },
  white: {
    whiteTone1: '#dfdfdf',
    whiteTone2: '#c0c0c0'
  },
  others: {
    yellow: '#f49e12'
  }
}

export const fonts = {
  openSans: '"Open Sans", sans-serif',
  comfortaa: '"Comfortaa", sans-serif'
}

export const breakPoint = {
  mobile: '767px',
  tablet: '1023px'
}

export const StylesGlobals = createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.colors.backgroundColor};
    color: ${(props) => props.colors.textColor};
    font-family: ${fonts.openSans};

    h1, h2, h3, {
      font-family: ${fonts.comfortaa};
    }
  }

  .container {
    max-width: 100%;
    width: 90%;
    margin: 0 auto;
  }
`

export const GlobalStyleComponent = () => {
  const { colorsWeb } = useSelector((s: RootReducer) => s.states)

  return <StylesGlobals colors={colorsWeb} />
}
