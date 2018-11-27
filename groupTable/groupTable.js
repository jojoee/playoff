import Team from '../src/Team'

export default class GroupTable {
  constructor (element, name = '', winnerOrder, teams = []) {
    this.element = element
    this.name = name
    this.winnerOrder = winnerOrder
    this.team = {}
    teams.forEach(({ name, logo, score }) => {
      this.team[name] = new Team(name, { logo, scores: [[score.win, score.lose]] })
    })
  }

  getTeams () {
    const teams = Object.keys(this.team).map(key => this.teams[key])
    return teams.sort((a, b) => {
      // score index 0 should have. because we already create at constructor.
      const aScoreKey = Object.keys(a.score)[0]
      const bScoreKey = Object.keys(b.score)[0]

      return b.score[bScoreKey].win - a.score[aScoreKey].win
    })
  }

  render () {
    // const teams = this.getTeams()
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
      <table class="playoff-table">
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
