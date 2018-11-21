import GroupState, { Team } from './groupState'

const groupA = new GroupState('Group A', [
  new Team('Team Liquid', 'https://liquipedia.net/commons/images/c/cd/Liquid2017logo_std.png', 13, 3),
  new Team('Evil Geniuses', 'https://liquipedia.net/commons/images/8/8d/Evil_Geniuses_2018_updated_std.png', 13, 3),
  new Team('PSG.LGD', 'https://liquipedia.net/commons/images/6/61/PSG.LGD_logo_std.png', 11, 5),
  new Team('OG', 'https://liquipedia.net/commons/images/b/bc/OG_RB_logo_std.png', 9, 7),
  new Team('Fnatic', 'https://liquipedia.net/commons/images/4/48/Fnaticlogo_std.png', 7, 9),
])
const groupB = new GroupState('Group B', [
  new Team('VGJ.Storm', 'https://liquipedia.net/commons/images/a/ac/VGJ_Storm_logo_std.png', 12, 4),
  new Team('Virtus.pro', 'https://liquipedia.net/commons/images/2/28/VP_Megafon_std.png', 10, 6),
  new Team('Team Secret', 'https://liquipedia.net/commons/images/a/a7/Secretdotalogo_std.png', 8, 8),
  new Team('OpTic Gaming', 'https://liquipedia.net/commons/images/b/b0/OpTic_Gaminglogo_std.png', 8, 8),
  new Team('Newbee', 'https://liquipedia.net/commons/images/b/b9/Newbeelogo_std.png', 8, 8),
])


document.addEventListener('DOMContentLoaded', () => {
  console.log('Group A', groupA.getGroupName(), groupA.getTeams())
  console.log('--------------------------------')
  console.log('Group B', groupB.getGroupName(), groupB.getTeams())

  groupA.setScore('win', 'Team Liquid', 500)


  // console.log('Group A', groupA.getGroupName(), groupA.getTeams())
  // console.log('--------------------------------')
  // console.log('Group B', groupB.getGroupName(), groupB.getTeams())
})
