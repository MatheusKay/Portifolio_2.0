import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Props } from '../../styles/globals'

export const AboutContain = styled(motion.div)<Props>`
  position: relative;
  line-height: 1.4em;

  span {
    width: 3em;
    height: 3px;
    display: block;
    position: absolute;
    top: 1.5em;
    left: 0;
    background-color: ${(props) => props.colors.titleColor};
  }

  .first_p {
    margin-left: 4.5em;
  }

  p {
    margin-bottom: 1em;
  }
`
