const {
  // localeName,
  makeTable,
  getKoTeam,
  getLoser
} = require("../helpers");

const groupAMatches = [
  {
    teams: ["NZ", "NO"],
    goals: [1, 0],
    fairPlay: [0, 1],
    date: "2023-07-20T07:00:00Z"
  },
  {
    teams: ["PH", "CH"],
    goals: [0, 2],
    fairPlay: [1, 2],
    date: "2023-07-21T05:00:00Z"
  },
  {
    teams: ["NZ", "PH"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-25T05:30:00Z"
  },
  {
    teams: ["CH", "NO"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-25T08:00:00Z"
  },
  {
    teams: ["NO", "PH"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-30T07:00:00Z"
  },
  {
    teams: ["CH", "NZ"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-30T07:00:00Z"
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["AU", "IE"],
    goals: [1, 0],
    fairPlay: [0, 1],
    date: "2023-07-20T10:00:00Z"
  },
  {
    teams: ["NG", "CA"],
    goals: [0, 0],
    fairPlay: [4, 2],
    date: "2023-07-21T02:30:00Z"
  },
  {
    teams: ["CA", "IE"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-26T12:00:00Z"
  },
  {
    teams: ["AU", "NG"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-27T10:00:00Z"
  },
  {
    teams: ["IE", "NG"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-31T10:00:00Z"
  },
  {
    teams: ["CA", "AU"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-31T10:00:00Z"
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["ES", "CR"],
    goals: [3, 0],
    fairPlay: [0, 0],
    date: "2023-07-21T07:30:00Z"
  },
  {
    teams: ["ZM", "JP"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-22T07:00:00Z"
  },
  {
    teams: ["JP", "CR"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-26T05:00:00Z"
  },
  {
    teams: ["ES", "ZM"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-26T07:30:00Z"
  },
  {
    teams: ["CR", "ZM"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-31T07:00:00Z"
  },
  {
    teams: ["JP", "ES"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-31T07:00:00Z"
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["GB-ENG", "HT"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-22T09:30:00Z"
  },
  {
    teams: ["DK", "CN"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-22T12:00:00Z"
  },
  {
    teams: ["CN", "HT"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-28T08:30:00Z"
  },
  {
    teams: ["GB-ENG", "DK"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-28T11:00:00Z"
  },
  {
    teams: ["HT", "DK"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-08-01T11:00:00Z"
  },
  {
    teams: ["CN", "GB-ENG"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-08-01T11:00:00Z"
  }
];

const groupDTable = makeTable(groupDMatches);

const groupEMatches = [
  {
    teams: ["US", "VN"],
    goals: [3, 0],
    fairPlay: [1, 1],
    date: "2023-07-22T01:00:00Z"
  },
  {
    teams: ["NL", "PT"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-23T07:30:00Z"
  },
  {
    teams: ["PT", "VN"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-27T01:00:00Z"
  },
  {
    teams: ["US", "NL"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-27T07:30:00Z"
  },
  {
    teams: ["VN", "NL"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-08-01T07:00:00Z"
  },
  {
    teams: ["PT", "US"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-08-01T07:00:00Z"
  }
];

const groupETable = makeTable(groupEMatches);

const groupFMatches = [
  {
    teams: ["FR", "JM"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-23T10:00:00Z"
  },
  {
    teams: ["BR", "PA"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-24T11:00:00Z"
  },
  {
    teams: ["PA", "JM"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-29T10:00:00Z"
  },
  {
    teams: ["FR", "BR"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-29T12:30:00Z"
  },
  {
    teams: ["JM", "BR"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-08-02T10:00:00Z"
  },
  {
    teams: ["PA", "FR"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-08-02T10:00:00Z"
  }
];

const groupFTable = makeTable(groupFMatches);

const groupGMatches = [
  {
    teams: ["SE", "ZA"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-23T05:00:00Z"
  },
  {
    teams: ["IT", "AR"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-24T06:00:00Z"
  },
  {
    teams: ["AR", "ZA"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-28T00:00:00Z"
  },
  {
    teams: ["SE", "IT"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-29T07:30:00Z"
  },
  {
    teams: ["ZA", "IT"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-08-02T07:00:00Z"
  },
  {
    teams: ["AR", "SE"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-08-02T07:00:00Z"
  }
];

const groupGTable = makeTable(groupGMatches);

const groupHMatches = [
  {
    teams: ["DE", "MA"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-24T08:30:00Z"
  },
  {
    teams: ["CO", "KR"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-25T02:00:00Z"
  },
  {
    teams: ["KR", "MA"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-30T04:30:00Z"
  },
  {
    teams: ["DE", "CO"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-07-30T09:30:00Z"
  },
  {
    teams: ["MA", "CO"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-08-03T10:00:00Z"
  },
  {
    teams: ["KR", "DE"],
    goals: [null, null],
    fairPlay: [null, null],
    date: "2023-08-03T10:00:00Z"
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

const teamsAF1 = [first[0], second[2]];
const goalsAF1 = [null, null];
const addAF1 = () => null;
const teamsAF2 = [first[2], second[0]];
const goalsAF2 = [null, null];
const addAF2 = () => null;
const teamsAF3 = [first[4], second[6]];
const goalsAF3 = [null, null];
const addAF3 = () => null;
const teamsAF4 = [first[6], second[4]];
const goalsAF4 = [null, null];
const addAF4 = () => null;
const teamsAF5 = [first[3], second[1]];
const goalsAF5 = [null, null];
const addAF5 = () => null;
const teamsAF6 = [first[1], second[3]];
const goalsAF6 = [null, null];
const addAF6 = () => null;
const teamsAF7 = [first[7], second[5]];
const goalsAF7 = [null, null];
const addAF7 = () => null;
const teamsAF8 = [first[5], second[7]];
const goalsAF8 = [null, null];
const addAF8 = () => null;

const teamsVF1 = [getKoTeam(teamsAF1, goalsAF1), getKoTeam(teamsAF3, goalsAF3)];
const goalsVF1 = [null, null];
const addVF1 = () => null;
const teamsVF2 = [getKoTeam(teamsAF2, goalsAF2), getKoTeam(teamsAF4, goalsAF4)];
const goalsVF2 = [null, null];
const addVF2 = () => null;
const teamsVF3 = [getKoTeam(teamsAF5, goalsAF5), getKoTeam(teamsAF7, goalsAF7)];
const goalsVF3 = [null, null];
const addVF3 = () => null;
const teamsVF4 = [getKoTeam(teamsAF6, goalsAF6), getKoTeam(teamsAF8, goalsAF8)];
const goalsVF4 = [null, null];
const addVF4 = () => null;

const teamsHF1 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF2, goalsVF2)];
const goalsHF1 = [null, null];
const addHF1 = () => null;
const teamsHF2 = [getKoTeam(teamsVF3, goalsVF3), getKoTeam(teamsVF4, goalsVF4)];
const goalsHF2 = [null, null];
const addHF2 = () => null;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [null, null];
const add3P = () => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [null, null];
const addF = () => null;

const champion = getKoTeam(teamsF, goalsF);

const data = (lang) => {
  return {
    host: ["AU", "NZ"],
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
        date: "2023-08-05T05:00:00Z"
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "2023-08-05T08:00:00Z"
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "2023-08-06T02:00:00Z"
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "2023-08-06T09:00:00Z"
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "2023-08-07T07:30:00Z"
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "2023-08-07T10:30:00Z"
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "2023-08-08T08:00:00Z"
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "2023-08-08T11:00:00Z"
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2023-08-11T01:00:00Z"
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2023-08-11T07:30:00Z"
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2023-08-12T07:00:00Z"
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2023-08-12T10:30:00Z"
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2023-08-15T08:00:00Z"
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2023-08-16T10:00:00Z"
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2023-08-19T08:00:00Z"
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2023-08-20T10:00:00Z"
    },
    champion: champion
  };
};

module.exports = data;
