import styled from 'styled-components'

import { breakPoint } from '../../styles/globals'

export const SkillsContain = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 32px;

  @media (max-width: ${breakPoint.mobile}) {
    width: 80%;
    gap: 16px;
  }
`
