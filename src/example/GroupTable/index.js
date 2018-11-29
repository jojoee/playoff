import GroupTable from '../../components/GroupTable'
import group from './group.json'

document.addEventListener('DOMContentLoaded', () => {
  const [dataA, dataB] = group
  GroupTable(document.getElementById('group-a'), dataA)
  GroupTable(document.getElementById('group-b'), dataB)
})
