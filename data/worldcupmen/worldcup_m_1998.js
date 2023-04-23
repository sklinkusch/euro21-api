const { localeName, makeTable, getKoTeam, getLoser } = require("../helpers");

const groupAMatches = [
  {
    teams: ["BR", "GB-SCT"],
    goals: [2, 1],
    fairPlay: [2, 1],
    date: "1998-06-10T15:30:00Z"
  },
  {
    teams: ["MA", "NO"],
    goals: [2, 2],
    fairPlay: [1, 0],
    date: "1998-06-10T19:00:00Z"
  },
  {
    teams: ["GB-SCT", "NO"],
    goals: [1, 1],
    fairPlay: [2, 2],
    date: "1998-06-16T15:30:00Z"
  },
  {
    teams: ["BR", "MA"],
    goals: [3, 0],
    fairPlay: [2, 2],
    date: "1998-06-16T19:00:00Z"
  },
  {
    teams: ["BR", "NO"],
    goals: [1, 2],
    fairPlay: [0, 2],
    date: "1998-06-23T19:00:00Z"
  },
  {
    teams: ["GB-SCT", "MA"],
    goals: [0, 3],
    fairPlay: [4, 1],
    date: "1998-06-23T19:00:00Z"
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["IT", "CL"],
    goals: [2, 2],
    fairPlay: [2, 3],
    date: "1998-06-11T15:30:00Z"
  },
  {
    teams: ["CM", "AT"],
    goals: [1, 1],
    fairPlay: [1, 1],
    date: "1998-06-11T19:00:00Z"
  },
  {
    teams: ["CL", "AT"],
    goals: [1, 1],
    fairPlay: [4, 1],
    date: "1998-06-17T15:30:00Z"
  },
  {
    teams: ["IT", "CM"],
    goals: [3, 0],
    fairPlay: [2, 7],
    date: "1998-06-17T19:00:00Z"
  },
  {
    teams: ["IT", "AT"],
    goals: [2, 1],
    fairPlay: [1, 3],
    date: "1998-06-23T14:00:00Z"
  },
  {
    teams: ["CL", "CM"],
    goals: [1, 1],
    fairPlay: [4, 7],
    date: "1998-06-23T14:00:00Z"
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["SA", "DK"],
    goals: [0, 1],
    fairPlay: [1, 3],
    date: "1998-06-12T15:30:00Z"
  },
  {
    teams: ["FR", "ZA"],
    goals: [3, 0],
    fairPlay: [3, 1],
    date: "1998-06-12T19:00:00Z"
  },
  {
    teams: ["FR", "SA"],
    goals: [4, 0],
    fairPlay: [5, 5],
    date: "1998-06-18T15:30:00Z"
  },
  {
    teams: ["ZA", "DK"],
    goals: [1, 1],
    fairPlay: [7, 9],
    date: "1998-06-18T19:00:00Z"
  },
  {
    teams: ["FR", "DK"],
    goals: [2, 1],
    fairPlay: [2, 2],
    date: "1998-06-24T14:00:00Z"
  },
  {
    teams: ["ZA", "SA"],
    goals: [2, 2],
    fairPlay: [2, 1],
    date: "1998-06-24T14:00:00Z"
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["PY", "BG"],
    goals: [0, 0],
    fairPlay: [1, 4],
    date: "1998-06-12T12:30:00Z"
  },
  {
    teams: ["ES", "NG"],
    goals: [2, 3],
    fairPlay: [3, 1],
    date: "1998-06-13T12:30:00Z"
  },
  {
    teams: ["NG", "BG"],
    goals: [1, 0],
    fairPlay: [4, 2],
    date: "1998-06-19T15:30:00Z"
  },
  {
    teams: ["ES", "PY"],
    goals: [0, 0],
    fairPlay: [2, 2],
    date: "1998-06-19T19:00:00Z"
  },
  {
    teams: ["ES", "BG"],
    goals: [6, 1],
    fairPlay: [2, 2],
    date: "1998-06-24T19:00:00Z"
  },
  {
    teams: ["NG", "PY"],
    goals: [1, 3],
    fairPlay: [2, 0],
    date: "1998-06-24T19:00:00Z"
  }
];

