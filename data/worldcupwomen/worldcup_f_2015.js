const {
  localeName,
  makeTable,
  makeEasyTable,
  getKoTeam,
  getLoser
} = require("../helpers");

const groupAMatches = [
  {
    teams: ["CA", "CN"],
    goals: [1, 0],
    fairPlay: [1, 0],
    date: "2015-06-06T22:00:00Z",
    place: {
      city: "Edmonton",
      country: "CA"
    }
  },
  {
    teams: ["NZ", "NL"],
    goals: [0, 1],
    fairPlay: [0, 2],
    date: "2015-06-07T01:00:00Z",
    place: {
      city: "Edmonton",
      country: "CA"
    }
  },
  {
    teams: ["CN", "NL"],
    goals: [1, 0],
    fairPlay: [0, 0],
    date: "2015-06-11T22:00:00Z",
    place: {
      city: "Edmonton",
      country: "CA"
    }
  },
  {
    teams: ["CA", "NZ"],
    goals: [0, 0],
    fairPlay: [1, 2],
    date: "2015-06-12T01:00:00Z",
    place: {
      city: "Edmonton",
      country: "CA"
    }
  },
  {
    teams: ["NL", "CA"],
    goals: [1, 1],
    fairPlay: [1, 1],
    date: "2015-06-15T23:30:00Z",
    place: {
      city: "Montréal",
      country: "CA"
    }
  },
  {
    teams: ["CN", "NZ"],
    goals: [2, 2],
    fairPlay: [2, 2],
    date: "2015-06-15T23:30:00Z",
    place: {
      city: "Winnipeg",
      country: "CA"
    }
  }
];

const groupATable = makeTable(groupAMatches, "A");

const groupBMatches = [
  {
    teams: ["NO", "TH"],
    goals: [4, 0],
    fairPlay: [0, 2],
    date: "2015-06-07T17:00:00Z",
    place: {
      city: "Ottawa",
      country: "CA"
    }
  },
  {
    teams: ["DE", "CI"],
    goals: [10, 0],
    fairPlay: [0, 6],
    date: "2015-06-07T20:00:00Z",
    place: {
      city: "Ottawa",
      country: "CA"
    }
  },
  {
    teams: ["DE", "NO"],
    goals: [1, 1],
    fairPlay: [1, 0],
    date: "2015-06-11T20:00:00Z",
    place: {
      city: "Ottawa",
      country: "CA"
    }
  },
  {
    teams: ["CI", "TH"],
    goals: [2, 3],
    fairPlay: [1, 0],
    date: "2015-06-11T23:00:00Z",
    place: {
      city: "Ottawa",
      country: "CA"
    }
  },
  {
    teams: ["TH", "DE"],
    goals: [0, 4],
    fairPlay: [1, 0],
    date: "2015-06-15T20:00:00Z",
    place: {
      city: "Winnipeg",
      country: "CA"
    }
  },
  {
    teams: ["CI", "NO"],
    goals: [1, 3],
    fairPlay: [1, 1],
    date: "2015-06-15T20:00:00Z",
    place: {
      city: "Moncton",
      country: "CA"
    }
  }
];

const groupBTable = makeTable(groupBMatches, "B");

const groupCMatches = [
  {
    teams: ["CM", "EC"],
    goals: [6, 0],
    fairPlay: [1, 6],
    date: "2015-06-08T23:00:00Z",
    place: {
      city: "Vancouver",
      country: "CA"
    }
  },
  {
    teams: ["JP", "CH"],
    goals: [1, 0],
    fairPlay: [0, 3],
    date: "2015-06-09T02:00:00Z",
    place: {
      city: "Vancouver",
      country: "CA"
    }
  },
  {
    teams: ["CH", "EC"],
    goals: [10, 1],
    fairPlay: [0, 1],
    date: "2015-06-12T23:00:00Z",
    place: {
      city: "Vancouver",
      country: "CA"
    }
  },
  {
    teams: ["JP", "CM"],
    goals: [2, 1],
    fairPlay: [0, 1],
    date: "2015-06-13T02:00:00Z",
    place: {
      city: "Vancouver",
      country: "CA"
    }
  },
  {
    teams: ["CH", "CM"],
    goals: [1, 2],
    fairPlay: [1, 5],
    date: "2015-06-16T21:00:00Z",
    place: {
      city: "Winnipeg",
      country: "CA"
    }
  },
  {
    teams: ["EC", "JP"],
    goals: [0, 1],
    fairPlay: [2, 1],
    date: "2015-06-16T21:00:00Z",
    place: {
      city: "Edmonton",
      country: "CA"
    }
  }
];

