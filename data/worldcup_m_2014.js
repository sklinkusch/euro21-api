// import { localeName } from "../components/countries";

const { localeName, makeTable, getKoTeam, getLoser } = require("./helpers");

/*
export const matchaf = [
  {
    goals: [3, 2],
    add: `${localeName("Penalties")} 1:1 (1:1) ${localeName("ExtraTime")}`
  },
  {
    goals: [2, 0],
    add: null
  },
  {
    goals: [2, 1],
    add: null
  },
  {
    goals: [5, 3],
    add: `${localeName("Penalties")} 1:1 (1:1) ${localeName("ExtraTime")}`
  },
  {
    goals: [2, 0],
    add: null
  },
  {
    goals: [2, 1],
    add: localeName("ExtraTime")
  },
  {
    goals: [1, 0],
    add: localeName("ExtraTime")
  },
  {
    goals: [2, 1],
    add: localeName("ExtraTime")
  },
]

export const matchvf = [
  {
    goals: [0, 1],
    add: null
  },
  {
    goals: [2, 1],
    add: null
  },
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [4, 3],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`
  },
]

export const matchhf = [
  {
    goals: [1, 7],
    add: null
  },
  {
    goals: [2, 4],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`
  },
]

export const match3p = {
    goals: [0, 3],
    add: null
}


export const matchf = {
    goals: [1, 0],
    add: localeName("ExtraTime")
}
*/

