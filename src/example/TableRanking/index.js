import TableRanking from '../../components/TableRanking'
import groupData from './data.json'

document.addEventListener('DOMContentLoaded', () => {
  const [groupA, groupB] = groupData
  TableRanking(document.getElementById('group-a'), groupA)
  TableRanking(document.getElementById('group-b'), groupB)
})