const groupDTable = makeTable(groupDMatches);

const groupEMatches = [
  {
    teams: ["KR", "MX"],
    goals: [1, 3],
    fairPlay: [4, 2],
    date: "1998-06-13T15:30:00Z"
  },
  {
    teams: ["NL", "BE"],
    goals: [0, 0],
    fairPlay: [3, 2],
    date: "1998-06-13T19:00:00Z"
  },
  {
    teams: ["BE", "MX"],
    goals: [2, 2],
    fairPlay: [4, 5],
    date: "1998-06-20T15:30:00Z"
  },
  {
    teams: ["NL", "KR"],
    goals: [5, 0],
    fairPlay: [0, 2],
    date: "1998-06-20T19:00:00Z"
  },
  {
    teams: ["BE", "KR"],
    goals: [1, 1],
    fairPlay: [1, 4],
    date: "1998-06-25T14:00:00Z"
  },
  {
    teams: ["NL", "MX"],
    goals: [2, 2],
    fairPlay: [2, 7],
    date: "1998-06-25T14:00:00Z"
  }
];

const groupETable = makeTable(groupEMatches);

const groupFMatches = [
  {
    teams: ["YU-BR", "IR"],
    goals: [1, 0],
    fairPlay: [2, 0],
    date: "1998-06-14T15:30:00Z"
  },
  {
    teams: ["DE", "US"],
    goals: [2, 0],
    fairPlay: [3, 2],
    date: "1998-06-15T19:00:00Z"
  },
  {
    teams: ["DE", "YU-BR"],
    goals: [2, 2],
    fairPlay: [1, 0],
    date: "1998-06-21T12:30:00Z"
  },
  {
    teams: ["US", "IR"],
    goals: [1, 2],
    fairPlay: [1, 2],
    date: "1998-06-21T19:00:00Z"
  },
  {
    teams: ["DE", "IR"],
    goals: [2, 0],
    fairPlay: [2, 1],
    date: "1998-06-25T19:00:00Z"
  },
  {
    teams: ["US", "YU-BR"],
    goals: [0, 1],
    fairPlay: [1, 2],
    date: "1998-06-25T19:00:00Z"
  }
];

const groupFTable = makeTable(groupFMatches);

const groupGMatches = [
  {
    teams: ["GB-ENG", "TN"],
    goals: [2, 0],
    fairPlay: [1, 3],
    date: "1998-06-15T12:30:00Z"
  },
  {
    teams: ["RO", "CO"],
    goals: [1, 0],
    fairPlay: [3, 1],
    date: "1998-06-15T15:30:00Z"
  },
  {
    teams: ["CO", "TN"],
    goals: [1, 0],
    fairPlay: [1, 2],
    date: "1998-06-22T15:30:00Z"
  },
  {
    teams: ["RO", "GB-ENG"],
    goals: [2, 1],
    fairPlay: [4, 0],
    date: "1998-06-22T19:00:00Z"
  },
  {
    teams: ["RO", "TN"],
    goals: [1, 1],
    fairPlay: [0, 2],
    date: "1998-06-26T19:00:00Z"
  },
  {
    teams: ["CO", "GB-ENG"],
    goals: [0, 2],
    fairPlay: [3, 2],
    date: "1998-06-26T19:00:00Z"
  }
];

const groupGTable = makeTable(groupGMatches);

const groupHMatches = [
  {
    teams: ["AR", "JP"],
    goals: [1, 0],
    fairPlay: [0, 3],
    date: "1998-06-14T12:30:00Z"
  },
  {
    teams: ["JM", "HR"],
    goals: [1, 3],
    fairPlay: [1, 2],
    date: "1998-06-14T19:00:00Z"
  },
  {
    teams: ["JP", "HR"],
    goals: [0, 1],
    fairPlay: [3, 2],
    date: "1998-06-20T12:30:00Z"
  },
  {
    teams: ["AR", "JM"],
    goals: [5, 0],
    fairPlay: [1, 3],
    date: "1998-06-21T15:30:00Z"
  },
  {
    teams: ["JP", "JM"],
    goals: [1, 2],
    fairPlay: [1, 2],
    date: "1998-06-26T14:00:00"
  },
  {
    teams: ["AR", "HR"],
    goals: [1, 0],
    fairPlay: [3, 4],
    date: "1998-06-26T14:00:00"
  }
];

