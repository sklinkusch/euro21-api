const { localeName, makeTable, getKoTeam, getLoser } = require("../helpers");

const groupAMatches = [
  {
    teams: ["DE", "CR"],
    goals: [4, 2],
    fairPlay: [0, 1],
    date: "2006-06-09T16:00:00Z"
  },
  {
    teams: ["PL", "EC"],
    goals: [0, 2],
    fairPlay: [1, 2],
    date: "2006-06-09T19:00:00Z"
  },
  {
    teams: ["DE", "PL"],
    goals: [1, 0],
    fairPlay: [3, 5],
    date: "2006-06-14T19:00:00Z"
  },
  {
    teams: ["EC", "CR"],
    goals: [3, 0],
    fairPlay: [3, 2],
    date: "2006-06-15T13:00:00Z"
  },
  {
    teams: ["EC", "DE"],
    goals: [0, 3],
    fairPlay: [1, 1],
    date: "2006-06-20T14:00:00Z"
  },
  {
    teams: ["CR", "PL"],
    goals: [1, 2],
    fairPlay: [5, 5],
    date: "2006-06-20T14:00:00Z"
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["GB-ENG", "PY"],
    goals: [1, 0],
    fairPlay: [2, 1],
    date: "2006-06-10T13:00:00Z"
  },
  {
    teams: ["TT", "SE"],
    goals: [0, 0],
    fairPlay: [4, 1],
    date: "2006-06-10T16:00:00Z"
  },
  {
    teams: ["GB-ENG", "TT"],
    goals: [2, 0],
    fairPlay: [1, 5],
    date: "2006-06-15T16:00:00Z"
  },
  {
    teams: ["SE", "PY"],
    goals: [1, 0],
    fairPlay: [3, 4],
    date: "2006-06-15T19:00:00Z"
  },
  {
    teams: ["SE", "GB-ENG"],
    goals: [2, 2],
    fairPlay: [2, 1],
    date: "2006-06-20T19:00:00Z"
  },
  {
    teams: ["PY", "TT"],
    goals: [2, 0],
    fairPlay: [2, 2],
    date: "2006-06-20T19:00:00Z"
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["AR", "CI"],
    goals: [2, 1],
    fairPlay: [3, 2],
    date: "2006-06-10T19:00:00Z"
  },
  {
    teams: ["YU-SCG", "NL"],
    goals: [0, 1],
    fairPlay: [4, 2],
    date: "2006-06-11T13:00:00Z"
  },
  {
    teams: ["AR", "SCG"],
    goals: [6, 0],
    fairPlay: [1, 6],
    date: "2006-06-16T13:00:00Z"
  },
  {
    teams: ["NL", "CI"],
    goals: [2, 1],
    fairPlay: [4, 3],
    date: "2006-06-16T16:00:00Z"
  },
  {
    teams: ["NL", "AR"],
    goals: [0, 0],
    fairPlay: [3, 2],
    date: "2006-06-21T19:00:00Z"
  },
  {
    teams: ["CI", "YU-SCG"],
    goals: [3, 2],
    fairPlay: [5, 6],
    date: "2006-06-21T19:00:00Z"
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["MX", "IR"],
    goals: [3, 1],
    fairPlay: [2, 1],
    date: "2006-06-11T16:00:00Z"
  },
  {
    teams: ["AO", "PT"],
    goals: [0, 1],
    fairPlay: [3, 2],
    date: "2006-06-11T19:00:00Z"
  },
  {
    teams: ["MX", "AO"],
    goals: [0, 0],
    fairPlay: [1, 6],
    date: "2006-06-16T19:00:00Z"
  },
  {
    teams: ["PT", "IR"],
    goals: [2, 0],
    fairPlay: [3, 4],
    date: "2006-06-17T13:00:00Z"
  },
  {
    teams: ["PT", "MX"],
    goals: [2, 1],
    fairPlay: [4, 6],
    date: "2006-06-21T14:00:00Z"
  },
  {
    teams: ["IR", "AO"],
    goals: [1, 1],
    fairPlay: [3, 3],
    date: "2006-06-21T14:00:00Z"
  }
];

const groupDTable = makeTable(groupDMatches);

const groupEMatches = [
  {
    teams: ["US", "CZ"],
    goals: [0, 3],
    fairPlay: [2, 4],
    date: "2006-06-12T16:00:00Z"
  },
  {
    teams: ["IT", "GH"],
    goals: [2, 0],
    fairPlay: [3, 2],
    date: "2006-06-12T19:00:00Z"
  },
  {
    teams: ["CZ", "GH"],
    goals: [0, 2],
    fairPlay: [4, 6],
    date: "2006-06-17T16:00:00Z"
  },
  {
    teams: ["IT", "US"],
    goals: [1, 1],
    fairPlay: [5, 6],
    date: "2006-06-17T19:00:00Z"
  },
  {
    teams: ["CZ", "IT"],
    goals: [0, 2],
    fairPlay: [3, 1],
    date: "2006-06-22T14:00:00Z"
  },
  {
    teams: ["GH", "US"],
    goals: [2, 1],
    fairPlay: [4, 1],
    date: "2006-06-22T14:00:00Z"
  }
];

const groupETable = makeTable(groupEMatches);

const groupFMatches = [
  {
    teams: ["AU", "JP"],
    goals: [3, 1],
    fairPlay: [4, 3],
    date: "2006-06-12T13:00:00Z"
  },
  {
    teams: ["BR", "HR"],
    goals: [1, 0],
    fairPlay: [1, 3],
    date: "2006-06-13T19:00:00Z"
  },
  {
    teams: ["JP", "HR"],
    goals: [0, 0],
    fairPlay: [3, 2],
    date: "2006-06-18T13:00:00Z"
  },
  {
    teams: ["BR", "AU"],
    goals: [2, 0],
    fairPlay: [3, 2],
    date: "2006-06-18T16:00:00Z"
  },
  {
    teams: ["JP", "BR"],
    goals: [1, 4],
    fairPlay: [1, 1],
    date: "2006-06-22T19:00:00Z"
  },
  {
    teams: ["HR", "AU"],
    goals: [2, 2],
    fairPlay: [8, 3],
    date: "2006-06-22T19:00:00Z"
  }
];

