import { LOGO, ROUND } from '../config/constants'

class Team {
  constructor (name = '', { logo = LOGO, scores = [] }) {
    this.name = name
    this.logo = logo
    this.score = {}
    scores.forEach(([win = 0, lose = 0], i) => {
      // [ [ 1, 3 ], [ 2, 3 ] ] => score should same this
      this.score[ROUND + (i + 1)] = { win, lose }
    })
  }
}

export default Team
