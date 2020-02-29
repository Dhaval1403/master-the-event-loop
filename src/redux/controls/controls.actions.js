import { PLAY_ANIMATION, PAUSE_ANIMATION, STOP_ANIMATION } from './controles.types'

export const playAnimation = () => ({
  type: PLAY_ANIMATION
})

export const pauseAnimation = () => ({
  type: PAUSE_ANIMATION
})

export const stopAnimation = () => ({
  type: STOP_ANIMATION
})