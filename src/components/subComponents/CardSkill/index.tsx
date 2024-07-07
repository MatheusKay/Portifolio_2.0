import { useSelector } from 'react-redux'

import { CardContain, IconsContain } from './style'

import { RootReducer } from '../../../store'

type Props = {
  icons: JSX.Element
  title: string
  cardId: number
}

const CardSkill = ({ icons, title, cardId }: Props) => {
  const { colorsWeb } = useSelector((s: RootReducer) => s.states)

  const parOrImpar = (num: number) => {
    const isPar = num % 2

    if (isPar == 0) {
      return true
    } else {
      return false
    }
  }

  return (
    <CardContain
      colors={colorsWeb}
      initial={
        parOrImpar(cardId) ? { opacity: 0, y: 100 } : { opacity: 0, y: -100 }
      }
      whileInView={
        parOrImpar(cardId) ? { opacity: 1, y: 4 } : { opacity: 1, y: -4 }
      }
      transition={{ duration: 1.5 }}
    >
      <IconsContain>{icons}</IconsContain>
      <h3>{title}</h3>
    </CardContain>
  )
}

export default CardSkill
