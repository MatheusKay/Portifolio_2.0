import styled from 'styled-components'

import { fonts } from '../../styles/globals'

type Props = {
  colors: {
    backgroundColor: string
    titleColor: string
    textColor: string
    colorDetails: string
    colorDetailsText: string
  }
}

export const HeaderContainer = styled.header<Props>`
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  font-family: ${fonts.comfortaa};
  border-bottom: 1px solid ${(props) => props.colors.textColor};
  backdrop-filter: blur(16px);

  .container_buttons {
    display: flex;
    column-gap: 24px;
  }

  @media (max-width: 767px) {
    padding: 16px;
  }
`

export const HeaderLinks = styled.nav<Props>`
  width: 50%;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.colors.textColor};

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10%;
    list-style: none;

    li {
      &:hover {
        color: ${(props) => props.colors.colorDetailsText};
        cursor: pointer;
      }
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const ButtonMobile = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  span {
    width: 32px;
    height: 4px;
    background-color: white;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
