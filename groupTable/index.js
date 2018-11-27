import GroupTable from './groupTable'
import './index.scss'

const groupA = new GroupTable(document.getElementById('group-a'), 'Group A', 3, [
  {
    name: 'Team Liquid',
    logo: 'https://d1u5p3l4wpay3k.cloudfront.net/lol_gamepedia/thumb/6/69/ATLAS_Logo.png/300px-ATLAS_Logo.png?version=e2eed70b7c18b88e5574b46b083868c0',
    score: { win: 13, lose: 3 }
  },
  {
    name: 'Evil Geniuses',
    logo: 'https://d1u5p3l4wpay3k.cloudfront.net/lol_gamepedia/5/5e/IsurusGamingLogo.png',
    score: { win: 12, lose: 3 }
  },
  {
    name: 'PSG.LGD',
    logo: 'https://g2e-gamers2mediasl.netdna-ssl.com/wp-content/uploads/2017/03/pride.png',
    score: { win: 11, lose: 5 }
  },
  {
    name: 'OG',
    logo: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/c/ca/GIANTS_Gaming_logo_2014.png?version=a4c9a402c3c093ce26cf8710d13dc315',
    score: { win: 9, lose: 7 }
  },
  {
    name: 'Fnatic',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Team_Curse_eSports_Logo_2015.png/200px-Team_Curse_eSports_Logo_2015.png',
    score: { win: 400, lose: 9 }
  }
])

const groupB = new GroupTable(document.getElementById('group-b'), 'Group B', 3, [
  {
    name: 'VGJ.Storm',
    logo: 'https://upload.wikimedia.org/wikipedia/de/5/59/Copenhagen-Wolves-logo.png',
    score: { win: 12, lose: 4 }
  },
  {
    name: 'Virtus.pro',
    logo: 'https://www.tipify.gg/wp-content/uploads/2017/03/300px-Furious_Gaminglogo_square.png',
    score: { win: 10, lose: 6 }
  },
  {
    name: 'Team Secret',
    logo: 'https://d1u5p3l4wpay3k.cloudfront.net/lol_gamepedia/thumb/6/62/Brave_e-Sports.png/300px-Brave_e-Sports.png?version=957c9974d868a7db48f57dad1e481628',
    score: { win: 9, lose: 8 }
  },
  {
    name: 'OpTic Gaming',
    logo: 'https://edb-cdn2-prod-tqgiyve.stackpathdns.com/teams/icons/0f6e2b86-ca95-11e7-b3b3-0ec39221f676.png',
    score: { win: 8, lose: 8 }
  },
  {
    name: 'Newbee',
    logo: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/9/94/Lyon_Gaminglogo_square.png',
    score: { win: 300, lose: 8 }
  }
])

document.addEventListener('DOMContentLoaded', () => {
  groupA.render()
  groupB.render()
})
