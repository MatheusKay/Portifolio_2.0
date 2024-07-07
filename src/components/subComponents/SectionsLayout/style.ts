import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Props, breakPoint } from '../../../styles/globals'

export const SectionTitle = styled(motion.section)`
  margin-bottom: 2.5em;
  display: flex;
  align-items: center;
  column-gap: 1em;

  span {
    width: 3px;
    height: 48px;
    display: block;
  }
`

export const MainContain = styled(motion.main)<Props>`
  margin-bottom: 15%;

  ${SectionTitle} {
    span {
      background-color: ${(props) => props.colors.titleColor};
    }

    h2 {
      color: ${(props) => props.colors.titleColor};
      font-size: 24px;
    }
  }

  @media (max-width: ${breakPoint.mobile}) {
    margin-top: 45%;
  }
`
