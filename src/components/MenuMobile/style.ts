import styled from 'styled-components'

type Props = {
  colors: {
    backgroundColor: string
    backgroundMenuMobile: string
    titleColor: string
    textColor: string
    colorDetails: string
    colorDetailsText: string
  }
}

export const MenuContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  .overlay {
    width: 30%;
    background-color: rgba(0, 0, 0, 0.25);
  }
`

export const Menu = styled.aside<Props>`
  width: 70%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.colors.backgroundMenuMobile};

  .header_menu {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      height: 32px;
      width: 32px;
      padding: 8px;
      border: none;
      border-radius: 50%;
      font-size: 18px;
      background-color: ${(props) => props.colors.colorDetailsText};
      color: ${(props) => props.colors.backgroundColor};
    }

    img {
      width: 7em;
    }
  }

  .footer_menu {
    text-align: center;
    font-size: 14px;
  }
`

export const MenuLinks = styled.ul<Props>`
  width: 100%;
  list-style: none;
  font-size: 16px;

  a {
    width: 100%;
    padding: 8px;
    margin-bottom: 8px;
    display: inline-block;
    text-decoration: none;
    color: ${(props) => props.colors.titleColor};

    &:hover {
      color: ${(props) => props.colors.colorDetailsText};
    }
  }
`
