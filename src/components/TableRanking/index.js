import Team from '../../services/Team'
import './index.scss'

class TableRanking {
  constructor (element, name = '', winnerOrder, teams = []) {
    this.element = element
    this.name = name
    this.winnerOrder = winnerOrder
    this.team = {}
    teams.forEach(({ name, logo, score }) => {
      this.team[name] = new Team(name, { logo, scores: [[score.win, score.lose]] })
    })
  }

  render () {
    const teams = Object.keys(this.team).map(key => this.team[key])
    const cols = teams.map(({ name, logo, score }, i) => {
      const scoreKey = Object.keys(score)[0]
      return `
        <tr class='${i < this.winnerOrder ? 'success' : 'danger'}'>
          <td>${i + 1}</td>
          <td>
            <img src='${logo}' />
          </td>
          <td>${name}</td>
          <td class='text-center'>${score[scoreKey].win} - ${score[scoreKey].lose}</td>
        </tr>
      `
    }).join('')

    this.element.innerHTML = `
      <table class="playoff-table-ranking">
        <thead>
          <tr>
            <th colspan='4'>${this.name}</th>
          </tr>
        </thead>
        <tbody>${cols}</tbody>
      </table>
    `
  }
}

const Renderer = (element, options) => {
  const groupTable = new TableRanking(element, options.name, options.winnerOrder, options.teams)
  groupTable.render()
}

export default Renderer
