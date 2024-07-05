import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { colors } from '../../styles/globals'

import { ProjectsType } from '../../bancoProjetos'

export const colorWeb = {
  backgroundColor: colors.black.blackTone4,
  titleColor: colors.red.redTone1,
  textColor: colors.white.whiteTone1,
  colorDetails: colors.red.redTone2,
  colorDetailsText: colors.white.whiteTone2
}

type StateGlobals = {
  screenMode: boolean
  modeName: string
  menuMobileState: boolean
  colorsWeb: {
    backgroundColor: string
    backgroundMenuMobile: string
    titleColor: string
    textColor: string
    colorDetails: string
    colorDetailsText: string
  }
  modalProject: {
    title: string
    technology: string[]
    links: {
      repository: string
      webLink: string
    }
    description: string[]
    representationImage: string
  }
  modalIsOpen: boolean
}

const initialState: StateGlobals = {
  menuMobileState: false,
  screenMode: false,
  modeName: 'dark',
  colorsWeb: {
    backgroundColor: colors.black.blackTone4,
    backgroundMenuMobile: colors.black.blackTone3,
    titleColor: colors.red.redTone1,
    textColor: colors.white.whiteTone1,
    colorDetails: colors.red.redTone2,
    colorDetailsText: colors.white.whiteTone2
  },
  modalProject: {
    title: '',
    technology: [],
    links: {
      repository: '',
      webLink: ''
    },
    description: [],
    representationImage: ''
  },
  modalIsOpen: false
}

const stateGlobals = createSlice({
  name: 'States',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.screenMode = !state.screenMode

      if (state.screenMode == true) {
        state.modeName = 'clear'
        ;(state.colorsWeb.backgroundColor = colors.white.whiteTone1),
          (state.colorsWeb.backgroundMenuMobile = colors.white.whiteTone2),
          (state.colorsWeb.titleColor = colors.red.redTone3),
          (state.colorsWeb.textColor = colors.black.blackTone4),
          (state.colorsWeb.colorDetails = colors.red.redTone5),
          (state.colorsWeb.colorDetailsText = colors.black.blackTone3)
      } else {
        state.modeName = 'dark'
        ;(state.colorsWeb.backgroundColor = colors.black.blackTone4),
          (state.colorsWeb.backgroundMenuMobile = colors.black.blackTone3),
          (state.colorsWeb.titleColor = colors.red.redTone1),
          (state.colorsWeb.textColor = colors.white.whiteTone1),
          (state.colorsWeb.colorDetails = colors.red.redTone2),
          (state.colorsWeb.colorDetailsText = colors.white.whiteTone2)
      }
    },
    openOrClose: (state) => {
      state.menuMobileState = !state.menuMobileState
    },
    openModal: (state, action: PayloadAction<ProjectsType>) => {
      state.modalIsOpen = true

      state.modalProject = action.payload
    },
    closeModal: (state) => {
      state.modalIsOpen = false
    }
  }
})

export const { changeMode, openOrClose, openModal, closeModal } =
  stateGlobals.actions

export default stateGlobals.reducer
