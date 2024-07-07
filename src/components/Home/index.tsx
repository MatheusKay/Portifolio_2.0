import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import {
  HomeContainer,
  HomeInfos,
  HomeBackgroundImage,
  HomeButtonCv
} from './style'

import { RootReducer } from '../../store'

const Home = () => {
  const { colorsWeb } = useSelector((s: RootReducer) => s.states)

  const s = {
    initial: {
      opacity: 0,
      x: -100
    },
    animate: {
      opacity: 1,
      x: 0
    }
  }

  return (
    <HomeContainer colors={colorsWeb}>
      <HomeInfos>
        <div>
          <motion.h1
            initial={s.initial}
            whileInView={s.animate}
            transition={{ duration: 1 }}
          >
            Me chamo, <span>Matheus Kayque</span>
          </motion.h1>
          <motion.h3
            initial={s.initial}
            whileInView={s.animate}
            transition={{ duration: 2 }}
          >
            Desenvolvedor Front-end
          </motion.h3>
        </div>
        <HomeButtonCv
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          Visualizar Cv
        </HomeButtonCv>
      </HomeInfos>

      <HomeBackgroundImage
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div></div>
      </HomeBackgroundImage>
    </HomeContainer>
  )
}

export default Home
