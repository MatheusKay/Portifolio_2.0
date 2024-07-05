import { useSelector } from 'react-redux'
import {
  HomeContainer,
  HomeInfos,
  HomeBackgroundImage,
  HomeButtonCv
} from './style'

import { RootReducer } from '../../store'

const Home = () => {
  const { colorsWeb } = useSelector((s: RootReducer) => s.states)

  return (
    <HomeContainer colors={colorsWeb}>
      <HomeInfos>
        <div>
          <h1>
            Me chamo, <span>Matheus Kayque</span>
          </h1>
          <h3>Desenvolvedor Front-end</h3>
        </div>
        <HomeButtonCv>Visualizar Cv</HomeButtonCv>
      </HomeInfos>

      <HomeBackgroundImage>
        <div></div>
      </HomeBackgroundImage>
    </HomeContainer>
  )
}

export default Home