const groupAMatches = [
  {
    teams: ["BR", "HR"],
    goals: [3, 1],
    fairPlay: [2, 2],
    date: "2014-06-12T20:00:00Z"
  },
  {
    teams: ["MX", "CM"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2014-06-13T16:00:00Z"
  },
  {
    teams: ["BR", "MX"],
    goals: [0, 0],
    fairPlay: [2, 2],
    date: "2014-06-17T19:00:00Z"
  },
  {
    teams: ["CM", "HR"],
    goals: [0, 4],
    fairPlay: [3, 1],
    date: "2014-06-18T22:00:00Z"
  },
  {
    teams: ["CM", "BR"],
    goals: [1, 4],
    fairPlay: [3, 0],
    date: "2014-06-23T20:00:00Z"
  },
  {
    teams: ["HR", "MX"],
    goals: [1, 3],
    fairPlay: [4, 2],
    date: "2014-06-23T20:00:00Z"
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["ES", "NL"],
    goals: [1, 5],
    fairPlay: [1, 3],
    date: "2014-06-13T19:00:00Z"
  },
  {
    teams: ["CL", "AU"],
    goals: [3, 1],
    fairPlay: [1, 3],
    date: "2014-06-13T22:00:00Z"
  },
  {
    teams: ["AU", "NL"],
    goals: [2, 3],
    fairPlay: [1, 1],
    date: "2014-06-18T16:00:00Z"
  },
  {
    teams: ["ES", "CL"],
    goals: [0, 2],
    fairPlay: [1, 2],
    date: "2014-06-18T19:00:00Z"
  },
  {
    teams: ["AU", "ES"],
    goals: [0, 3],
    fairPlay: [2, 1],
    date: "2014-06-23T16:00:00Z"
  },
  {
    teams: ["NL", "CL"],
    goals: [2, 0],
    fairPlay: [1, 1],
    date: "2014-06-23T16:00:00Z"
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["CO", "GR"],
    goals: [3, 0],
    fairPlay: [1, 2],
    date: "2014-06-14T16:00:00Z"
  },
  {
    teams: ["CI", "JP"],
    goals: [2, 1],
    fairPlay: [2, 2],
    date: "2014-06-15T01:00:00Z"
  },
  {
    teams: ["CO", "CI"],
    goals: [2, 1],
    fairPlay: [0, 2],
    date: "2014-06-19T16:00:00Z"
  },
  {
    teams: ["JP", "GR"],
    goals: [0, 0],
    fairPlay: [1, 5],
    date: "2014-06-19T22:00:00Z"
  },
  {
    teams: ["JP", "CO"],
    goals: [1, 4],
    fairPlay: [1, 1],
    date: "2014-06-24T20:00:00Z"
  },
  {
    teams: ["GR", "CI"],
    goals: [2, 1],
    fairPlay: [0, 3],
    date: "2014-06-24T20:00:00Z"
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["UY", "CR"],
    goals: [1, 3],
    fairPlay: [6, 0],
    date: "2014-06-14T19:00:00Z"
  },
  {
    teams: ["GB-ENG", "IT"],
    goals: [1, 2],
    fairPlay: [1, 0],
    date: "2014-06-14T22:00:00Z"
  },
  {
    teams: ["UY", "GB-ENG"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2014-06-19T19:00:00Z"
  },
  {
    teams: ["IT", "CR"],
    goals: [0, 1],
    fairPlay: [1, 1],
    date: "2014-06-20T16:00:00Z"
  },
  {
    teams: ["IT", "UY"],
    goals: [0, 1],
    fairPlay: [5, 2],
    date: "2014-06-24T16:00:00Z"
  },
  {
    teams: ["CR", "GB-ENG"],
    goals: [0, 0],
    fairPlay: [1, 2],
    date: "2014-06-24T16:00:00Z"
  }
];

const groupDTable = makeTable(groupDMatches);

const groupEMatches = [
  {
    teams: ["CH", "EC"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2014-06-15T16:00:00Z"
  },
  {
    teams: ["FR", "HN"],
    goals: [3, 0],
    fairPlay: [3, 5],
    date: "2014-06-15T19:00:00Z"
  },
  {
    teams: ["CH", "FR"],
    goals: [2, 5],
    fairPlay: [0, 1],
    date: "2014-06-20T19:00:00Z"
  },
  {
    teams: ["HN", "EC"],
    goals: [1, 2],
    fairPlay: [2, 3],
    date: "2014-06-20T22:00:00Z"
  },
  {
    teams: ["HN", "CH"],
    goals: [0, 3],
    fairPlay: [1, 0],
    date: "2014-06-25T20:00:00Z"
  },
  {
    teams: ["EC", "FR"],
    goals: [0, 0],
    fairPlay: [4, 0],
    date: "2014-06-25T20:00:00Z"
  }
];

const groupETable = makeTable(groupEMatches);

const groupFMatches = [
  {
    teams: ["AR", "BA"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2014-06-15T22:00:00Z"
  },
  {
    teams: ["IR", "NG"],
    goals: [0, 0],
    fairPlay: [1, 0],
    date: "2014-06-16T19:00:00Z"
  },
  {
    teams: ["AR", "IR"],
    goals: [1, 0],
    fairPlay: [0, 2],
    date: "2014-06-21T16:00:00Z"
  },
  {
    teams: ["NG", "BA"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2014-06-21T22:00:00Z"
  },
  {
    teams: ["NG", "AR"],
    goals: [2, 3],
    fairPlay: [2, 0],
    date: "2014-06-25T16:00:00Z"
  },
  {
    teams: ["BA", "IR"],
    goals: [3, 1],
    fairPlay: [1, 1],
    date: "2014-06-25T16:00:00Z"
  }
];

const groupFTable = makeTable(groupFMatches);

const groupGMatches = [
  {
    teams: ["DE", "PT"],
    goals: [4, 0],
    fairPlay: [0, 4],
    date: "2014-06-16T16:00:00Z"
  },
  {
    teams: ["GH", "US"],
    goals: [1, 2],
    fairPlay: [2, 0],
    date: "2014-06-16T22:00:00Z"
  },
  {
    teams: ["DE", "GH"],
    goals: [2, 2],
    fairPlay: [0, 1],
    date: "2014-06-21T19:00:00Z"
  },
  {
    teams: ["US", "PT"],
    goals: [2, 2],
    fairPlay: [1, 0],
    date: "2014-06-22T22:00:00Z"
  },
  {
    teams: ["US", "DE"],
    goals: [0, 1],
    fairPlay: [2, 1],
    date: "2014-06-26T16:00:00Z"
  },
  {
    teams: ["PT", "GH"],
    goals: [2, 1],
    fairPlay: [1, 3],
    date: "2014-06-26T16:00:00Z"
  }
];

const groupGTable = makeTable(groupGMatches);

const groupHMatches = [
  {
    teams: ["BE", "DZ"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2014-06-17T16:00:00Z"
  },
  {
    teams: ["RU", "KR"],
    goals: [1, 1],
    fairPlay: [1, 3],
    date: "2014-06-17T22:00:00Z"
  },
  {
    teams: ["BE", "RU"],
    goals: [1, 0],
    fairPlay: [2, 1],
    date: "2014-06-22T16:00:00Z"
  },
  {
    teams: ["KR", "DZ"],
    goals: [2, 4],
    fairPlay: [2, 1],
    date: "2014-06-22T19:00:00Z"
  },
  {
    teams: ["KR", "BE"],
    goals: [0, 1],
    fairPlay: [1, 4],
    date: "2014-06-26T20:00:00Z"
  },
  {
    teams: ["DZ", "RU"],
    goals: [1, 1],
    fairPlay: [3, 2],
    date: "2014-06-26T20:00:00Z"
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
const goalsAF1 = [3, 2];
const addAF1 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;
const teamsAF2 = [first[2], second[3]];
const goalsAF2 = [2, 0];
const addAF2 = (lang) => null;
const teamsAF3 = [first[1], second[0]];
const goalsAF3 = [2, 1];
const addAF3 = (lang) => null;
const teamsAF4 = [first[3], second[2]];
const goalsAF4 = [5, 3];
const addAF4 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;
const teamsAF5 = [first[4], second[5]];
const goalsAF5 = [2, 0];
const addAF5 = (lang) => null;
const teamsAF6 = [first[6], second[7]];
const goalsAF6 = [2, 1];
const addAF6 = (lang) => `(0:0) ${localeName("ExtraTime", lang)}`;
const teamsAF7 = [first[5], second[4]];
const goalsAF7 = [1, 0];
const addAF7 = (lang) => `(0:0) ${localeName("ExtraTime", lang)}`;
const teamsAF8 = [first[7], second[6]];
const goalsAF8 = [2, 1];
const addAF8 = (lang) => `(0:0) ${localeName("ExtraTime", lang)}`;

const teamsVF1 = [getKoTeam(teamsAF5, goalsAF5), getKoTeam(teamsAF6, goalsAF6)];
const goalsVF1 = [0, 1];
const addVF1 = (lang) => null;
const teamsVF2 = [getKoTeam(teamsAF1, goalsAF1), getKoTeam(teamsAF2, goalsAF2)];
const goalsVF2 = [2, 1];
const addVF2 = (lang) => null;
const teamsVF3 = [getKoTeam(teamsAF7, goalsAF7), getKoTeam(teamsAF8, goalsAF8)];
const goalsVF3 = [1, 0];
const addVF3 = (lang) => null;
const teamsVF4 = [getKoTeam(teamsAF3, goalsAF3), getKoTeam(teamsAF4, goalsAF4)];
const goalsVF4 = [4, 3];
const addVF4 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;

const teamsHF1 = [getKoTeam(teamsVF2, goalsVF2), getKoTeam(teamsVF1, goalsVF1)];
const goalsHF1 = [1, 7];
const addHF1 = (lang) => null;
const teamsHF2 = [getKoTeam(teamsVF4, goalsVF4), getKoTeam(teamsVF3, goalsVF3)];
const goalsHF2 = [2, 4];
const addHF2 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [0, 3];
const add3P = (lang) => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [1, 0];
const addF = (lang) => `(0:0) ${localeName("ExtraTime", lang)}`;

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
        date: "2014-06-28T16:00:00Z"
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "2014-06-28T20:00:00Z"
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "2014-06-29T16:00:00Z"
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "2014-06-29T20:00:00Z"
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "2014-06-30T16:00:00Z"
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "2014-06-30T20:00:00Z"
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "2014-07-01T16:00:00Z"
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "2014-07-01T20:00:00Z"
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2014-07-04T16:00:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2014-07-04T20:00:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2014-07-05T16:00:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2014-07-05T20:00:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2014-07-08T20:00:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2014-07-09T20:00:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2014-07-12T20:00:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2014-07-13T19:00:00Z"
    },
    champion: champion
  };
};

module.exports = matchData;
