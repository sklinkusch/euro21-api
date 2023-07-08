const { localeName, makeTable, getKoTeam, getLoser } = require("../helpers");

const groupAMatches = [
  {
    teams: ["NG", "FR"],
    goals: [0, 1],
    fairPlay: [0, 0],
    date: "2011-06-26T13:00:00Z"
  },
  {
    teams: ["DE", "CA"],
    goals: [2, 1],
    fairPlay: [2, 0],
    date: "2011-06-26T16:00:00Z"
  },
  {
    teams: ["CA", "FR"],
    goals: [0, 4],
    fairPlay: [1, 1],
    date: "2011-06-30T16:00:00Z"
  },
  {
    teams: ["DE", "NG"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2011-06-30T18:45:00Z"
  },
  {
    teams: ["FR", "DE"],
    goals: [2, 4],
    fairPlay: [6, 2],
    date: "2011-07-05T18:45:00Z"
  },
  {
    teams: ["CA", "NG"],
    goals: [0, 1],
    fairPlay: [0, 1],
    date: "2011-07-05T18:45:00Z"
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["JP", "NZ"],
    goals: [2, 1],
    fairPlay: [0, 3],
    date: "2011-06-27T13:00:00Z"
  },
  {
    teams: ["MX", "GB-ENG"],
    goals: [1, 1],
    fairPlay: [1, 1],
    date: "2011-06-27T16:00:00Z"
  },
  {
    teams: ["JP", "MX"],
    goals: [4, 0],
    fairPlay: [0, 0],
    date: "2011-07-01T13:00:00Z"
  },
  {
    teams: ["NZ", "GB-ENG"],
    goals: [1, 2],
    fairPlay: [0, 0],
    date: "2011-07-01T16:15:00Z"
  },
  {
    teams: ["GB-ENG", "JP"],
    goals: [2, 0],
    fairPlay: [0, 0],
    date: "2011-07-01T16:15:00Z"
  },
  {
    teams: ["NZ", "MX"],
    goals: [2, 2],
    fairPlay: [1, 1],
    date: "2011-07-01T16:15:00Z"
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["CO", "SE"],
    goals: [0, 1],
    fairPlay: [0, 1],
    date: "2011-06-28T13:00:00Z"
  },
  {
    teams: ["US", "KP"],
    goals: [2, 0],
    fairPlay: [0, 0],
    date: "2011-06-28T16:15:00Z"
  },
  {
    teams: ["KP", "SE"],
    goals: [0, 1],
    fairPlay: [0, 1],
    date: "2011-07-02T12:00:00Z"
  },
  {
    teams: ["US", "CO"],
    goals: [3, 0],
    fairPlay: [1, 0],
    date: "2011-07-02T16:00:00Z"
  },
  {
    teams: ["SE", "US"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2011-07-06T18:45:00Z"
  },
  {
    teams: ["KP", "CO"],
    goals: [0, 0],
    fairPlay: [0, 0],
    date: "2011-07-06T18:45:00Z"
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["NO", "GQ"],
    goals: [1, 0],
    fairPlay: [2, 0],
    date: "2011-06-29T13:00:00Z"
  },
  {
    teams: ["BR", "AU"],
    goals: [1, 0],
    fairPlay: [0, 0],
    date: "2011-06-29T16:15:00Z"
  },
  {
    teams: ["AU", "GQ"],
    goals: [3, 2],
    fairPlay: [1, 3],
    date: "2011-07-03T12:00:00Z"
  },
  {
    teams: ["BR", "NO"],
    goals: [3, 0],
    fairPlay: [1, 0],
    date: "2011-07-03T16:15:00Z"
  },
  {
    teams: ["GQ", "BR"],
    goals: [0, 3],
    fairPlay: [3, 2],
    date: "2011-07-06T16:00:00Z"
  },
  {
    teams: ["AU", "NO"],
    goals: [2, 1],
    fairPlay: [2, 1],
    date: "2011-07-06T16:00:00Z"
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
const goalsVF1 = [3, 4];
const addVF1 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;
const teamsVF2 = [first[0], second[1]];
const goalsVF2 = [0, 1];
const addVF2 = (lang) => `${localeName("ExtraTime", lang)}`;
const teamsVF3 = [first[2], second[3]];
const goalsVF3 = [3, 1];
const addVF3 = () => null;
const teamsVF4 = [first[3], second[2]];
const goalsVF4 = [3, 5];
const addVF4 = (lang) =>
  `${localeName("Penalties", lang)}, 2:2 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;

const teamsHF1 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF4, goalsVF4)];
const goalsHF1 = [1, 3];
const addHF1 = () => null;
const teamsHF2 = [getKoTeam(teamsVF2, goalsVF2), getKoTeam(teamsVF3, goalsVF3)];
const goalsHF2 = [3, 1];
const addHF2 = () => null;

const teams3P = [getLoser(teamsHF2, goalsHF2), getLoser(teamsHF1, goalsHF1)];
const goals3P = [2, 1];
const add3P = () => null;

const teamsF = [getKoTeam(teamsHF2, goalsHF2), getKoTeam(teamsHF1, goalsHF1)];
const goalsF = [3, 1];
const addF = (lang) =>
  `${localeName("Penalties", lang)}, 2:2 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;

const champion = getKoTeam(teamsF, goalsF);

const data = (lang) => {
  return {
    host: ["DE"],
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
        date: "2011-07-09T16:00:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2011-07-09T18:45:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2011-07-10T11:00:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2011-07-10T15:30:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2011-07-13T16:00:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2011-07-13T18:45:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2011-07-16T15:30:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2011-07-17T18:45:00Z"
    },
    champion: champion
  };
};

module.exports = data;
