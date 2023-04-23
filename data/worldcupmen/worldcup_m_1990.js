const {
  localeName,
  makeTable2,
  makeEasyTable,
  getKoTeam,
  getLoser
} = require("../helpers");

const groupAMatches = [
  {
    teams: ["IT", "AT"],
    goals: [1, 0],
    fairPlay: [0, 1],
    date: "1990-06-09T19:00:00Z"
  },
  {
    teams: ["US", "CS"],
    goals: [1, 5],
    fairPlay: [5, 2],
    date: "1990-06-10T15:00:00Z"
  },
  {
    teams: ["IT", "US"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "1990-06-14T19:00:00Z"
  },
  {
    teams: ["AT", "CS"],
    goals: [0, 1],
    fairPlay: [3, 2],
    date: "1990-06-15T15:00:00Z"
  },
  {
    teams: ["IT", "CS"],
    goals: [2, 0],
    fairPlay: [2, 2],
    date: "1990-06-19T19:00:00Z"
  },
  {
    teams: ["AT", "US"],
    goals: [2, 1],
    fairPlay: [8, 4],
    date: "1990-06-19T19:00:00Z"
  }
];

const groupATable = makeTable2(groupAMatches, "A");

const groupBMatches = [
  {
    teams: ["AR", "CM"],
    goals: [0, 1],
    fairPlay: [1, 9],
    date: "1990-06-08T16:00:00Z"
  },
  {
    teams: ["SU", "RO"],
    goals: [0, 2],
    fairPlay: [1, 1],
    date: "1990-06-09T15:00:00Z"
  },
  {
    teams: ["AR", "SU"],
    goals: [2, 0],
    fairPlay: [5, 4],
    date: "1990-06-13T19:00:00Z"
  },
  {
    teams: ["CM", "RO"],
    goals: [2, 1],
    fairPlay: [2, 1],
    date: "1990-06-14T15:00:00Z"
  },
  {
    teams: ["AR", "RO"],
    goals: [1, 1],
    fairPlay: [2, 3],
    date: "1990-06-18T19:00:00Z"
  },
  {
    teams: ["CM", "SU"],
    goals: [0, 4],
    fairPlay: [2, 1],
    date: "1990-06-18T19:00:00Z"
  }
];

const groupBTable = makeTable2(groupBMatches, "B");

const groupCMatches = [
  {
    teams: ["BR", "SE"],
    goals: [2, 1],
    fairPlay: [3, 1],
    date: "1990-06-10T19:00:00Z"
  },
  {
    teams: ["CR", "GB-SCT"],
    goals: [1, 0],
    fairPlay: [0, 0],
    date: "1990-06-11T15:00:00Z"
  },
  {
    teams: ["BR", "CR"],
    goals: [1, 0],
    fairPlay: [2, 2],
    date: "1990-06-16T15:00:00Z"
  },
  {
    teams: ["SE", "GB-SCT"],
    goals: [1, 2],
    fairPlay: [1, 1],
    date: "1990-06-16T19:00:00Z"
  },
  {
    teams: ["BR", "GB-SCT"],
    goals: [1, 0],
    fairPlay: [0, 2],
    date: "1990-06-20T19:00:00Z"
  },
  {
    teams: ["SE", "CR"],
    goals: [1, 2],
    fairPlay: [2, 2],
    date: "1990-06-20T19:00:00Z"
  }
];

const groupCTable = makeTable2(groupCMatches, "C");

const groupDMatches = [
  {
    teams: ["AE", "CO"],
    goals: [0, 2],
    fairPlay: [3, 0],
    date: "1990-06-09T15:00:00Z"
  },
  {
    teams: ["DE-BRD", "YU-SFR"],
    goals: [4, 1],
    fairPlay: [1, 0],
    date: "1990-06-10T19:00:00Z"
  },
  {
    teams: ["YU-SFR", "CO"],
    goals: [1, 0],
    fairPlay: [1, 0],
    date: "1990-06-14T15:00:00Z"
  },
  {
    teams: ["DE-BRD", "AE"],
    goals: [5, 1],
    fairPlay: [1, 2],
    date: "1990-06-15T19:00:00Z"
  },
  {
    teams: ["DE-BRD", "CO"],
    goals: [1, 1],
    fairPlay: [0, 2],
    date: "1990-06-19T15:00:00Z"
  },
  {
    teams: ["YU-SFR", "AE"],
    goals: [4, 1],
    fairPlay: [3, 4],
    date: "1990-06-19T15:00:00Z"
  }
];

const groupDTable = makeTable2(groupDMatches, "D");

const groupEMatches = [
  {
    teams: ["BE", "KR"],
    goals: [2, 0],
    fairPlay: [0, 1],
    date: "1990-06-12T15:00:00Z"
  },
  {
    teams: ["UY", "ES"],
    goals: [0, 0],
    fairPlay: [2, 2],
    date: "1990-06-13T15:00:00Z"
  },
  {
    teams: ["BE", "UY"],
    goals: [3, 1],
    fairPlay: [4, 1],
    date: "1990-06-17T19:00:00Z"
  },
  {
    teams: ["KR", "ES"],
    goals: [1, 3],
    fairPlay: [3, 0],
    date: "1990-06-17T19:00:00Z"
  },
  {
    teams: ["BE", "ES"],
    goals: [1, 2],
    fairPlay: [0, 0],
    date: "1990-06-21T15:00:00Z"
  },
  {
    teams: ["KR", "UY"],
    goals: [0, 1],
    fairPlay: [5, 2],
    date: "1990-06-21T15:00:00Z"
  }
];

const groupETable = makeTable2(groupEMatches, "E");

const groupFMatches = [
  {
    teams: ["GB-ENG", "IE"],
    goals: [1, 1],
    fairPlay: [1, 0],
    date: "1990-06-11T19:00:00Z"
  },
  {
    teams: ["NL", "EG"],
    goals: [1, 1],
    fairPlay: [1, 1],
    date: "1990-06-12T19:00:00Z"
  },
  {
    teams: ["GB-ENG", "NL"],
    goals: [0, 0],
    fairPlay: [0, 0],
    date: "1990-06-16T19:00:00Z"
  },
  {
    teams: ["IE", "EG"],
    goals: [0, 0],
    fairPlay: [1, 1],
    date: "1990-06-17T15:00:00Z"
  },
  {
    teams: ["GB-ENG", "EG"],
    goals: [1, 0],
    fairPlay: [1, 2],
    date: "1990-06-21T19:00:00Z"
  },
  {
    teams: ["IE", "NL"],
    goals: [1, 1],
    fairPlay: [0, 1],
    date: "1990-06-21T19:00:00Z"
  }
];

const groupFTable = makeTable2(groupFMatches, "F");

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

const thirdTable = makeEasyTable(third, "wc", ["CO", "AR"]);

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

const teamsAF1 = [first[1], wTeams[assoc.indexOf(7)]];
const goalsAF1 = [2, 1];
const addAF1 = (lang) => `(0:0) ${localeName("Penalties", lang)}`;
const teamsAF2 = [second[0], second[2]];
const goalsAF2 = [4, 1];
const addAF2 = () => null;
const teamsAF3 = [first[2], wTeams[assoc.indexOf(5)]];
const goalsAF3 = [0, 1];
const addAF3 = () => null;
const teamsAF4 = [first[3], wTeams[assoc.indexOf(3)]];
const goalsAF4 = [2, 1];
const addAF4 = () => null;
const teamsAF5 = [second[5], second[1]];
const goalsAF5 = [5, 4];
const addAF5 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;
const teamsAF6 = [first[0], wTeams[assoc.indexOf(2)]];
const goalsAF6 = [2, 0];
const addAF6 = () => null;
const teamsAF7 = [first[4], second[3]];
const goalsAF7 = [1, 2];
const addAF7 = (lang) => `(1:1) ${localeName("Penalties", lang)}`;
const teamsAF8 = [first[5], second[4]];
const goalsAF8 = [1, 0];
const addAF8 = (lang) => `(0:0) ${localeName("ExtraTime", lang)}`;

const teamsVF1 = [getKoTeam(teamsAF3, goalsAF3), getKoTeam(teamsAF7, goalsAF7)];
const goalsVF1 = [3, 2];
const addVF1 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;
const teamsVF2 = [getKoTeam(teamsAF5, goalsAF5), getKoTeam(teamsAF6, goalsAF6)];
const goalsVF2 = [0, 1];
const addVF2 = () => null;
const teamsVF3 = [getKoTeam(teamsAF2, goalsAF2), getKoTeam(teamsAF4, goalsAF4)];
const goalsVF3 = [0, 1];
const addVF3 = () => null;
const teamsVF4 = [getKoTeam(teamsAF1, goalsAF1), getKoTeam(teamsAF8, goalsAF8)];
const goalsVF4 = [2, 3];
const addVF4 = (lang) => `(2:2) ${localeName("ExtraTime", lang)}`;

const teamsHF1 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF2, goalsVF2)];
const goalsHF1 = [4, 3];
const addHF1 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;
const teamsHF2 = [getKoTeam(teamsVF3, goalsVF3), getKoTeam(teamsVF4, goalsVF4)];
const goalsHF2 = [4, 3];
const addHF2 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [2, 1];
const add3P = () => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [0, 1];
const addF = () => null;

const champion = getKoTeam(teamsF, goalsF);

const data = (lang) => {
  return {
    host: "IT",
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
        date: "1990-06-23T15:00:00Z"
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "1990-06-23T19:00:00Z"
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "1990-06-24T15:00:00Z"
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "1990-06-24T19:00:00Z"
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "1990-06-25T15:00:00Z"
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "1990-06-25T19:00:00Z"
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "1990-06-26T15:00:00Z"
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "1990-06-26T19:00:00Z"
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "1990-06-30T15:00:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "1990-06-30T19:00:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "1990-07-01T15:00:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "1990-07-01T19:00:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "1990-07-03T18:00:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "1990-07-04T18:00:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "1990-07-07T18:00:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "1990-07-08T18:00:00Z"
    },
    champion: champion
  };
};

module.exports = data;
