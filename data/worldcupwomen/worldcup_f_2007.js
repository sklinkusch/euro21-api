const {
  // localeName,
  makeTable,
  getKoTeam,
  getLoser
} = require("../helpers");

const groupAMatches = [
  {
    teams: ["DE", "AR"],
    goals: [11, 0],
    fairPlay: [2, 4],
    date: "2007-09-10T12:00:00Z"
  },
  {
    teams: ["JP", "GB-ENG"],
    goals: [2, 2],
    fairPlay: [0, 2],
    date: "2007-09-11T12:00:00Z"
  },
  {
    teams: ["AR", "JP"],
    goals: [0, 1],
    fairPlay: [0, 1],
    date: "2007-09-14T09:00:00Z"
  },
  {
    teams: ["GB-ENG", "DE"],
    goals: [0, 0],
    fairPlay: [2, 3],
    date: "2007-09-14T12:00:00Z"
  },
  {
    teams: ["DE", "JP"],
    goals: [2, 0],
    fairPlay: [2, 1],
    date: "2007-09-17T12:00:00Z"
  },
  {
    teams: ["GB-ENG", "AR"],
    goals: [6, 1],
    fairPlay: [1, 4],
    date: "2007-09-17T12:00:00Z"
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["US", "KP"],
    goals: [2, 2],
    fairPlay: [1, 1],
    date: "2007-09-11T09:00:00Z"
  },
  {
    teams: ["NG", "SE"],
    goals: [1, 1],
    fairPlay: [0, 1],
    date: "2007-09-11T12:00:00Z"
  },
  {
    teams: ["SE", "US"],
    goals: [0, 2],
    fairPlay: [2, 0],
    date: "2007-09-14T09:00:00Z"
  },
  {
    teams: ["KP", "NG"],
    goals: [2, 0],
    fairPlay: [1, 2],
    date: "2007-09-14T12:00:00Z"
  },
  {
    teams: ["NG", "US"],
    goals: [0, 1],
    fairPlay: [1, 0],
    date: "2007-09-18T12:00:00Z"
  },
  {
    teams: ["KP", "SE"],
    goals: [1, 2],
    fairPlay: [2, 2],
    date: "2007-09-18T12:00:00Z"
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["GH", "AU"],
    goals: [1, 4],
    fairPlay: [0, 3],
    date: "2007-09-12T09:00:00Z"
  },
  {
    teams: ["NO", "CA"],
    goals: [2, 1],
    fairPlay: [0, 0],
    date: "2007-09-12T12:00:00Z"
  },
  {
    teams: ["CA", "GH"],
    goals: [4, 0],
    fairPlay: [1, 3],
    date: "2007-09-15T09:00:00Z"
  },
  {
    teams: ["AU", "NO"],
    goals: [1, 1],
    fairPlay: [0, 0],
    date: "2007-09-15T12:00:00Z"
  },
  {
    teams: ["NO", "GH"],
    goals: [7, 2],
    fairPlay: [0, 2],
    date: "2007-09-20T09:00:00Z"
  },
  {
    teams: ["AU", "CA"],
    goals: [2, 2],
    fairPlay: [1, 1],
    date: "2007-09-20T09:00:00Z"
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["NZ", "BR"],
    goals: [0, 5],
    fairPlay: [1, 0],
    date: "2007-09-12T09:00:00Z"
  },
  {
    teams: ["CN", "DK"],
    goals: [3, 2],
    fairPlay: [0, 2],
    date: "2007-09-12T12:00:00Z"
  },
  {
    teams: ["DK", "NZ"],
    goals: [2, 0],
    fairPlay: [0, 3],
    date: "2007-09-15T09:00:00Z"
  },
  {
    teams: ["BR", "CN"],
    goals: [4, 0],
    fairPlay: [3, 2],
    date: "2007-09-15T12:00:00Z"
  },
  {
    teams: ["CN", "NZ"],
    goals: [2, 0],
    fairPlay: [1, 2],
    date: "2007-09-20T12:00:00Z"
  },
  {
    teams: ["BR", "DK"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2007-09-20T12:00:00Z"
  }
];

const groupDTable = makeTable(groupDMatches);

const mergedGroupTables = [groupATable, groupBTable, groupCTable, groupDTable];

const first = mergedGroupTables.map((group) => {
  const firstTeams = group.filter((team) => team.rank === 1);
  if (firstTeams.length === 0) {
    return group[0].team;
  }
  if (firstTeams.length === 1) {
    return firstTeams[0].team;
  }
  return firstTeams.map((team) => team.team);
});

const second = mergedGroupTables.map((group) => {
  const secondTeams = group.filter((team) => team.rank === 2);
  const firstTeams = group.filter((team) => team.rank === 1);
  const teams =
    secondTeams.length === 0 && firstTeams.length > 0
      ? firstTeams
      : secondTeams;
  if (teams.length === 1) {
    return teams[0].team;
  }
  return teams.map((team) => team.team);
});

const teamsVF1 = [first[0], second[1]];
const goalsVF1 = [3, 0];
const addVF1 = () => null;
const teamsVF2 = [first[1], second[0]];
const goalsVF2 = [3, 0];
const addVF2 = () => null;
const teamsVF3 = [first[2], second[3]];
const goalsVF3 = [1, 0];
const addVF3 = () => null;
const teamsVF4 = [first[3], second[2]];
const goalsVF4 = [3, 2];
const addVF4 = () => null;

const teamsHF1 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF3, goalsVF3)];
const goalsHF1 = [3, 0];
const addHF1 = () => null;
const teamsHF2 = [getKoTeam(teamsVF2, goalsVF2), getKoTeam(teamsVF4, goalsVF4)];
const goalsHF2 = [0, 4];
const addHF2 = () => null;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [1, 4];
const add3P = () => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [2, 0];
const addF = () => null;

const champion = getKoTeam(teamsF, goalsF);

const data = (lang) => {
  return {
    host: ["CN"],
    groups: {
      A: {
        matches: groupAMatches,
        table: groupATable
      },
      B: {
        matches: groupBMatches,
        table: groupBTable
      },
      C: {
        matches: groupCMatches,
        table: groupCTable
      },
      D: {
        matches: groupDMatches,
        table: groupDTable
      }
    },
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2007-09-22T09:00:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2007-09-22T12:00:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2007-09-23T09:00:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2007-09-23T12:00:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2007-09-26T12:00:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2007-09-27T12:00:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2007-09-30T09:00:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2007-09-30T12:00:00Z"
    },
    champion: champion
  };
};

module.exports = data;