const groupCTable = makeTable(groupCMatches, "C");

const groupDMatches = [
  {
    teams: ["SE", "NG"],
    goals: [3, 3],
    fairPlay: [0, 0],
    date: "2015-06-08T20:00:00Z",
    place: {
      city: "Winnipeg",
      country: "CA"
    }
  },
  {
    teams: ["US", "AU"],
    goals: [3, 1],
    fairPlay: [2, 0],
    date: "2015-06-08T23:30:00Z",
    place: {
      city: "Winnipeg",
      country: "CA"
    }
  },
  {
    teams: ["AU", "NG"],
    goals: [2, 0],
    fairPlay: [0, 2],
    date: "2015-06-12T21:00:00Z",
    place: {
      city: "Winnipeg",
      country: "CA"
    }
  },
  {
    teams: ["US", "SE"],
    goals: [0, 0],
    fairPlay: [0, 0],
    date: "2015-06-13T00:00:00Z",
    place: {
      city: "Winnipeg",
      country: "CA"
    }
  },
  {
    teams: ["NG", "US"],
    goals: [0, 1],
    fairPlay: [6, 0],
    date: "2015-06-17T00:00:00Z",
    place: {
      city: "Vancouver",
      country: "CA"
    }
  },
  {
    teams: ["AU", "SE"],
    goals: [1, 1],
    fairPlay: [0, 0],
    date: "2015-06-17T00:00:00Z",
    place: {
      city: "Edmonton",
      country: "CA"
    }
  }
];

const groupDTable = makeTable(groupDMatches, "D");

