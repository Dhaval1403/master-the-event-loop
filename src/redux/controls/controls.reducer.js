import { PLAY_ANIMATION, PAUSE_ANIMATION, STOP_ANIMATION } from './controles.types'


const INITIAL_STATE = {
  isRunning: false
}

export const controlsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAY_ANIMATION:
      return { ...state, isRunning: true };
    case PAUSE_ANIMATION:
    case STOP_ANIMATION:
      return { ...state, isRunning: false };
    default:
      return state
  }
}

