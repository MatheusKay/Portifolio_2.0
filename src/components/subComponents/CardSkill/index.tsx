import { useSelector } from 'react-redux'

import { CardContain, IconsContain } from './style'

import { RootReducer } from '../../../store'

type Props = {
  icons: JSX.Element
  title: string
}

const CardSkill = ({ icons, title }: Props) => {
  const { colorsWeb } = useSelector((s: RootReducer) => s.states)

  return (
    <CardContain colors={colorsWeb}>
      <IconsContain>{icons}</IconsContain>
      <h3>{title}</h3>
    </CardContain>
  )
}

export default CardSkill
