const { localeName, makeTable, getKoTeam, getLoser } = require("../helpers");
/*
export const matchaf = [
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [0, 3],
    add: null
  },
  {
    goals: [1, 2],
    add: localeName("GoldenGoal")
  },
  {
    goals: [3, 2],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`
  },
  {
    goals: [0, 2],
    add: null
  },
  {
    goals: [2, 0],
    add: null
  },
  {
    goals: [0, 1],
    add: null
  },
  {
    goals: [2, 1],
    add: localeName("GoldenGoal")
  },
]

export const matchvf = [
  {
    goals: [1, 2],
    add: null
  },
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [3, 5],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`
  },
  {
    goals: [0, 1],
    add: localeName("GoldenGoal")
  },
]

export const matchhf = [
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [1, 0],
    add: null
  },
]

export const match3p = {
    goals: [2, 3],
    add: null
}


export const matchf = {
    goals: [0, 2],
    add: null
}
*/

const groupAMatches = [
  {
    teams: ["FR", "SN"],
    goals: [0, 1],
    fairPlay: [1, 1],
    date: "2002-05-31T11:30:00Z"
  },
  {
    teams: ["UY", "DK"],
    goals: [1, 2],
    fairPlay: [1, 2],
    date: "2002-06-01T09:00:00Z"
  },
  {
    teams: ["FR", "UY"],
    goals: [0, 0],
    fairPlay: [4, 4],
    date: "2002-06-06T06:30:00Z"
  },
  {
    teams: ["DK", "SN"],
    goals: [1, 1],
    fairPlay: [4, 5],
    date: "2002-06-06T11:30:00Z"
  },
  {
    teams: ["DK", "FR"],
    goals: [2, 0],
    fairPlay: [2, 1],
    date: "2002-06-11T06:30:00Z"
  },
  {
    teams: ["SN", "UY"],
    goals: [3, 3],
    fairPlay: [7, 5],
    date: "2002-06-11T06:30:00Z"
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["PY", "ZA"],
    goals: [2, 2],
    fairPlay: [4, 4],
    date: "2002-06-02T07:30:00Z"
  },
  {
    teams: ["ES", "SI"],
    goals: [3, 1],
    fairPlay: [1, 2],
    date: "2002-06-02T11:30:00Z"
  },
  {
    teams: ["ES", "PY"],
    goals: [3, 1],
    fairPlay: [1, 3],
    date: "2002-06-07T09:00:00Z"
  },
  {
    teams: ["ZA", "SI"],
    goals: [1, 0],
    fairPlay: [2, 4],
    date: "2002-06-08T06:30:00Z"
  },
  {
    teams: ["ZA", "ES"],
    goals: [2, 3],
    fairPlay: [4, 0],
    date: "2002-06-12T11:30:00Z"
  },
  {
    teams: ["SI", "PY"],
    goals: [1, 3],
    fairPlay: [7, 3],
    date: "2002-06-12T11:30:00Z"
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["BR", "TR"],
    goals: [2, 1],
    fairPlay: [1, 8],
    date: "2002-06-03T09:00:00Z"
  },
  {
    teams: ["CN", "CR"],
    goals: [0, 2],
    fairPlay: [3, 4],
    date: "2002-06-04T06:30:00Z"
  },
  {
    teams: ["BR", "CN"],
    goals: [4, 0],
    fairPlay: [2, 0],
    date: "2002-06-08T11:30:00Z"
  },
  {
    teams: ["CR", "TR"],
    goals: [1, 1],
    fairPlay: [2, 3],
    date: "2002-06-09T09:00:00Z"
  },
  {
    teams: ["CR", "BR"],
    goals: [2, 5],
    fairPlay: [0, 1],
    date: "2002-08-13T06:30:00Z"
  },
  {
    teams: ["TR", "CN"],
    goals: [3, 0],
    fairPlay: [2, 4],
    date: "2002-08-13T06:30:00Z"
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["KR", "PL"],
    goals: [2, 0],
    fairPlay: [2, 3],
    date: "2002-06-04T11:30:00Z"
  },
  {
    teams: ["US", "PT"],
    goals: [3, 2],
    fairPlay: [1, 2],
    date: "2002-06-05T09:00:00Z"
  },
  {
    teams: ["KR", "US"],
    goals: [1, 1],
    fairPlay: [1, 2],
    date: "2002-06-10T06:30:00Z"
  },
  {
    teams: ["PT", "PL"],
    goals: [4, 0],
    fairPlay: [3, 2],
    date: "2002-06-10T11:30:00Z"
  },
  {
    teams: ["PT", "KR"],
    goals: [0, 1],
    fairPlay: [7, 4],
    date: "2002-06-14T11:30:00Z"
  },
  {
    teams: ["PL", "US"],
    goals: [3, 0],
    fairPlay: [4, 1],
    date: "2002-06-14T11:30:00Z"
  }
];

