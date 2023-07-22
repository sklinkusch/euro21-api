const { makeTable, getKoTeam, getLoser, localeName } = require("../helpers");

const groupAMatches = [
  {
    teams: ["NG", "KP"],
    goals: [0, 3],
    fairPlay: [2, 2],
    date: "2003-09-20T18:45:00Z"
  },
  {
    teams: ["US", "SE"],
    goals: [3, 1],
    fairPlay: [2, 1],
    date: "2003-09-21T16:30:00Z"
  },
  {
    teams: ["SE", "KP"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2003-09-25T20:45:00Z"
  },
  {
    teams: ["US", "NG"],
    goals: [5, 0],
    fairPlay: [0, 1],
    date: "2003-09-25T23:30:00Z"
  },
  {
    teams: ["SE", "NG"],
    goals: [3, 0],
    fairPlay: [0, 0],
    date: "2003-09-28T17:00:00Z"
  },
  {
    teams: ["KP", "US"],
    goals: [0, 3],
    fairPlay: [2, 2],
    date: "2003-09-28T19:45:00Z"
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["NO", "FR"],
    goals: [2, 0],
    fairPlay: [2, 0],
    date: "2003-09-20T16:00:00Z"
  },
  {
    teams: ["BR", "KR"],
    goals: [3, 0],
    fairPlay: [1, 2],
    date: "2003-09-21T19:15:00Z"
  },
  {
    teams: ["NO", "BR"],
    goals: [1, 4],
    fairPlay: [1, 1],
    date: "2003-09-24T21:00:00Z"
  },
  {
    teams: ["FR", "KR"],
    goals: [1, 0],
    fairPlay: [2, 2],
    date: "2003-09-24T23:45:00Z"
  },
  {
    teams: ["KR", "NO"],
    goals: [1, 7],
    fairPlay: [0, 0],
    date: "2003-09-27T16:45:00Z"
  },
  {
    teams: ["FR", "BR"],
    goals: [1, 1],
    fairPlay: [1, 1],
    date: "2003-09-27T16:45:00Z"
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["DE", "CA"],
    goals: [4, 1],
    fairPlay: [2, 2],
    date: "2003-09-20T21:45:00Z"
  },
  {
    teams: ["JP", "AR"],
    goals: [6, 0],
    fairPlay: [0, 6],
    date: "2003-09-21T00:30:00Z"
  },
  {
    teams: ["DE", "JP"],
    goals: [3, 0],
    fairPlay: [1, 0],
    date: "2003-09-24T21:45:00Z"
  },
  {
    teams: ["CA", "AR"],
    goals: [3, 0],
    fairPlay: [3, 1],
    date: "2003-09-25T00:30:00Z"
  },
  {
    teams: ["CA", "JP"],
    goals: [3, 1],
    fairPlay: [1, 0],
    date: "2003-09-27T19:30:00Z"
  },
  {
    teams: ["AR", "DE"],
    goals: [1, 6],
    fairPlay: [0, 0],
    date: "2003-09-27T19:30:00Z"
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["AU", "RU"],
    goals: [1, 2],
    fairPlay: [0, 2],
    date: "2003-09-21T21:30:00Z"
  },
  {
    teams: ["CN", "GH"],
    goals: [1, 0],
    fairPlay: [0, 1],
    date: "2003-09-22T00:15:00Z"
  },
  {
    teams: ["GH", "RU"],
    goals: [0, 3],
    fairPlay: [0, 0],
    date: "2003-09-25T20:15:00Z"
  },
  {
    teams: ["CN", "AU"],
    goals: [1, 1],
    fairPlay: [1, 2],
    date: "2003-09-25T23:00:00Z"
  },
  {
    teams: ["GH", "AU"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2003-09-28T21:15:00Z"
  },
  {
    teams: ["CN", "RU"],
    goals: [1, 0],
    fairPlay: [0, 1],
    date: "2003-09-29T00:00:00Z"
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

const teamsVF1 = [first[1], second[0]];
const goalsVF1 = [1, 2];
const addVF1 = () => null;
const teamsVF2 = [first[0], second[1]];
const goalsVF2 = [1, 0];
const addVF2 = () => null;
const teamsVF3 = [first[2], second[3]];
const goalsVF3 = [7, 1];
const addVF3 = () => null;
const teamsVF4 = [first[3], second[2]];
const goalsVF4 = [0, 1];
const addVF4 = () => null;

const teamsHF1 = [getKoTeam(teamsVF2, goalsVF2), getKoTeam(teamsVF3, goalsVF3)];
const goalsHF1 = [0, 3];
const addHF1 = () => null;
const teamsHF2 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF4, goalsVF4)];
const goalsHF2 = [2, 1];
const addHF2 = () => null;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [3, 1];
const add3P = () => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [2, 1];
const addF = (lang) => `(1:1) ${localeName("GoldenGoal", lang)}`;

const champion = getKoTeam(teamsF, goalsF);

const data = (lang) => {
  return {
    host: ["US"],
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
        date: "2003-10-01T20:30:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2003-10-01T23:30:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2003-10-02T20:30:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2003-10-02T23:30:00Z"
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
