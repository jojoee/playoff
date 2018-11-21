class Score {
  constructor (win = 0, lose = 0, draw = 0) {
    this.win = win
    this.lose = lose
    this.draw = draw
  }

  setWin (score) {
    if (isNaN(score) || score < 0) return
    this.win = score
  }

  setLose (score) {
    if (isNaN(score) || score < 0) return
    this.lose = score
  }

  setDraw (score) {
    if (isNaN(score) || score < 0) return
    this.draw = score
  }
}

export class Team extends Score {
  constructor (name = '', logo = '', win, lose, draw) {
    super(win, lose, draw)
    this.name = name
    this.logo = logo
  }
}

export default class Group {
  constructor (name = '', teams = []) {
    this._name = name
    this._teams = {}
    teams.forEach(team => {
      this._teams[team.name] = team
    })
  }

  getGroupName () {
    return this._name
  }

  getTeams () {
    const teams = Object.keys(this._teams).map(key => this._teams[key])
    return teams.sort((a, b) => b.win - a.win)
  }

  setScore (type, teamName, score) {
    const team = this._teams[teamName]
    if (!team) return false

    switch (type) {
      case 'win':
        if (this._teams[teamName]) { this._teams[teamName].setWin(score) }
        break
      case 'lose':
        this._teams[teamName].setLose(score)
        break
      case 'draw':
        this._teams[teamName].setDraw(score)
        break
      default:
        break
    }
  }
}
