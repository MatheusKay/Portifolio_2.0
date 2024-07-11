import { useSelector } from 'react-redux'

import { RootReducer } from '../../../store'
import { MainContain, SectionTitle } from './style'

type Props = {
  title: string
  element: JSX.Element
  idSection: string
}

const Section = ({ element, title, idSection }: Props) => {
  const { colorsWeb } = useSelector((s: RootReducer) => s.states)

  return (
    <MainContain id={idSection} colors={colorsWeb}>
      <SectionTitle
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <span className="line-width" />
        <h2>{title}</h2>
      </SectionTitle>
      <div>{element}</div>
    </MainContain>
  )
}

export default Section
