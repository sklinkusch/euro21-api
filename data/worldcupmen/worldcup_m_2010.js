const { localeName, makeTable, getKoTeam, getLoser } = require("../helpers");

const groupAMatches = [
  {
    teams: ["ZA", "MX"],
    goals: [1, 1],
    fairPlay: [2, 2],
    date: "2010-06-11T14:00:00Z"
  },
  {
    teams: ["UY", "FR"],
    goals: [0, 0],
    fairPlay: [5, 3],
    date: "2010-06-11T18:30:00Z"
  },
  {
    teams: ["ZA", "UY"],
    goals: [0, 3],
    fairPlay: [5, 0],
    date: "2010-06-16T18:30:00Z"
  },
  {
    teams: ["FR", "MX"],
    goals: [0, 2],
    fairPlay: [2, 4],
    date: "2010-06-17T18:30:00Z"
  },
  {
    teams: ["MX", "UY"],
    goals: [0, 1],
    fairPlay: [2, 1],
    date: "2010-06-22T14:00:00Z"
  },
  {
    teams: ["FR", "ZA"],
    goals: [1, 2],
    fairPlay: [4, 0],
    date: "2010-06-22T14:00:00Z"
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["KR", "GR"],
    goals: [2, 0],
    fairPlay: [0, 1],
    date: "2010-06-12T11:30:00Z"
  },
  {
    teams: ["AR", "NG"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2010-06-12T14:00:00Z"
  },
  {
    teams: ["AR", "KR"],
    goals: [4, 1],
    fairPlay: [3, 2],
    date: "2010-06-17T11:30:00Z"
  },
  {
    teams: ["GR", "NG"],
    goals: [2, 1],
    fairPlay: [3, 4],
    date: "2010-06-17T14:00:00Z"
  },
  {
    teams: ["NG", "KR"],
    goals: [2, 2],
    fairPlay: [3, 1],
    date: "2010-06-22T18:30:00Z"
  },
  {
    teams: ["GR", "AR"],
    goals: [0, 2],
    fairPlay: [1, 1],
    date: "2010-06-22T18:30:00Z"
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["GB-ENG", "US"],
    goals: [1, 1],
    fairPlay: [3, 3],
    date: "2010-06-12T18:30:00Z"
  },
  {
    teams: ["DZ", "SI"],
    goals: [0, 1],
    fairPlay: [4, 2],
    date: "2010-06-13T11:30:00Z"
  },
  {
    teams: ["SI", "US"],
    goals: [2, 2],
    fairPlay: [4, 1],
    date: "2010-06-18T14:00:00Z"
  },
  {
    teams: ["GB-ENG", "DZ"],
    goals: [0, 0],
    fairPlay: [1, 1],
    date: "2010-06-18T18:30:00Z"
  },
  {
    teams: ["US", "DZ"],
    goals: [1, 0],
    fairPlay: [2, 5],
    date: "2010-06-23T14:00:00Z"
  },
  {
    teams: ["SI", "GB-ENG"],
    goals: [0, 1],
    fairPlay: [3, 1],
    date: "2010-06-23T14:00:00Z"
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["RS", "GH"],
    goals: [0, 1],
    fairPlay: [5, 2],
    date: "2010-06-13T14:00:00Z"
  },
  {
    teams: ["DE", "AU"],
    goals: [4, 0],
    fairPlay: [2, 6],
    date: "2010-06-13T18:30:00Z"
  },
  {
    teams: ["DE", "RS"],
    goals: [0, 1],
    fairPlay: [6, 4],
    date: "2010-06-18T11:30:00Z"
  },
  {
    teams: ["GH", "AU"],
    goals: [1, 1],
    fairPlay: [3, 4],
    date: "2010-06-19T14:00:00Z"
  },
  {
    teams: ["AU", "RS"],
    goals: [2, 1],
    fairPlay: [3, 2],
    date: "2010-06-23T18:30:00Z"
  },
  {
    teams: ["GH", "DE"],
    goals: [0, 1],
    fairPlay: [1, 1],
    date: "2010-06-23T18:30:00Z"
  }
];

const groupDTable = makeTable(groupDMatches);

const groupEMatches = [
  {
    teams: ["NL", "DK"],
    goals: [2, 0],
    fairPlay: [2, 1],
    date: "2010-06-14T11:30:00Z"
  },
  {
    teams: ["JP", "CM"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2010-06-14T14:00:00Z"
  },
  {
    teams: ["NL", "JP"],
    goals: [1, 0],
    fairPlay: [1, 0],
    date: "2010-06-19T11:30:00Z"
  },
  {
    teams: ["CM", "DK"],
    goals: [1, 2],
    fairPlay: [2, 2],
    date: "2010-06-19T18:30:00Z"
  },
  {
    teams: ["DK", "JP"],
    goals: [1, 3],
    fairPlay: [3, 2],
    date: "2010-06-24T18:30:00Z"
  },
  {
    teams: ["CM", "NL"],
    goals: [1, 2],
    fairPlay: [2, 3],
    date: "2010-06-24T18:30:00Z"
  }
];

const groupETable = makeTable(groupEMatches);

const groupFMatches = [
  {
    teams: ["IT", "PY"],
    goals: [1, 1],
    fairPlay: [1, 1],
    date: "2010-06-14T18:30:00Z"
  },
  {
    teams: ["NZ", "SK"],
    goals: [1, 1],
    fairPlay: [2, 1],
    date: "2010-06-15T11:30:00Z"
  },
  {
    teams: ["SK", "PY"],
    goals: [0, 2],
    fairPlay: [3, 1],
    date: "2010-06-20T11:30:00Z"
  },
  {
    teams: ["NZ", "IT"],
    goals: [1, 1],
    fairPlay: [0, 3],
    date: "2010-06-20T14:00:00Z"
  },
  {
    teams: ["SK", "IT"],
    goals: [3, 2],
    fairPlay: [4, 4],
    date: "2010-06-24T14:00:00Z"
  },
  {
    teams: ["PY", "NZ"],
    goals: [0, 0],
    fairPlay: [2, 1],
    date: "2010-06-24T14:00:00Z"
  }
];

const groupFTable = makeTable(groupFMatches);

const groupGMatches = [
  {
    teams: ["CI", "PT"],
    goals: [0, 0],
    fairPlay: [2, 2],
    date: "2010-06-15T14:00:00Z"
  },
  {
    teams: ["BR", "KP"],
    goals: [2, 1],
    fairPlay: [1, 0],
    date: "2010-06-15T18:30:00Z"
  },
  {
    teams: ["BR", "CI"],
    goals: [3, 1],
    fairPlay: [3, 3],
    date: "2010-06-20T18:30:00Z"
  },
  {
    teams: ["PT", "KP"],
    goals: [7, 0],
    fairPlay: [2, 2],
    date: "2010-06-21T11:30:00Z"
  },
  {
    teams: ["PT", "BR"],
    goals: [0, 0],
    fairPlay: [4, 3],
    date: "2010-06-25T14:00:00Z"
  },
  {
    teams: ["KP", "CI"],
    goals: [0, 3],
    fairPlay: [0, 0],
    date: "2010-06-25T14:00:00Z"
  }
];

const groupGTable = makeTable(groupGMatches);

const groupHMatches = [
  {
    teams: ["HN", "CL"],
    goals: [0, 1],
    fairPlay: [1, 2],
    date: "2010-06-16T11:30:00Z"
  },
  {
    teams: ["ES", "CH"],
    goals: [0, 1],
    fairPlay: [0, 4],
    date: "2010-06-16T14:00:00Z"
  },
  {
    teams: ["CL", "CH"],
    goals: [1, 0],
    fairPlay: [6, 6],
    date: "2010-06-21T14:00:00Z"
  },
  {
    teams: ["ES", "HN"],
    goals: [2, 0],
    fairPlay: [0, 2],
    date: "2010-06-21T18:30:00Z"
  },
  {
    teams: ["CH", "HN"],
    goals: [0, 0],
    fairPlay: [1, 4],
    date: "2010-06-25T18:30:00Z"
  },
  {
    teams: ["CL", "ES"],
    goals: [1, 2],
    fairPlay: [5, 0],
    date: "2010-06-25T18:30:00Z"
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
const goalsAF1 = [2, 1];
const addAF1 = (lang) => null;
const teamsAF2 = [first[2], second[3]];
const goalsAF2 = [1, 2];
const addAF2 = (lang) => `(1:1) ${localeName("ExtraTime", lang)}`;
const teamsAF3 = [first[3], second[2]];
const goalsAF3 = [4, 1];
const addAF3 = (lang) => null;
const teamsAF4 = [first[1], second[0]];
const goalsAF4 = [3, 1];
const addAF4 = (lang) => null;
const teamsAF5 = [first[4], second[5]];
const goalsAF5 = [2, 1];
const addAF5 = (lang) => null;
const teamsAF6 = [first[6], second[7]];
const goalsAF6 = [3, 0];
const addAF6 = (lang) => null;
const teamsAF7 = [first[5], second[4]];
const goalsAF7 = [5, 3];
const addAF7 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;
const teamsAF8 = [first[7], second[6]];
const goalsAF8 = [1, 0];
const addAF8 = (lang) => null;

const teamsVF1 = [getKoTeam(teamsAF5, goalsAF5), getKoTeam(teamsAF6, goalsAF6)];
const goalsVF1 = [2, 1];
const addVF1 = (lang) => null;
const teamsVF2 = [getKoTeam(teamsAF1, goalsAF1), getKoTeam(teamsAF2, goalsAF2)];
const goalsVF2 = [4, 2];
const addVF2 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;
const teamsVF3 = [getKoTeam(teamsAF4, goalsAF4), getKoTeam(teamsAF3, goalsAF3)];
const goalsVF3 = [0, 4];
const addVF3 = (lang) => null;
const teamsVF4 = [getKoTeam(teamsAF7, goalsAF7), getKoTeam(teamsAF8, goalsAF8)];
const goalsVF4 = [0, 1];
const addVF4 = (lang) => null;

const teamsHF1 = [getKoTeam(teamsVF2, goalsVF2), getKoTeam(teamsVF1, goalsVF1)];
const goalsHF1 = [2, 3];
const addHF1 = (lang) => null;
const teamsHF2 = [getKoTeam(teamsVF3, goalsVF3), getKoTeam(teamsVF4, goalsVF4)];
const goalsHF2 = [0, 1];
const addHF2 = (lang) => null;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [2, 3];
const add3P = (lang) => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [0, 1];
const addF = (lang) => `(0:0) ${localeName("ExtraTime", lang)}`;

const champion = getKoTeam(teamsF, goalsF);

const matchData = (lang) => {
  return {
    host: ["ZA"],
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
        date: "2010-06-26T14:00:00Z"
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "2010-06-26T18:30:00Z"
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "2010-06-27T14:00:00Z"
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "2010-06-27T18:30:00Z"
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "2010-06-28T14:00:00Z"
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "2010-06-28T18:30:00Z"
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "2010-06-29T14:00:00Z"
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "2010-06-29T18:30:00Z"
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2010-07-02T14:00:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2010-07-02T18:30:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2010-07-03T14:00:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2010-07-03T18:30:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2010-07-06T18:30:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2010-07-07T18:30:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2010-07-10T18:30:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2010-07-11T18:30:00Z"
    },
    champion: champion
  };
};

module.exports = matchData;