const groupDTable = makeTable(groupDMatches);

const groupEMatches = [
  {
    teams: ["IE", "CM"],
    goals: [1, 1],
    fairPlay: [3, 1],
    date: "2002-06-01T06:30:00Z"
  },
  {
    teams: ["DE", "SA"],
    goals: [8, 0],
    fairPlay: [2, 1],
    date: "2002-06-01T11:30:00Z"
  },
  {
    teams: ["DE", "IE"],
    goals: [1, 1],
    fairPlay: [0, 0],
    date: "2002-06-05T11:30:00Z"
  },
  {
    teams: ["CM", "SA"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2002-06-06T09:00:00Z"
  },
  {
    teams: ["CM", "DE"],
    goals: [0, 2],
    fairPlay: [9, 9],
    date: "2002-06-11T11:30:00Z"
  },
  {
    teams: ["SA", "IE"],
    goals: [0, 3],
    fairPlay: [1, 1],
    date: "2002-06-11T11:30:00Z"
  }
];

const groupETable = makeTable(groupEMatches);

const groupFMatches = [
  {
    teams: ["AR", "NG"],
    goals: [1, 0],
    fairPlay: [2, 1],
    date: "2002-06-02T05:30:00Z"
  },
  {
    teams: ["GB-ENG", "SE"],
    goals: [1, 1],
    fairPlay: [1, 2],
    date: "2002-06-02T09:30:00Z"
  },
  {
    teams: ["SE", "NG"],
    goals: [2, 1],
    fairPlay: [2, 1],
    date: "2002-06-07T06:30:00Z"
  },
  {
    teams: ["AR", "GB-ENG"],
    goals: [0, 1],
    fairPlay: [1, 2],
    date: "2002-06-07T11:30:00Z"
  },
  {
    teams: ["SE", "AR"],
    goals: [1, 1],
    fairPlay: [2, 3],
    date: "2002-06-12T06:30:00Z"
  },
  {
    teams: ["NG", "GB-ENG"],
    goals: [0, 0],
    fairPlay: [0, 0],
    date: "2002-06-12T06:30:00Z"
  }
];

const groupFTable = makeTable(groupFMatches);

const groupGMatches = [
  {
    teams: ["HR", "MX"],
    goals: [0, 1],
    fairPlay: [3, 0],
    date: "2002-06-03T06:30:00Z"
  },
  {
    teams: ["IT", "EC"],
    goals: [2, 0],
    fairPlay: [1, 3],
    date: "2002-06-03T11:30:00Z"
  },
  {
    teams: ["IT", "HR"],
    goals: [1, 2],
    fairPlay: [1, 1],
    date: "2002-06-08T09:00:00Z"
  },
  {
    teams: ["MX", "EC"],
    goals: [2, 1],
    fairPlay: [1, 4],
    date: "2002-06-09T06:30:00Z"
  },
  {
    teams: ["MX", "IT"],
    goals: [1, 1],
    fairPlay: [2, 5],
    date: "2002-06-13T11:30:00Z"
  },
  {
    teams: ["EC", "HR"],
    goals: [1, 0],
    fairPlay: [1, 2],
    date: "2002-06-13T11:30:00Z"
  }
];

const groupGTable = makeTable(groupGMatches);

const groupHMatches = [
  {
    teams: ["JP", "BE"],
    goals: [2, 2],
    fairPlay: [2, 3],
    date: "2002-06-04T09:00:00Z"
  },
  {
    teams: ["RU", "TN"],
    goals: [2, 0],
    fairPlay: [2, 2],
    date: "2002-06-05T06:30:00Z"
  },
  {
    teams: ["JP", "RU"],
    goals: [1, 0],
    fairPlay: [3, 3],
    date: "2002-06-09T11:30:00Z"
  },
  {
    teams: ["TN", "BE"],
    goals: [1, 1],
    fairPlay: [4, 1],
    date: "2002-06-10T09:00:00Z"
  },
  {
    teams: ["TN", "JP"],
    goals: [0, 2],
    fairPlay: [2, 0],
    date: "2002-06-14T06:30:00Z"
  },
  {
    teams: ["BE", "RU"],
    goals: [3, 2],
    fairPlay: [1, 4],
    date: "2002-06-14T06:30:00Z"
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

const teamsAF1 = [first[4], second[1]];
const goalsAF1 = [1, 0];
const addAF1 = (lang) => null;
const teamsAF2 = [first[0], second[5]];
const goalsAF2 = [0, 3];
const addAF2 = (lang) => null;
const teamsAF3 = [first[5], second[0]];
const goalsAF3 = [1, 2];
const addAF3 = (lang) => `(1:1) ${localeName("GoldenGoal", lang)}`;
const teamsAF4 = [first[1], second[4]];
const goalsAF4 = [3, 2];
const addAF4 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 ${localeName("ExtraTime", lang)}`;
const teamsAF5 = [first[6], second[3]];
const goalsAF5 = [0, 2];
const addAF5 = (lang) => null;
const teamsAF6 = [first[2], second[7]];
const goalsAF6 = [2, 0];
const addAF6 = (lang) => null;
const teamsAF7 = [first[7], second[2]];
const goalsAF7 = [0, 1];
const addAF7 = (lang) => null;
const teamsAF8 = [first[3], second[6]];
const goalsAF8 = [2, 1];
const addAF8 = (lang) => `(1:1) ${localeName("GoldenGoal", lang)}`;

const teamsVF1 = [getKoTeam(teamsAF2, goalsAF2), getKoTeam(teamsAF6, goalsAF6)];
const goalsVF1 = [1, 2];
const addVF1 = (lang) => null;
const teamsVF2 = [getKoTeam(teamsAF1, goalsAF1), getKoTeam(teamsAF5, goalsAF5)];
const goalsVF2 = [1, 0];
const addVF2 = (lang) => null;
const teamsVF3 = [getKoTeam(teamsAF4, goalsAF4), getKoTeam(teamsAF8, goalsAF8)];
const goalsVF3 = [3, 5];
const addVF3 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;
const teamsVF4 = [getKoTeam(teamsAF3, goalsAF3), getKoTeam(teamsAF7, goalsAF7)];
const goalsVF4 = [0, 1];
const addVF4 = (lang) => `(0:0) ${localeName("GoldenGoal", lang)}`;

const teamsHF1 = [getKoTeam(teamsVF2, goalsVF2), getKoTeam(teamsVF3, goalsVF3)];
const goalsHF1 = [1, 0];
const addHF1 = (lang) => null;
const teamsHF2 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF4, goalsVF4)];
const goalsHF2 = [1, 0];
const addHF2 = (lang) => null;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [2, 3];
const add3P = (lang) => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [0, 2];
const addF = (lang) => null;

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
        date: "2002-06-15T06:30:00Z"
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "2002-06-15T11:30:00Z"
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "2002-06-16T06:30:00Z"
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "2002-06-16T11:30:00Z"
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "2002-06-17T06:30:00Z"
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "2002-06-17T11:30:00Z"
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "2002-06-18T06:30:00Z"
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "2002-06-18T11:30:00Z"
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2002-06-21T06:30:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2002-06-21T11:30:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2002-06-22T06:30:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2002-06-22T11:30:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2002-06-25T11:30:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2002-06-26T11:30:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2002-06-29T11:00:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2002-06-30T11:00:00Z"
    },
    champion: champion
  };
};

module.exports = data;
