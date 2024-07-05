import styled from 'styled-components'
import { Props, breakPoint } from '../../../styles/globals'

export const CardContain = styled.div<Props>`
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  background-color: ${(props) => props.colors.backgroundMenuMobile};
  color: ${(props) => props.colors.textColor};
  border-radius: 24px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3);
  transition: background-color 2s ease;

  i {
    font-size: 40px;
  }

  h3 {
    font-size: 18px;
    text-align: center;
  }

  &:hover {
    background-color: ${(props) => props.colors.textColor};
    color: ${(props) => props.colors.backgroundMenuMobile};
  }

  @media (max-width: ${breakPoint.mobile}) {
    height: 125px;
    width: 125px;

    i {
      font-size: 32px;
    }

    h3 {
      font-size: 14px;
    }
  }
`

export const IconsContain = styled.div`
  width: 100%;
  display: flex;
  column-gap: 8px;
  justify-content: center;
`