const groupEMatches = [
  {
    teams: ["ES", "CR"],
    goals: [1, 1],
    fairPlay: [1, 0],
    date: "2015-06-09T20:00:00Z",
    place: {
      city: "Montréal",
      country: "CA"
    }
  },
  {
    teams: ["BR", "KR"],
    goals: [2, 0],
    fairPlay: [0, 1],
    date: "2015-06-09T23:00:00Z",
    place: {
      city: "Montréal",
      country: "CA"
    }
  },
  {
    teams: ["BR", "ES"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2015-06-13T20:00:00Z",
    place: {
      city: "Montréal",
      country: "CA"
    }
  },
  {
    teams: ["KR", "CR"],
    goals: [2, 2],
    fairPlay: [3, 0],
    date: "2015-06-13T23:00:00Z",
    place: {
      city: "Montréal",
      country: "CA"
    }
  },
  {
    teams: ["CR", "BR"],
    goals: [0, 1],
    fairPlay: [0, 0],
    date: "2015-06-17T23:00:00Z",
    place: {
      city: "Moncton",
      country: "CA"
    }
  },
  {
    teams: ["KR", "ES"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2015-06-17T23:00:00Z",
    place: {
      city: "Ottawa",
      country: "CA"
    }
  }
];

const groupETable = makeTable(groupEMatches, "E");

const groupFMatches = [
  {
    teams: ["FR", "GB-ENG"],
    goals: [1, 0],
    fairPlay: [0, 1],
    date: "2015-06-09T17:00:00Z",
    place: {
      city: "Moncton",
      country: "CA"
    }
  },
  {
    teams: ["CO", "MX"],
    goals: [1, 1],
    fairPlay: [3, 1],
    date: "2015-06-09T20:00:00Z",
    place: {
      city: "Moncton",
      country: "CA"
    }
  },
  {
    teams: ["FR", "CO"],
    goals: [0, 2],
    fairPlay: [0, 2],
    date: "2015-06-13T17:00:00Z",
    place: {
      city: "Moncton",
      country: "CA"
    }
  },
  {
    teams: ["GB-ENG", "MX"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2015-06-13T20:00:00Z",
    place: {
      city: "Moncton",
      country: "CA"
    }
  },
  {
    teams: ["MX", "FR"],
    goals: [0, 5],
    fairPlay: [2, 0],
    date: "2015-06-17T20:00:00Z",
    place: {
      city: "Ottawa",
      country: "CA"
    }
  },
  {
    teams: ["GB-ENG", "CO"],
    goals: [2, 1],
    fairPlay: [1, 3],
    date: "2015-06-17T20:00:00Z",
    place: {
      city: "Montréal",
      country: "CA"
    }
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

const teamsAF1 = [first[1], wTeams[assoc.indexOf(2)]];
const goalsAF1 = [4, 1];
const addAF1 = () => null;
const teamsAF2 = [second[0], second[2]];
const goalsAF2 = [1, 0];
const addAF2 = () => null;
const teamsAF3 = [first[4], second[3]];
const goalsAF3 = [0, 1];
const addAF3 = () => null;
const teamsAF4 = [first[5], second[4]];
const goalsAF4 = [3, 0];
const addAF4 = () => null;
const teamsAF5 = [first[0], wTeams[assoc.indexOf(7)]];
const goalsAF5 = [1, 0];
const addAF5 = () => null;
const teamsAF6 = [second[1], second[5]];
const goalsAF6 = [1, 2];
const addAF6 = () => null;
const teamsAF7 = [first[3], wTeams[assoc.indexOf(3)]];
const goalsAF7 = [2, 0];
const addAF7 = () => null;
const teamsAF8 = [first[2], wTeams[assoc.indexOf(5)]];
const goalsAF8 = [2, 1];
const addAF8 = () => null;

const teamsVF1 = [getKoTeam(teamsAF1, goalsAF1), getKoTeam(teamsAF4, goalsAF4)];
const goalsVF1 = [5, 4];
const addVF1 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
    "ExtraTime",
    lang
  )}`;
const teamsVF2 = [getKoTeam(teamsAF2, goalsAF2), getKoTeam(teamsAF7, goalsAF7)];
const goalsVF2 = [0, 1];
const addVF2 = () => null;
const teamsVF3 = [getKoTeam(teamsAF3, goalsAF3), getKoTeam(teamsAF8, goalsAF8)];
const goalsVF3 = [0, 1];
const addVF3 = () => null;
const teamsVF4 = [getKoTeam(teamsAF6, goalsAF6), getKoTeam(teamsAF5, goalsAF5)];
const goalsVF4 = [2, 1];
const addVF4 = () => null;

const teamsHF1 = [getKoTeam(teamsVF2, goalsVF2), getKoTeam(teamsVF1, goalsVF1)];
const goalsHF1 = [2, 0];
const addHF1 = () => null;
const teamsHF2 = [getKoTeam(teamsVF3, goalsVF3), getKoTeam(teamsVF4, goalsVF4)];
const goalsHF2 = [2, 1];
const addHF2 = () => null;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)];
const goals3P = [0, 1];
const add3P = (lang) => `(0:0) ${localeName("ExtraTime", lang)}`;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [5, 2];
const addF = () => null;

const champion = getKoTeam(teamsF, goalsF);

const data = (lang) => {
  return {
    host: ["CA"],
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
        date: "2015-06-20T20:00:00Z",
        place: {
          city: "Ottawa",
          country: "CA"
        }
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "2015-06-20T23:30:00Z",
        place: {
          city: "Edmonton",
          country: "CA"
        }
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "2015-06-21T17:00:00Z",
        place: {
          city: "Moncton",
          country: "CA"
        }
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "2015-06-21T20:00:00Z",
        place: {
          city: "Montréal",
          country: "CA"
        }
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "2015-06-21T23:30:00Z",
        place: {
          city: "Vancouver",
          country: "CA"
        }
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "2015-06-22T21:00:00Z",
        place: {
          city: "Ottawa",
          country: "CA"
        }
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "2015-06-23T00:00:00Z",
        place: {
          city: "Edmonton",
          country: "CA"
        }
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "2015-06-24T02:00:00Z",
        place: {
          city: "Vancouver",
          country: "CA"
        }
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2015-06-26T20:00:00Z",
        place: {
          city: "Montréal",
          country: "CA"
        }
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2015-06-26T23:30:00Z",
        place: {
          city: "Ottawa",
          country: "CA"
        }
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2015-06-27T20:00:00Z",
        place: {
          city: "Edmonton",
          country: "CA"
        }
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2015-06-27T23:30:00Z",
        place: {
          city: "Vancouver",
          country: "CA"
        }
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2015-06-30T23:00:00Z",
        place: {
          city: "Montréal",
          country: "CA"
        }
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2015-07-01T23:00:00Z",
        place: {
          city: "Edmonton",
          country: "CA"
        }
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2015-07-04T20:00:00Z",
      place: {
        city: "Edmonton",
        country: "CA"
      }
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2015-07-05T23:00:00Z",
      place: {
        city: "Vancouver",
        country: "CA"
      }
    },
    champion: champion
  };
};

module.exports = data;
