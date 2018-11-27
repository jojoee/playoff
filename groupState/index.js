import GroupState, { Team } from './groupState'
import './index.scss'

const groupA = new GroupState(document.getElementById('group-a'), 'Group A', 3, [
  new Team('Team Liquid', 'https://d1u5p3l4wpay3k.cloudfront.net/lol_gamepedia/thumb/6/69/ATLAS_Logo.png/300px-ATLAS_Logo.png?version=e2eed70b7c18b88e5574b46b083868c0', 13, 3),
  new Team('Evil Geniuses', 'https://d1u5p3l4wpay3k.cloudfront.net/lol_gamepedia/5/5e/IsurusGamingLogo.png', 13, 3),
  new Team('PSG.LGD', 'https://g2e-gamers2mediasl.netdna-ssl.com/wp-content/uploads/2017/03/pride.png', 11, 5),
  new Team('OG', 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/ca/GIANTS_Gaming_logo_2014.png?version=a4c9a402c3c093ce26cf8710d13dc315', 9, 7),
  new Team('Fnatic', 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Team_Curse_eSports_Logo_2015.png/200px-Team_Curse_eSports_Logo_2015.png', 7, 9)
])
const groupB = new GroupState(document.getElementById('group-b'), 'Group B', 3, [
  new Team('VGJ.Storm', 'https://upload.wikimedia.org/wikipedia/de/5/59/Copenhagen-Wolves-logo.png', 12, 4),
  new Team('Virtus.pro', 'https://www.tipify.gg/wp-content/uploads/2017/03/300px-Furious_Gaminglogo_square.png', 10, 6),
  new Team('Team Secret', 'https://d1u5p3l4wpay3k.cloudfront.net/lol_gamepedia/thumb/6/62/Brave_e-Sports.png/300px-Brave_e-Sports.png?version=957c9974d868a7db48f57dad1e481628', 9, 8),
  new Team('OpTic Gaming', 'https://edb-cdn2-prod-tqgiyve.stackpathdns.com/teams/icons/0f6e2b86-ca95-11e7-b3b3-0ec39221f676.png', 8, 8),
  new Team('Newbee', 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/9/94/Lyon_Gaminglogo_square.png', 8, 8)
])

document.addEventListener('DOMContentLoaded', () => {
  groupA.render()
  groupB.render()
})
