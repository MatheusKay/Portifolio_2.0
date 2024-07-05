import styled from 'styled-components'
import { Props } from '../../../styles/globals'

type Mode = {
  modeName: string
}

export const ProjectDesc = styled.div<Mode>`
  width: 350px;
  height: 300px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) =>
    props.modeName === 'dark'
      ? 'rgba(41, 41, 41, 0.9)'
      : 'rgba(192, 192, 192, 0.9)'};
  border-radius: 24px;
  opacity: 0;
  transition: opacity 1s ease-in;

  p {
    margin: 16px 0 24px;
    text-align: center;
  }
`

export const ProjectButton = styled.button`
  width: 50%;
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
`

export const ProjectContain = styled.div<Props>`
  width: 350px;
  height: 300px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
  }

  ${ProjectButton} {
    background-color: ${(props) => props.colors.titleColor};
    color: ${(props) => props.colors.backgroundColor};

    a,
    svg {
      color: ${(props) => props.colors.backgroundColor};
    }
  }

  &:hover {
    ${ProjectDesc} {
      transition: opacity 1s ease-out;
      opacity: 1;
    }
  }
`
