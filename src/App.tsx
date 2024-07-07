import { Provider } from 'react-redux'

import Header from './components/Header'
import MenuMobile from './components/MenuMobile'
import Home from './components/Home'
import About from './components/About'
import SectionSkills from './components/SectionSkills'
import SectionsProjects from './components/SectionProjects'
import Footer from './components/Footer'

import { GlobalStyleComponent } from './styles/globals'

import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <GlobalStyleComponent />
        <Header />
        <MenuMobile />
        <Home />
        <About />
        <SectionSkills />
        <SectionsProjects />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
