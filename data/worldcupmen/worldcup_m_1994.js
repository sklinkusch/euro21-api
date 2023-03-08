const {
  localeName,
  makeTable,
  makeEasyTable,
  getKoTeam,
  getLoser
} = require("../helpers");

const groupAMatches = [
  {
    teams: ["US", "CH"],
    goals: [1, 1],
    fairPlay: [1, 2],
    date: "1994-06-18T15:30:00Z"
  },
  {
    teams: ["CO", "RO"],
    goals: [1, 3],
    fairPlay: [3, 1],
    date: "1994-06-18T23:30:00Z"
  },
  {
    teams: ["RO", "CH"],
    goals: [1, 4],
    fairPlay: [6, 0],
    date: "1994-06-22T20:00:00Z"
  },
  {
    teams: ["US", "CO"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "1994-06-22T23:30:00Z"
  },
  {
    teams: ["US", "RO"],
    goals: [0, 1],
    fairPlay: [2, 2],
    date: "1994-06-26T20:00:00Z"
  },
  {
    teams: ["CH", "CO"],
    goals: [0, 2],
    fairPlay: [2, 3],
    date: "1994-06-26T20:00:00Z"
  }
];

const groupATable = makeTable(groupAMatches, "A");

const groupBMatches = [
  {
    teams: ["CM", "SE"],
    goals: [2, 2],
    fairPlay: [1, 1],
    date: "1994-06-19T23:30:00Z"
  },
  {
    teams: ["BR", "RU"],
    goals: [2, 0],
    fairPlay: [0, 3],
    date: "1994-06-20T20:00:00Z"
  },
  {
    teams: ["BR", "CM"],
    goals: [3, 0],
    fairPlay: [1, 5],
    date: "1994-06-24T20:00:00Z"
  },
  {
    teams: ["SE", "RU"],
    goals: [3, 1],
    fairPlay: [3, 3],
    date: "1994-06-24T23:30:00Z"
  },
  {
    teams: ["RU", "CM"],
    goals: [6, 1],
    fairPlay: [3, 2],
    date: "1994-06-28T20:00:00Z"
  },
  {
    teams: ["BR", "SE"],
    goals: [1, 1],
    fairPlay: [1, 1],
    date: "1994-06-28T20:00:00Z"
  }
];

const groupBTable = makeTable(groupBMatches, "B");

const groupCMatches = [
  {
    teams: ["DE", "BO"],
    goals: [1, 0],
    fairPlay: [2, 7],
    date: "1994-06-17T19:00:00Z"
  },
  {
    teams: ["ES", "KR"],
    goals: [2, 2],
    fairPlay: [5, 2],
    date: "1994-06-17T23:30:00Z"
  },
  {
    teams: ["DE", "ES"],
    goals: [1, 1],
    fairPlay: [1, 3],
    date: "1994-06-21T20:00:00Z"
  },
  {
    teams: ["KR", "BO"],
    goals: [0, 0],
    fairPlay: [3, 4],
    date: "1994-06-23T23:30:00Z"
  },
  {
    teams: ["BO", "ES"],
    goals: [1, 3],
    fairPlay: [0, 2],
    date: "1994-06-27T20:00:00Z"
  },
  {
    teams: ["DE", "KR"],
    goals: [3, 2],
    fairPlay: [3, 1],
    date: "1994-06-27T20:00:00Z"
  }
];

const groupCTable = makeTable(groupCMatches, "C");

const groupDMatches = [
  {
    teams: ["AR", "GR"],
    goals: [4, 0],
    fairPlay: [1, 2],
    date: "1994-06-21T16:30:00Z"
  },
  {
    teams: ["NG", "BG"],
    goals: [3, 0],
    fairPlay: [1, 1],
    date: "1994-06-21T23:30:00Z"
  },
  {
    teams: ["AR", "NG"],
    goals: [2, 1],
    fairPlay: [1, 2],
    date: "1994-06-25T20:00:00Z"
  },
  {
    teams: ["BG", "GR"],
    goals: [4, 0],
    fairPlay: [4, 4],
    date: "1994-06-26T16:30:00Z"
  },
  {
    teams: ["AR", "BG"],
    goals: [0, 2],
    fairPlay: [3, 7],
    date: "1994-06-30T23:30:00Z"
  },
  {
    teams: ["GR", "NG"],
    goals: [0, 2],
    fairPlay: [2, 2],
    date: "1994-06-30T23:30:00Z"
  }
];

const groupDTable = makeTable(groupDMatches, "D");

const groupEMatches = [
  {
    teams: ["IT", "IE"],
    goals: [0, 1],
    fairPlay: [0, 3],
    date: "1994-06-18T20:00:00Z"
  },
  {
    teams: ["NO", "MX"],
    goals: [1, 0],
    fairPlay: [2, 1],
    date: "1994-06-19T20:00:00Z"
  },
  {
    teams: ["IT", "NO"],
    goals: [1, 0],
    fairPlay: [4, 2],
    date: "1994-06-23T20:00:00Z"
  },
  {
    teams: ["MX", "IE"],
    goals: [2, 1],
    fairPlay: [2, 2],
    date: "1994-06-24T16:30:00Z"
  },
  {
    teams: ["IE", "NO"],
    goals: [0, 0],
    fairPlay: [3, 2],
    date: "1994-06-28T16:30:00Z"
  },
  {
    teams: ["IT", "MX"],
    goals: [1, 1],
    fairPlay: [1, 3],
    date: "1994-06-28T16:30:00Z"
  }
];

const groupETable = makeTable(groupEMatches, "E");

const groupFMatches = [
  {
    teams: ["BE", "MA"],
    goals: [1, 0],
    fairPlay: [2, 3],
    date: "1994-06-19T16:30:00Z"
  },
  {
    teams: ["NL", "SA"],
    goals: [2, 1],
    fairPlay: [2, 3],
    date: "1994-06-20T23:30:00Z"
  },
  {
    teams: ["BE", "NL"],
    goals: [1, 0],
    fairPlay: [1, 5],
    date: "1994-06-25T16:30:00Z"
  },
  {
    teams: ["SA", "MA"],
    goals: [2, 1],
    fairPlay: [4, 2],
    date: "1994-06-25T16:30:00Z"
  },
  {
    teams: ["MA", "NL"],
    goals: [1, 2],
    fairPlay: [5, 2],
    date: "1994-06-29T16:30:00Z"
  },
  {
    teams: ["BE", "SA"],
    goals: [0, 1],
    fairPlay: [2, 2],
    date: "1994-06-29T16:30:00Z"
  }
];

const groupFTable = makeTable(groupFMatches, "F");

const mergedGroupTables = [
  groupATable,
  groupBTable,
  groupCTable,
  groupDTable,
  groupETable,
  groupFTable
];

const first = mergedGroupTables.map((group) => group[0].team);
const second = mergedGroupTables.map((group) => group[1].team);
const third = mergedGroupTables.map((group) => group[2]);

const thirdTable = makeEasyTable(third);

const bestThirds = thirdTable.slice(0, 4).map((item) => {
  const { group, team } = item;
  return { group, team };
});

const winningCombination = bestThirds
  .map((item) => item.group)
  .sort()
  .join("");

const getAssociation = (winningCombination) => {
  switch (winningCombination) {
    case "ABCD":
    case "ABCE":
    case "ABCF":
      return [3, 7, 5, 2];
    case "ABDE":
    case "ABDF":
      return [7, 5, 3, 2];
    case "ABEF":
      return [5, 7, 3, 2];
    case "ACDE":
    case "ACDF":
    case "ADEF":
    case "BCDF":
    case "BCEF":
    case "BDEF":
    case "CDEF":
      return [5, 7, 2, 3];
    case "BCDE":
      return [7, 5, 2, 3];
    default:
      return [];
  }
};

const assoc = getAssociation(winningCombination);

const wTeams = bestThirds
  .sort((a, b) => (a.group < b.group ? -1 : +1))
  .map((item) => item.team);

const teamsAF1 = [first[2], wTeams[assoc.indexOf(3)]];
const goalsAF1 = [3, 2];
const addAF1 = (lang) => null;
const teamsAF2 = [second[0], second[2]];
const goalsAF2 = [0, 3];
const addAF2 = (lang) => null;
const teamsAF3 = [second[5], second[1]];
const goalsAF3 = [1, 3];
const addAF3 = (lang) => null;
const teamsAF4 = [first[0], wTeams[assoc.indexOf(7)]];
const goalsAF4 = [3, 2];
const addAF4 = (lang) => null;
const teamsAF5 = [first[5], second[4]];
const goalsAF5 = [2, 0];
const addAF5 = (lang) => null;
const teamsAF6 = [first[1], wTeams[assoc.indexOf(5)]];
const goalsAF6 = [1, 0];
const addAF6 = (lang) => null;
const teamsAF7 = [first[3], wTeams[assoc.indexOf(2)]];
const goalsAF7 = [1, 2];
const addAF7 = (lang) => `(1:1) ${localeName("ExtraTime", lang)}`;
const teamsAF8 = [first[4], second[3]];
const goalsAF8 = [1, 3];
const addAF8 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;

const teamsVF1 = [getKoTeam(teamsAF7, goalsAF7), getKoTeam(teamsAF2, goalsAF2)];
const goalsVF1 = [2, 1];
const addVF1 = (lang) => null;
const teamsVF2 = [getKoTeam(teamsAF6, goalsAF6), getKoTeam(teamsAF5, goalsAF5)];
const goalsVF2 = [3, 2];
const addVF2 = (lang) => null;
const teamsVF3 = [getKoTeam(teamsAF8, goalsAF8), getKoTeam(teamsAF1, goalsAF1)];
const goalsVF3 = [2, 1];
const addVF3 = (lang) => null;
const teamsVF4 = [getKoTeam(teamsAF4, goalsAF4), getKoTeam(teamsAF3, goalsAF3)];
const goalsVF4 = [4, 5];
const addVF4 = (lang) =>
  `${localeName("Penalties", lang)}, 2:2 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;

const teamsHF1 = [getKoTeam(teamsVF3, goalsVF3), getKoTeam(teamsVF1, goalsVF1)];
const goalsHF1 = [1, 2];
const addHF1 = (lang) => null;
const teamsHF2 = [getKoTeam(teamsVF4, goalsVF4), getKoTeam(teamsVF2, goalsVF2)];
const goalsHF2 = [0, 1];
const addHF2 = (lang) => null;

const teams3P = [getLoser(teamsHF2, goalsHF2), getLoser(teamsHF1, goalsHF1)];
const goals3P = [4, 0];
const add3P = (lang) => null;

const teamsF = [getKoTeam(teamsHF2, goalsHF2), getKoTeam(teamsHF1, goalsHF1)];
const goalsF = [3, 2];
const addF = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;

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
      },
      E: {
        matches: groupEMatches,
        table: groupETable
      },
      F: {
        matches: groupFMatches,
        table: groupFTable
      }
    },
    T3: thirdTable,
    AF: [
      {
        teams: teamsAF1,
        goals: goalsAF1,
        add: addAF1(lang),
        date: "1994-07-02T17:00:00Z"
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "1994-07-02T20:30:00Z"
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "1994-07-03T17:00:00Z"
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "1994-07-03T20:30:00Z"
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "1994-07-04T16:00:00Z"
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "1994-07-04T19:30:00Z"
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "1994-07-05T17:00:00Z"
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "1994-07-05T19:30:00Z"
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "1994-07-09T16:00:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "1994-07-09T19:30:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "1994-07-10T16:00:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "1994-07-09T19:30:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "1994-07-13T20:00:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "1994-07-13T23:30:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "1994-07-16T19:30:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "1994-07-17T19:30:00Z"
    },
    champion: champion
  };
};

module.exports = data;
