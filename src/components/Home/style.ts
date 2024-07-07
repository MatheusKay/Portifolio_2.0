import styled from 'styled-components'
import { motion } from 'framer-motion'

import backgroundImage from '../../assets/images/Container_Image_Photo.svg'

import { breakPoint, Props } from '../../styles/globals'

export const HomeInfos = styled.section`
  width: 100%;

  h1 {
    font-size: 32px;

    span {
      font-size: 40px;
    }
  }

  h3 {
    margin: 0.5em 0 3.5em;
  }

  @media (max-width: ${breakPoint.mobile}) {
    h1 {
      font-size: 18px;

      span {
        font-size: 24px;
      }
    }

    h3 {
      font-size: 16px;
    }
  }
`

export const HomeBackgroundImage = styled(motion.section)`
  display: flex;
  justify-content: center;

  div {
    height: 21em;
    width: 250px;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: ${breakPoint.mobile}) {
    margin-top: 5em;
  }
`

export const HomeButtonCv = styled(motion.button)`
  width: 30%;
  padding: 16px 24px;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: ${breakPoint.mobile}) {
    width: 50%;
  }
`

export const HomeContainer = styled.main<Props>`
  height: 80vh;
  display: grid;
  margin-bottom: 5%;
  grid-template-columns: 60% 40%;
  align-items: center;

  @media (max-width: 767px) {
    margin-top: 15%;
    display: block;
  }

  ${HomeInfos} {
    span {
      color: ${(props) => props.colors.titleColor};
    }
  }

  ${HomeButtonCv} {
    background-color: ${(props) => props.colors.titleColor};
    color: ${(props) => props.colors.backgroundColor};

    &:hover {
      background-color: ${(props) => props.colors.textColor};
      color: ${(props) => props.colors.backgroundColor};
    }
  }
`
