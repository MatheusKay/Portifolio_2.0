import { useSelector } from 'react-redux'

import CardProject from '../subComponents/CardProject'
import Section from '../subComponents/SectionsLayout'

import { ProjectsContain } from './style'

import { ProjectsList } from '../../bancoProjetos'
import { RootReducer } from '../../store'
import ModalProject from '../ModalProject'

const SectionsProjects = () => {
  const { modalIsOpen } = useSelector((s: RootReducer) => s.states)

  return (
    <>
      <Section
        idSection="project"
        title="Projects"
        element={
          <ProjectsContain>
            {ProjectsList.map((project) => (
              <CardProject
                key={project.title}
                title={project.title}
                body={project.presentationText}
                imageLogo={project.representationImage}
                linkProject={project.links.webLink}
                project={project}
              />
            ))}
          </ProjectsContain>
        }
      />
      {modalIsOpen && <ModalProject />}
    </>
  )
}

export default SectionsProjects
