const {
  localeName,
  makeTable,
  makeEasyTable,
  getKoTeam,
  getLoser
} = require("../helpers");

const groupAMatches = [
  {
    teams: ["FR", "KR"],
    goals: [4, 0],
    fairPlay: [0, 0],
    date: "2019-06-07T19:00:00Z"
  },
  {
    teams: ["NO", "NG"],
    goals: [3, 0],
    fairPlay: [0, 2],
    date: "2019-06-08T19:00:00Z"
  },
  {
    teams: ["NG", "KR"],
    goals: [2, 0],
    fairPlay: [1, 2],
    date: "2019-06-12T13:00:00Z"
  },
  {
    teams: ["FR", "NO"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2019-06-12T19:00:00Z"
  },
  {
    teams: ["NG", "FR"],
    goals: [0, 1],
    fairPlay: [5, 1],
    date: "2019-06-17T19:00:00Z"
  },
  {
    teams: ["KR", "NO"],
    goals: [1, 2],
    fairPlay: [2, 0],
    date: "2019-06-17T19:00:00Z"
  }
];

const groupATable = makeTable(groupAMatches, "A");

const groupBMatches = [
  {
    teams: ["DE", "CN"],
    goals: [1, 0],
    fairPlay: [1, 4],
    date: "2019-06-08T13:00:00Z"
  },
  {
    teams: ["ES", "ZA"],
    goals: [3, 1],
    fairPlay: [1, 5],
    date: "2019-06-08T16:00:00Z"
  },
  {
    teams: ["DE", "ES"],
    goals: [1, 0],
    fairPlay: [1, 0],
    date: "2019-06-12T16:00:00Z"
  },
  {
    teams: ["ZA", "CN"],
    goals: [0, 1],
    fairPlay: [1, 0],
    date: "2019-06-13T19:00:00Z"
  },
  {
    teams: ["ZA", "DE"],
    goals: [0, 4],
    fairPlay: [3, 1],
    date: "2019-06-17T16:00:00Z"
  },
  {
    teams: ["CN", "ES"],
    goals: [0, 0],
    fairPlay: [1, 0],
    date: "2019-06-17T16:00:00Z"
  }
];

const groupBTable = makeTable(groupBMatches, "B");

const groupCMatches = [
  {
    teams: ["AU", "IT"],
    goals: [1, 2],
    fairPlay: [1, 3],
    date: "2019-06-09T11:00:00Z"
  },
  {
    teams: ["BR", "JM"],
    goals: [3, 0],
    fairPlay: [2, 1],
    date: "2019-06-09T13:30:00Z"
  },
  {
    teams: ["AU", "BR"],
    goals: [3, 2],
    fairPlay: [0, 3],
    date: "2019-06-13T16:00:00Z"
  },
  {
    teams: ["JM", "IT"],
    goals: [0, 5],
    fairPlay: [2, 0],
    date: "2019-06-14T16:00:00Z"
  },
  {
    teams: ["JM", "AU"],
    goals: [1, 4],
    fairPlay: [1, 1],
    date: "2019-06-18T19:00:00Z"
  },
  {
    teams: ["IT", "BR"],
    goals: [0, 1],
    fairPlay: [1, 2],
    date: "2019-06-18T19:00:00Z"
  }
];

const groupCTable = makeTable(groupCMatches, "C");

const groupDMatches = [
  {
    teams: ["GB-ENG", "GB-SCT"],
    goals: [2, 1],
    fairPlay: [0, 2],
    date: "2019-06-09T16:00:00Z"
  },
  {
    teams: ["AR", "JP"],
    goals: [0, 0],
    fairPlay: [0, 3],
    date: "2019-06-10T16:00:00Z"
  },
  {
    teams: ["JP", "GB-SCT"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2019-06-14T13:00:00Z"
  },
  {
    teams: ["GB-ENG", "AR"],
    goals: [1, 0],
    fairPlay: [1, 2],
    date: "2019-06-14T19:00:00Z"
  },
  {
    teams: ["JP", "GB-ENG"],
    goals: [0, 2],
    fairPlay: [0, 0],
    date: "2019-06-19T19:00:00Z"
  },
  {
    teams: ["GB-SCT", "AR"],
    goals: [3, 3],
    fairPlay: [3, 1],
    date: "2019-06-19T19:00:00Z"
  }
];

const groupDTable = makeTable(groupDMatches, "D");

const groupEMatches = [
  {
    teams: ["CA", "CM"],
    goals: [1, 0],
    fairPlay: [0, 2],
    date: "2019-06-10T19:00:00Z"
  },
  {
    teams: ["NZ", "NL"],
    goals: [0, 1],
    fairPlay: [0, 0],
    date: "2019-06-11T13:00:00Z"
  },
  {
    teams: ["NL", "CM"],
    goals: [3, 1],
    fairPlay: [0, 3],
    date: "2019-06-15T13:00:00Z"
  },
  {
    teams: ["CA", "NZ"],
    goals: [2, 0],
    fairPlay: [0, 0],
    date: "2019-06-15T19:00:00Z"
  },
  {
    teams: ["NL", "CA"],
    goals: [2, 1],
    fairPlay: [2, 2],
    date: "2019-06-20T16:00:00Z"
  },
  {
    teams: ["CM", "NZ"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2019-06-20T16:00:00Z"
  }
];

const groupETable = makeTable(groupEMatches, "E");

const groupFMatches = [
  {
    teams: ["CL", "SE"],
    goals: [0, 2],
    fairPlay: [2, 1],
    date: "2019-06-11T16:00:00Z"
  },
  {
    teams: ["US", "TH"],
    goals: [13, 0],
    fairPlay: [0, 1],
    date: "2019-06-11T19:00:00Z"
  },
  {
    teams: ["SE", "TH"],
    goals: [5, 1],
    fairPlay: [0, 2],
    date: "2019-06-16T13:00:00Z"
  },
  {
    teams: ["US", "CL"],
    goals: [3, 0],
    fairPlay: [2, 3],
    date: "2019-06-16T16:00:00Z"
  },
  {
    teams: ["SE", "US"],
    goals: [0, 2],
    fairPlay: [1, 1],
    date: "2019-06-20T19:00:00Z"
  },
  {
    teams: ["TH", "CL"],
    goals: [0, 2],
    fairPlay: [2, 0],
    date: "2019-06-20T19:00:00Z"
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

const thirdTable = makeEasyTable(third, "wc");

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

const teamsAF1 = [first[1], wTeams[assoc.indexOf(3)]];
const goalsAF1 = [3, 0];
const addAF1 = () => null;
const teamsAF2 = [second[0], second[2]];
const goalsAF2 = [4, 1];
const addAF2 = (lang) =>
  `${localeName("Penalties", lang)} 1:1 (1:1) ${localeName("ExtraTime", lang)}`;
const teamsAF3 = [first[3], wTeams[assoc.indexOf(2)]];
const goalsAF3 = [3, 0];
const addAF3 = () => null;
const teamsAF4 = [first[0], wTeams[assoc.indexOf(5)]];
const goalsAF4 = [2, 1];
const addAF4 = (lang) => `(1:1) ${localeName("ExtraTime", lang)}`;
const teamsAF5 = [second[1], first[5]];
const goalsAF5 = [1, 2];
const addAF5 = () => null;
const teamsAF6 = [second[5], second[4]];
const goalsAF6 = [1, 0];
const addAF6 = () => null;
const teamsAF7 = [first[2], wTeams[assoc.indexOf(7)]];
const goalsAF7 = [2, 0];
const addAF7 = () => null;
const teamsAF8 = [first[4], second[3]];
const goalsAF8 = [2, 1];
const addAF8 = () => null;

const teamsVF1 = [getKoTeam(teamsAF2, goalsAF2), getKoTeam(teamsAF3, goalsAF3)];
const goalsVF1 = [0, 3];
const addVF1 = () => null;
const teamsVF2 = [getKoTeam(teamsAF4, goalsAF4), getKoTeam(teamsAF5, goalsAF5)];
const goalsVF2 = [1, 2];
const addVF2 = () => null;
const teamsVF3 = [getKoTeam(teamsAF7, goalsAF7), getKoTeam(teamsAF8, goalsAF8)];
const goalsVF3 = [0, 2];
const addVF3 = () => null;
const teamsVF4 = [getKoTeam(teamsAF1, goalsAF1), getKoTeam(teamsAF6, goalsAF6)];
const goalsVF4 = [1, 2];
const addVF4 = () => null;

const teamsHF1 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF2, goalsVF2)];
const goalsHF1 = [1, 2];
const addHF1 = () => null;
const teamsHF2 = [getKoTeam(teamsVF3, goalsVF3), getKoTeam(teamsVF4, goalsVF4)];
const goalsHF2 = [1, 0];
const addHF2 = (lang) => `(0:0) ${localeName("ExtraTime", lang)}`;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [1, 2];
const add3P = () => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [2, 0];
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
      }
    },
    T3: thirdTable,
    AF: [
      {
        teams: teamsAF1,
        goals: goalsAF1,
        add: addAF1(lang),
        date: "2019-06-22T15:30:00Z"
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "2019-06-22T19:00:00Z"
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "2019-06-23T15:30:00Z"
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "2019-06-23T19:00:00Z"
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "2019-06-24T16:00:00Z"
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "2019-06-24T19:00:00Z"
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "2019-06-25T16:00:00Z"
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "2019-06-25T19:00:00Z"
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2019-06-27T19:00:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2019-06-28T19:00:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2019-06-29T13:00:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2019-06-29T16:30:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2019-07-02T19:00:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2019-07-03T19:00:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2019-07-06T15:00:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2019-07-07T15:00:00Z"
    },
    champion: champion
  };
};

module.exports = data;