const groupHTable = makeTable(groupHMatches);

const mergedGroupTables = [
  groupATable,
  groupBTable,
  groupCTable,
  groupDTable,
  groupETable,
  groupFTable,
  groupGTable,
  groupHTable
];

const first = mergedGroupTables.map((group) => group[0].team);
const second = mergedGroupTables.map((group) => group[1].team);

const teamsAF1 = [first[1], second[0]];
const goalsAF1 = [1, 0];
const addAF1 = () => null;
const teamsAF2 = [first[0], second[1]];
const goalsAF2 = [4, 1];
const addAF2 = () => null;
const teamsAF3 = [first[2], second[3]];
const goalsAF3 = [1, 0];
const addAF3 = (lang) => `(0:0) ${localeName("GoldenGoal", lang)}`;
const teamsAF4 = [first[3], second[2]];
const goalsAF4 = [1, 4];
const addAF4 = () => null;
const teamsAF5 = [first[5], second[4]];
const goalsAF5 = [2, 1];
const addAF5 = () => null;
const teamsAF6 = [first[4], second[5]];
const goalsAF6 = [2, 1];
const addAF6 = () => null;
const teamsAF7 = [first[6], second[7]];
const goalsAF7 = [0, 1];
const addAF7 = () => null;
const teamsAF8 = [first[7], second[6]];
const goalsAF8 = [4, 3];
const addAF8 = (lang) =>
  `${localeName("Penalties", lang)}, 2:2 (2:2) ${localeName(
    "ExtraTime",
    lang
  )}`;

const teamsVF1 = [getKoTeam(teamsAF1, goalsAF1), getKoTeam(teamsAF3, goalsAF3)];
const goalsVF1 = [3, 4];
const addVF1 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;
const teamsVF2 = [getKoTeam(teamsAF2, goalsAF2), getKoTeam(teamsAF4, goalsAF4)];
const goalsVF2 = [3, 2];
const addVF2 = () => null;
const teamsVF3 = [getKoTeam(teamsAF6, goalsAF6), getKoTeam(teamsAF8, goalsAF8)];
const goalsVF3 = [2, 1];
const addVF3 = () => null;
const teamsVF4 = [getKoTeam(teamsAF5, goalsAF5), getKoTeam(teamsAF7, goalsAF7)];
const goalsVF4 = [0, 3];
const addVF4 = () => null;

const teamsHF1 = [getKoTeam(teamsVF2, goalsVF2), getKoTeam(teamsVF3, goalsVF3)];
const goalsHF1 = [4, 2];
const addHF1 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;
const teamsHF2 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF4, goalsVF4)];
const goalsHF2 = [2, 1];
const addHF2 = () => null;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [1, 2];
const add3P = () => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [0, 3];
const addF = () => null;

const champion = getKoTeam(teamsF, goalsF);

const data = (lang) => {
  return {
    host: ["FR"],
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
      },
      E: {
        matches: groupEMatches,
        table: groupETable
      },
      F: {
        matches: groupFMatches,
        table: groupFTable
      },
      G: {
        matches: groupGMatches,
        table: groupGTable
      },
      H: {
        matches: groupHMatches,
        table: groupHTable
      }
    },
    AF: [
      {
        teams: teamsAF1,
        goals: goalsAF1,
        add: addAF1(lang),
        date: "1998-06-27T14:30:00Z"
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "1998-06-27T19:00:00Z"
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "1998-06-28T14:30:00Z"
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "1998-06-28T19:00:00Z"
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "1998-06-29T14:30:00Z"
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "1998-06-29T19:00:00Z"
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "1998-06-30T14:30:00Z"
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "1998-06-30T19:00:00Z"
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "1998-07-03T14:30:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "1998-07-03T19:00:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "1998-07-04T14:30:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "1998-07-04T19:00:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "1998-07-07T19:00:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "1998-07-08T19:00:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "1998-07-11T19:00:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "1998-07-12T19:00:00Z"
    },
    champion: champion
  };
};

module.exports = data;
