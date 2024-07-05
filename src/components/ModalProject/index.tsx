import { useDispatch, useSelector } from 'react-redux'

import {
  Modal,
  ModalContain,
  ModalContainerButton,
  ModalHeader,
  ModalInfosContain,
  ModalTags,
  ModalInfos,
  ButtonClose
} from './style'

import { RootReducer } from '../../store'
import { closeModal } from '../../store/reducers/states'

const ModalProject = () => {
  const { modalProject, colorsWeb } = useSelector((s: RootReducer) => s.states)

  const dispatch = useDispatch()

  return (
    <ModalContain colors={colorsWeb}>
      <Modal>
        <ModalHeader>
          <img src={modalProject.representationImage} alt="" />
          <ModalInfosContain>
            <ModalInfos>
              <div>
                <div className="title_style">
                  <span />
                  <h2>{modalProject.title}</h2>
                </div>
                <div className="title_style">
                  <span />
                  <h3>Hard Skills</h3>
                </div>
              </div>
              <ModalContainerButton>
                <button>
                  <a
                    href={modalProject.links.webLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View online
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
                </button>
                <button>
                  <a
                    href={modalProject.links.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repository
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
                </button>
              </ModalContainerButton>
            </ModalInfos>
            <ModalTags>
              {modalProject.technology.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </ModalTags>
          </ModalInfosContain>
        </ModalHeader>
        <div className="container_text">
          {modalProject.description.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
        </div>
        <ButtonClose onClick={() => dispatch(closeModal())}>X</ButtonClose>
      </Modal>
    </ModalContain>
  )
}

export default ModalProject
