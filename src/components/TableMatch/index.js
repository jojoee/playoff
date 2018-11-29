// import Team from '../../services/Team'
import './index.scss'

class TableMatch {
  constructor (element) {
    this.element = element
  }

  render () {
    this.element.innerHTML = `
      <div>cascacacas</div>
    `
  }
}

const Renderer = (element, options) => {
  const component = new TableMatch(element)
  component.render()
}

export default Renderer