const groupFTable = makeTable(groupFMatches);

const groupGMatches = [
  {
    teams: ["KR", "TG"],
    goals: [2, 1],
    fairPlay: [2, 5],
    date: "2006-06-13T13:00:00Z"
  },
  {
    teams: ["FR", "CH"],
    goals: [0, 0],
    fairPlay: [3, 5],
    date: "2006-06-13T16:00:00Z"
  },
  {
    teams: ["FR", "KR"],
    goals: [1, 1],
    fairPlay: [2, 2],
    date: "2006-08-18T19:00:00Z"
  },
  {
    teams: ["TG", "CH"],
    goals: [0, 2],
    fairPlay: [3, 1],
    date: "2006-06-19T13:00:00Z"
  },
  {
    teams: ["TG", "FR"],
    goals: [0, 2],
    fairPlay: [3, 1],
    date: "2006-06-23T19:00:00Z"
  },
  {
    teams: ["CH", "KR"],
    goals: [2, 0],
    fairPlay: [5, 5],
    date: "2006-06-23T19:00:00Z"
  }
];

const groupGTable = makeTable(groupGMatches);

const groupHMatches = [
  {
    teams: ["ES", "UA"],
    goals: [4, 0],
    fairPlay: [0, 5],
    date: "2006-06-14T13:00:00Z"
  },
  {
    teams: ["TN", "SA"],
    goals: [2, 2],
    fairPlay: [4, 0],
    date: "2006-06-14T16:00:00Z"
  },
  {
    teams: ["SA", "UA"],
    goals: [0, 4],
    fairPlay: [3, 3],
    date: "2006-06-19T16:00:00Z"
  },
  {
    teams: ["ES", "TN"],
    goals: [3, 1],
    fairPlay: [2, 6],
    date: "2006-06-19T19:00:00Z"
  },
  {
    teams: ["SA", "ES"],
    goals: [0, 1],
    fairPlay: [2, 3],
    date: "2006-06-23T14:00:00Z"
  },
  {
    teams: ["UA", "TN"],
    goals: [1, 0],
    fairPlay: [4, 5],
    date: "2006-06-23T14:00:00Z"
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

const teamsAF1 = [first[0], second[1]];
const goalsAF1 = [2, 0];
const addAF1 = (lang) => null;
const teamsAF2 = [first[2], second[3]];
const goalsAF2 = [2, 1];
const addAF2 = (lang) => `(1:1) ${localeName("ExtraTime", lang)}`;
const teamsAF3 = [first[1], second[0]];
const goalsAF3 = [1, 0];
const addAF3 = (lang) => null;
const teamsAF4 = [first[3], second[2]];
const goalsAF4 = [1, 0];
const addAF4 = (lang) => null;
const teamsAF5 = [first[4], second[5]];
const goalsAF5 = [1, 0];
const addAF5 = (lang) => null;
const teamsAF6 = [first[6], second[7]];
const goalsAF6 = [0, 3];
const addAF6 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;
const teamsAF7 = [first[5], second[4]];
const goalsAF7 = [3, 0];
const addAF7 = (lang) => null;
const teamsAF8 = [first[7], second[6]];
const goalsAF8 = [1, 3];
const addAF8 = (lang) => null;

const teamsVF1 = [getKoTeam(teamsAF1, goalsAF1), getKoTeam(teamsAF2, goalsAF2)];
const goalsVF1 = [4, 2];
const addVF1 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;
const teamsVF2 = [getKoTeam(teamsAF5, goalsAF5), getKoTeam(teamsAF6, goalsAF6)];
const goalsVF2 = [3, 0];
const addVF2 = (lang) => null;
const teamsVF3 = [getKoTeam(teamsAF3, goalsAF3), getKoTeam(teamsAF4, goalsAF4)];
const goalsVF3 = [1, 3];
const addVF3 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;
const teamsVF4 = [getKoTeam(teamsAF7, goalsAF7), getKoTeam(teamsAF8, goalsAF8)];
const goalsVF4 = [0, 1];
const addVF4 = (lang) => null;

const teamsHF1 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF2, goalsVF2)];
const goalsHF1 = [0, 2];
const addHF1 = (lang) => `(0:0) ${localeName("ExtraTime", lang)}`;
const teamsHF2 = [getKoTeam(teamsVF3, goalsVF3), getKoTeam(teamsVF4, goalsVF4)];
const goalsHF2 = [0, 1];
const addHF2 = (lang) => null;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [3, 1];
const add3P = (lang) => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [5, 3];
const addF = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;

const champion = getKoTeam(teamsF, goalsF);

const data = (lang) => {
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
        date: "2006-06-24T15:00:00Z"
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "2006-06-24T19:00:00Z"
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "2006-06-25T15:00:00Z"
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "2006-06-25T19:00:00Z"
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "2006-06-26T15:00:00Z"
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "2006-06-26T19:00:00Z"
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "2006-06-27T15:00:00Z"
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "2006-06-27T19:00:00Z"
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2006-06-30T15:00:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2006-06-30T19:00:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2006-07-01T15:00:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2006-07-01T19:00:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2006-07-04T19:00:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2006-07-05T19:00:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2006-07-08T19:00:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2006-07-09T18:00:00Z"
    },
    champion: champion
  };
};

module.exports = data;
