const { localeName, makeTable, getKoTeam, getLoser } = require("../helpers");

const groupAMatches = [
  {
    teams: ["RU", "SA"],
    goals: [5, 0],
    fairPlay: [1, 1],
    date: "2018-06-14T15:00:00Z"
  },
  {
    teams: ["EG", "UY"],
    goals: [0, 1],
    fairPlay: [2, 0],
    date: "2018-06-15T12:00:00Z"
  },
  {
    teams: ["RU", "EG"],
    goals: [3, 1],
    fairPlay: [1, 1],
    date: "2018-06-19T18:00:00Z"
  },
  {
    teams: ["UY", "SA"],
    goals: [1, 0],
    fairPlay: [0, 0],
    date: "2018-06-20T15:00:00Z"
  },
  {
    teams: ["UY", "RU"],
    goals: [3, 0],
    fairPlay: [1, 4],
    date: "2018-06-25T14:00:00Z"
  },
  {
    teams: ["SA", "EG"],
    goals: [2, 1],
    fairPlay: [0, 2],
    date: "2018-06-25T14:00:00Z"
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["MA", "IR"],
    goals: [0, 1],
    fairPlay: [1, 3],
    date: "2018-06-15T15:00:00Z"
  },
  {
    teams: ["PT", "ES"],
    goals: [3, 3],
    fairPlay: [1, 1],
    date: "2018-06-15T18:00:00Z"
  },
  {
    teams: ["PT", "MA"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2018-06-20T12:00:00Z"
  },
  {
    teams: ["IR", "ES"],
    goals: [0, 1],
    fairPlay: [2, 0],
    date: "2018-06-20T18:00:00Z"
  },
  {
    teams: ["IR", "PT"],
    goals: [1, 1],
    fairPlay: [2, 4],
    date: "2018-06-25T18:00:00Z"
  },
  {
    teams: ["ES", "MA"],
    goals: [2, 2],
    fairPlay: [0, 6],
    date: "2018-06-25T18:00:00Z"
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["FR", "AU"],
    goals: [2, 1],
    fairPlay: [1, 3],
    date: "2018-06-16T10:00:00Z"
  },
  {
    teams: ["PE", "DK"],
    goals: [0, 1],
    fairPlay: [1, 2],
    date: "2018-06-16T16:00:00Z"
  },
  {
    teams: ["DK", "AU"],
    goals: [1, 1],
    fairPlay: [2, 0],
    date: "2018-06-21T12:00:00Z"
  },
  {
    teams: ["FR", "PE"],
    goals: [1, 0],
    fairPlay: [2, 2],
    date: "2018-06-21T15:00:00Z"
  },
  {
    teams: ["DK", "FR"],
    goals: [0, 0],
    fairPlay: [1, 0],
    date: "2018-06-26T14:00:00Z"
  },
  {
    teams: ["AU", "PE"],
    goals: [0, 2],
    fairPlay: [4, 2],
    date: "2018-06-26T14:00:00Z"
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["AR", "IS"],
    goals: [1, 1],
    fairPlay: [0, 0],
    date: "2018-06-16T13:00:00Z"
  },
  {
    teams: ["HR", "NG"],
    goals: [2, 0],
    fairPlay: [2, 1],
    date: "2018-06-16T19:00:00Z"
  },
  {
    teams: ["AR", "HR"],
    goals: [0, 3],
    fairPlay: [3, 4],
    date: "2018-06-21T18:00:00Z"
  },
  {
    teams: ["NG", "IS"],
    goals: [2, 0],
    fairPlay: [1, 0],
    date: "2018-06-22T15:00:00Z"
  },
  {
    teams: ["NG", "AR"],
    goals: [1, 2],
    fairPlay: [2, 3],
    date: "2018-06-26T18:00:00Z"
  },
  {
    teams: ["IS", "HR"],
    goals: [1, 2],
    fairPlay: [3, 2],
    date: "2018-06-26T18:00:00Z"
  }
];

const groupDTable = makeTable(groupDMatches);

const groupEMatches = [
  {
    teams: ["CR", "RS"],
    goals: [0, 1],
    fairPlay: [2, 2],
    date: "2018-06-17T12:00:00Z"
  },
  {
    teams: ["BR", "CH"],
    goals: [1, 1],
    fairPlay: [1, 3],
    date: "2018-06-17T18:00:00Z"
  },
  {
    teams: ["BR", "CR"],
    goals: [2, 0],
    fairPlay: [2, 1],
    date: "2018-06-22T12:00:00Z"
  },
  {
    teams: ["RS", "CH"],
    goals: [1, 2],
    fairPlay: [4, 1],
    date: "2018-06-22T18:00:00Z"
  },
  {
    teams: ["RS", "BR"],
    goals: [0, 2],
    fairPlay: [3, 0],
    date: "2018-06-27T18:00:00Z"
  },
  {
    teams: ["CH", "CR"],
    goals: [2, 2],
    fairPlay: [3, 3],
    date: "2018-06-27T18:00:00Z"
  }
];

const groupETable = makeTable(groupEMatches);

const groupFMatches = [
  {
    teams: ["DE", "MX"],
    goals: [0, 1],
    fairPlay: [2, 2],
    date: "2018-06-17T15:00:00Z"
  },
  {
    teams: ["SE", "KR"],
    goals: [1, 0],
    fairPlay: [1, 2],
    date: "2018-06-18T12:00:00Z"
  },
  {
    teams: ["KR", "MX"],
    goals: [1, 2],
    fairPlay: [4, 0],
    date: "2018-06-23T15:00:00Z"
  },
  {
    teams: ["DE", "SE"],
    goals: [2, 1],
    fairPlay: [3, 2],
    date: "2018-06-23T18:00:00Z"
  },
  {
    teams: ["KR", "DE"],
    goals: [2, 0],
    fairPlay: [4, 0],
    date: "2018-06-27T14:00:00Z"
  },
  {
    teams: ["MX", "SE"],
    goals: [0, 3],
    fairPlay: [3, 2],
    date: "2018-06-27T14:00:00Z"
  }
];

const groupFTable = makeTable(groupFMatches);

const groupGMatches = [
  {
    teams: ["BE", "PA"],
    goals: [3, 0],
    fairPlay: [3, 5],
    date: "2018-06-18T15:00:00Z"
  },
  {
    teams: ["TN", "GB-ENG"],
    goals: [1, 2],
    fairPlay: [0, 1],
    date: "2018-06-18T18:00:00Z"
  },
  {
    teams: ["BE", "TN"],
    goals: [5, 2],
    fairPlay: [0, 1],
    date: "2018-06-23T12:00:00Z"
  },
  {
    teams: ["GB-ENG", "PA"],
    goals: [6, 1],
    fairPlay: [1, 3],
    date: "2018-06-24T12:00:00Z"
  },
  {
    teams: ["GB-ENG", "BE"],
    goals: [0, 1],
    fairPlay: [0, 2],
    date: "2018-06-28T18:00:00Z"
  },
  {
    teams: ["PA", "TN"],
    goals: [1, 2],
    fairPlay: [3, 3],
    date: "2018-06-28T18:00:00Z"
  }
];

const groupGTable = makeTable(groupGMatches);

const groupHMatches = [
  {
    teams: ["CO", "JP"],
    goals: [1, 2],
    fairPlay: [5, 1],
    date: "2018-06-19T12:00:00Z"
  },
  {
    teams: ["PL", "SN"],
    goals: [1, 2],
    fairPlay: [1, 2],
    date: "2018-06-19T15:00:00Z"
  },
  {
    teams: ["JP", "SN"],
    goals: [2, 2],
    fairPlay: [2, 3],
    date: "2018-06-24T15:00:00Z"
  },
  {
    teams: ["PL", "CO"],
    goals: [0, 3],
    fairPlay: [2, 0],
    date: "2018-06-24T18:00:00Z"
  },
  {
    teams: ["JP", "PL"],
    goals: [0, 1],
    fairPlay: [1, 0],
    date: "2018-06-28T14:00:00Z"
  },
  {
    teams: ["SN", "CO"],
    goals: [0, 1],
    fairPlay: [1, 1],
    date: "2018-06-28T14:00:00Z"
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

const teamsAF1 = [first[2], second[3]];
const goalsAF1 = [4, 3];
const addAF1 = (lang) => null;
const teamsAF2 = [first[0], second[1]];
const goalsAF2 = [2, 1];
const addAF2 = (lang) => null;
const teamsAF3 = [first[1], second[0]];
const goalsAF3 = [3, 4];
const addAF3 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;
const teamsAF4 = [first[3], second[2]];
const goalsAF4 = [3, 2];
const addAF4 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;
const teamsAF5 = [first[4], second[5]];
const goalsAF5 = [2, 0];
const addAF5 = (lang) => null;
const teamsAF6 = [first[6], second[7]];
const goalsAF6 = [3, 2];
const addAF6 = (lang) => null;
const teamsAF7 = [first[5], second[4]];
const goalsAF7 = [1, 0];
const addAF7 = (lang) => null;
const teamsAF8 = [first[7], second[6]];
const goalsAF8 = [3, 4];
const addAF8 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;

const teamsVF1 = [getKoTeam(teamsAF2, goalsAF2), getKoTeam(teamsAF1, goalsAF1)];
const goalsVF1 = [0, 2];
const addVF1 = (lang) => null;
const teamsVF2 = [getKoTeam(teamsAF5, goalsAF5), getKoTeam(teamsAF6, goalsAF6)];
const goalsVF2 = [1, 2];
const addVF2 = (lang) => null;
const teamsVF3 = [getKoTeam(teamsAF7, goalsAF7), getKoTeam(teamsAF8, goalsAF8)];
const goalsVF3 = [0, 2];
const addVF3 = (lang) => null;
const teamsVF4 = [getKoTeam(teamsAF3, goalsAF3), getKoTeam(teamsAF4, goalsAF4)];
const goalsVF4 = [3, 4];
const addVF4 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;

const teamsHF1 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF2, goalsVF2)];
const goalsHF1 = [1, 0];
const addHF1 = (lang) => null;
const teamsHF2 = [getKoTeam(teamsVF4, goalsVF4), getKoTeam(teamsVF3, goalsVF3)];
const goalsHF2 = [2, 1];
const addHF2 = (lang) => `(1:1) ${localeName("ExtraTime", lang)}`;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [2, 0];
const add3P = (lang) => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [4, 2];
const addF = (lang) => null;

const champion = getKoTeam(teamsF, goalsF);

const matchData = (lang) => {
  return {
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
        date: "2018-06-30T14:00:00Z"
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "2018-06-30T18:00:00Z"
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "2018-07-01T14:00:00Z"
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "2018-07-01T18:00:00Z"
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "2018-07-02T14:00:00Z"
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "2018-07-02T18:00:00Z"
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "2018-07-03T14:00:00Z"
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "2018-07-03T18:00:00Z"
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2018-07-06T14:00:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2018-07-06T18:00:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2018-07-07T14:00:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2018-07-07T18:00:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2018-07-10T18:00:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2018-07-11T18:00:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2018-07-14T14:00:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2018-07-15T15:00:00Z"
    },
    champion: champion
  };
};

module.exports = matchData;
