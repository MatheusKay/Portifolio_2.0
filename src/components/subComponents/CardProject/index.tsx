import { useDispatch, useSelector } from 'react-redux'

import { ProjectButton, ProjectContain, ProjectDesc } from './style'

import { RootReducer } from '../../../store'
import { openModal } from '../../../store/reducers/states'
import { ProjectsType } from '../../../bancoProjetos'

type Props = {
  title: string
  body: string
  imageLogo: string
  linkProject: string
  project: ProjectsType
}

const CardProject = ({
  title,
  body,
  imageLogo,
  linkProject,
  project
}: Props) => {
  const { colorsWeb, modeName } = useSelector((s: RootReducer) => s.states)

  const dispatch = useDispatch()

  return (
    <ProjectContain
      colors={colorsWeb}
      initial={{ scale: 0 }}
      whileInView={{ scale: 0.9 }}
      transition={{ duration: 2 }}
    >
      <img src={imageLogo} alt="" />
      <ProjectDesc modeName={modeName}>
        <h3>{title}</h3>
        <p>{body}</p>
        <ProjectButton>
          <a href={linkProject} target="_blank" rel="noreferrer">
            View Project
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </ProjectButton>
        <ProjectButton onClick={() => dispatch(openModal(project))}>
          More info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </ProjectButton>
      </ProjectDesc>
    </ProjectContain>
  )
}

export default CardProject
