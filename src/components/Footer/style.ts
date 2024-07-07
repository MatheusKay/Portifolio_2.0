import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Props, breakPoint } from '../../styles/globals'

export const FooterBio = styled(motion.div)`
  margin-top: 24px;
  margin-bottom: 40px;

  h2 {
    margin-bottom: 16px;
    font-size: 24px;
    text-align: center;
  }

  p {
    font-size: 18px;
  }

  @media (max-width: ${breakPoint.mobile}) {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`

export const FooterContact = styled(motion.div)`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  font-size: 14px;

  svg {
    margin-right: 8px;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: ${breakPoint.mobile}) {
    flex-wrap: wrap;
    row-gap: 16px;
  }
`

export const FooterContain = styled.footer<Props>`
  width: 100%;

  ${FooterContact} {
    a {
      color: ${(props) => props.colors.textColor};
      transition: color 1s ease;

      &:hover {
        color: ${(props) => props.colors.colorDetails};
      }
    }
  }
`
