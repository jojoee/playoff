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
  constructor (element, name = '', winnerOrder, teams = []) {
    this._element = element
    this._name = name
    this._winnerOrder = winnerOrder
    this._teams = {}
    teams.forEach(team => {
      this._teams[team.name] = team
    })
    this.render()
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

  render () {
    const teams = this.getTeams()
    const cols = teams.map((team, i) => {
      return `
        <tr class='${i < this._winnerOrder ? 'success' : 'danger'}'>
          <td>${i + 1}</td>
          <td>
            <img src='${team.logo}' width='40' />
          </td>
          <td>${team.name}</td>
          <td class='text-center'>${team.win} - ${team.lose}</td>
        </tr>
      `
    }).join('')

    this._element.innerHTML = `
      <table class="playoff-table">
        <thead>
          <tr>
            <th colspan="4">${this._name}</th>
          </tr>
        </thead>
        <tbody>${cols}</tbody>
      </table>
    `
  }
}
