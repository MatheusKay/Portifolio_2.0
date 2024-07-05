import styled from 'styled-components'
import { Props, breakPoint } from '../../styles/globals'

export const Modal = styled.section`
  width: 70%;
  padding: 24px;
  position: relative;
  border-radius: 24px;

  @media (max-width: ${breakPoint.mobile}) {
    width: 90%;
    height: 80vh;
    padding: 16px;
  }
`

export const ModalHeader = styled.section`
  margin-bottom: 48px;
  display: flex;
  column-gap: 24px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;

    @media (max-width: ${breakPoint.mobile}) {
      display: none;
    }
  }
`

export const ModalInfosContain = styled.div`
  width: 100%;
`

export const ModalInfos = styled.div`
  display: flex;
  justify-content: space-between;

  .title_style {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    column-gap: 16px;

    h2 {
      font-size: 32px;

      @media (max-width: ${breakPoint.mobile}) {
        font-size: 24px;
      }
    }

    span {
      width: 2px;
      height: 40px;
      display: block;
    }
  }

  @media (max-width: ${breakPoint.mobile}) {
    flex-direction: column-reverse;

    h3 {
      font-size: 18px;
    }
  }
`

export const ModalTags = styled.div`
  margin-top: 8px;
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

  span {
    padding: 8px;
    text-align: center;
    font-size: 12px;
    border-radius: 8px;
  }

  @media (max-width: ${breakPoint.mobile}) {
    height: 108px;
    overflow: overlay;
  }
`

export const ModalContainerButton = styled.div`
  width: 30%;

  button {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    border: none;
    border-radius: 24px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    a {
      text-decoration: none;
    }

    svg {
      height: 24px;
      width: 24px;
    }
  }

  @media (max-width: ${breakPoint.mobile}) {
    width: 100%;
    margin-bottom: 16px;
  }
`

export const ButtonClose = styled.button`
  height: 32px;
  width: 32px;
  padding: 8px;
  position: absolute;
  top: -2.5em;
  right: 0;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
`

export const ModalContain = styled.main<Props>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);

  .container_text {
    p {
      margin-bottom: 24px;
    }

    @media (max-width: ${breakPoint.mobile}) {
      height: 30%;
      overflow: overlay;
    }
  }

  ${Modal} {
    background-color: ${(props) => props.colors.backgroundMenuMobile};
    color: ${(props) => props.colors.textColor};
  }

  ${ModalInfos} {
    .title_style {
      span {
        background-color: ${(props) => props.colors.colorDetails};
      }
    }
  }

  ${ModalTags} {
    span {
      background-color: ${(props) => props.colors.backgroundColor};
    }
  }

  ${ModalContainerButton} {
    button {
      background-color: ${(props) => props.colors.colorDetails};

      a,
      svg {
        color: ${(props) => props.colors.backgroundColor};
      }
    }
  }

  ${ButtonClose} {
    background-color: ${(props) => props.colors.backgroundMenuMobile};
    color: ${(props) => props.colors.textColor};

    &:hover {
      background-color: ${(props) => props.colors.textColor};
      color: ${(props) => props.colors.backgroundMenuMobile};
    }
  }
`
