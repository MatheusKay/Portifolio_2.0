import styled from 'styled-components'

import { colors } from '../../../styles/globals'

type Props = {
  isDarkMode: boolean
}

export const ButtonCotainer = styled.div<Props>`
  width: 4em;
  height: 2em;
  padding: 6px;
  display: flex;
  align-items: center;
  column-gap: 30%;
  flex-direction: ${(props) => (props.isDarkMode ? 'row' : 'row-reverse')};
  background-color: ${(props) =>
    props.isDarkMode ? colors.others.yellow : colors.black.blackTone3};
  border-radius: 24px;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.35);

  img {
    width: 12px;
  }
`

export const Button = styled.span`
  width: 16px;
  height: 16px;
  background-color: ${colors.white.whiteTone1};
  border-radius: 50%;
`
