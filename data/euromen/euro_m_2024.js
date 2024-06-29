const {
  // localeName,
  makeTable,
  makeEasyTable,
  getKoTeam
} = require("../helpers");

const groupAMatches = [
  {
    teams: ["DE", "GB-SCT"],
    goals: [5, 1],
    fairPlay: [2, 4],
    date: "2024-06-14T19:00:00Z",
    place: {
      city: "München",
      country: "DE"
    }
  },
  {
    teams: ["HU", "CH"],
    goals: [1, 3],
    fairPlay: [2, 3],
    date: "2024-06-15T13:00:00Z",
    place: {
      city: "Köln",
      country: "DE"
    }
  },
  {
    teams: ["DE", "HU"],
    goals: [2, 0],
    fairPlay: [2, 3],
    date: "2024-06-19T16:00:00Z",
    place: {
      city: "Stuttgart",
      country: "DE"
    }
  },
  {
    teams: ["GB-SCT", "CH"],
    goals: [1, 1],
    fairPlay: [3, 2],
    date: "2024-06-19T19:00:00Z",
    place: {
      city: "Köln",
      country: "DE"
    }
  },
  {
    teams: ["CH", "DE"],
    goals: [1, 1],
    fairPlay: [3, 1],
    date: "2024-06-23T19:00:00Z",
    place: {
      city: "Frankfurt am Main",
      country: "DE"
    }
  },
  {
    teams: ["GB-SCT", "HU"],
    goals: [0, 1],
    fairPlay: [1, 5],
    date: "2024-06-23T19:00:00Z",
    place: {
      city: "Stuttgart",
      country: "DE"
    }
  }
];

const groupATable = makeTable(groupAMatches, "A", "eu");

const groupBMatches = [
  {
    teams: ["ES", "HR"],
    goals: [3, 0],
    fairPlay: [1, 0],
    date: "2024-06-15T16:00:00Z",
    place: {
      city: "Berlin",
      country: "DE"
    }
  },
  {
    teams: ["IT", "AL"],
    goals: [2, 1],
    fairPlay: [2, 2],
    date: "2024-06-15T19:00:00Z",
    place: {
      city: "Dortmund",
      country: "DE"
    }
  },
  {
    teams: ["HR", "AL"],
    goals: [2, 2],
    fairPlay: [1, 3],
    date: "2024-06-19T13:00:00Z",
    place: {
      city: "Hamburg",
      country: "DE"
    }
  },
  {
    teams: ["ES", "IT"],
    goals: [1, 0],
    fairPlay: [3, 2],
    date: "2024-06-20T19:00:00Z",
    place: {
      city: "Gelsenkirchen",
      country: "DE"
    }
  },
  {
    teams: ["HR", "IT"],
    goals: [1, 1],
    fairPlay: [6, 2],
    date: "2024-06-24T19:00:00Z",
    place: {
      city: "Leipzig",
      country: "DE"
    }
  },
  {
    teams: ["AL", "ES"],
    goals: [0, 1],
    fairPlay: [2, 1],
    date: "2024-06-24T19:00:00Z",
    place: {
      city: "Düsseldorf",
      country: "DE"
    }
  }
];

const groupBTable = makeTable(groupBMatches, "B", "eu");

const groupCMatches = [
  {
    teams: ["SI", "DK"],
    goals: [1, 1],
    fairPlay: [3, 1],
    date: "2024-06-16T16:00:00Z",
    place: {
      city: "Stuttgart",
      country: "DE"
    }
  },
  {
    teams: ["RS", "GB-ENG"],
    goals: [0, 1],
    fairPlay: [3, 0],
    date: "2024-06-16T19:00:00Z",
    place: {
      city: "Gelsenkirchen",
      country: "DE"
    }
  },
  {
    teams: ["SI", "RS"],
    goals: [1, 1],
    fairPlay: [2, 4],
    date: "2024-06-20T13:00:00Z",
    place: {
      city: "München",
      country: "DE"
    }
  },
  {
    teams: ["DK", "GB-ENG"],
    goals: [1, 1],
    fairPlay: [3, 1],
    date: "2024-06-20T16:00:00Z",
    place: {
      city: "Frankfurt am Main",
      country: "DE"
    }
  },
  {
    teams: ["GB-ENG", "SI"],
    goals: [0, 0],
    fairPlay: [3, 2],
    date: "2024-06-25T19:00:00Z",
    place: {
      city: "Köln",
      country: "DE"
    }
  },
  {
    teams: ["DK", "RS"],
    goals: [0, 0],
    fairPlay: [2, 2],
    date: "2024-06-25T19:00:00Z",
    place: {
      city: "München",
      country: "DE"
    }
  }
];

const groupCTable = makeTable(groupCMatches, "C", "eu");

const groupDMatches = [
  {
    teams: ["PL", "NL"],
    goals: [1, 2],
    fairPlay: [0, 1],
    date: "2024-06-16T13:00:00Z",
    place: {
      city: "Hamburg",
      country: "DE"
    }
  },
  {
    teams: ["AT", "FR"],
    goals: [0, 1],
    fairPlay: [5, 2],
    date: "2024-06-17T19:00:00Z",
    place: {
      city: "Düsseldorf",
      country: "DE"
    }
  },
  {
    teams: ["PL", "AT"],
    goals: [1, 3],
    fairPlay: [4, 2],
    date: "2024-06-21T16:00:00Z",
    place: {
      city: "Berlin",
      country: "DE"
    }
  },
  {
    teams: ["NL", "FR"],
    goals: [0, 0],
    fairPlay: [1, 0],
    date: "2024-06-21T19:00:00Z",
    place: {
      city: "Leipzig",
      country: "DE"
    }
  },
  {
    teams: ["NL", "AT"],
    goals: [2, 3],
    fairPlay: [0, 3],
    date: "2024-06-25T16:00:00Z",
    place: {
      city: "Berlin",
      country: "DE"
    }
  },
  {
    teams: ["FR", "PL"],
    goals: [1, 1],
    fairPlay: [1, 3],
    date: "2024-06-25T16:00:00Z",
    place: {
      city: "Dortmund",
      country: "DE"
    }
  }
];

const groupDTable = makeTable(groupDMatches, "D", "eu");

const groupEMatches = [
  {
    teams: ["RO", "UA"],
    goals: [3, 0],
    fairPlay: [1, 1],
    date: "2024-06-17T13:00:00Z",
    place: {
      city: "München",
      country: "DE"
    }
  },
  {
    teams: ["BE", "SK"],
    goals: [0, 1],
    fairPlay: [3, 1],
    date: "2024-06-17T16:00:00Z",
    place: {
      city: "Frankfurt am Main",
      country: "DE"
    }
  },
  {
    teams: ["SK", "UA"],
    goals: [1, 2],
    fairPlay: [0, 1],
    date: "2024-06-21T13:00:00Z",
    place: {
      city: "Düsseldorf",
      country: "DE"
    }
  },
  {
    teams: ["BE", "RO"],
    goals: [2, 0],
    fairPlay: [1, 2],
    date: "2024-06-22T19:00:00Z",
    place: {
      city: "Köln",
      country: "DE"
    }
  },
  {
    teams: ["SK", "RO"],
    goals: [1, 1],
    fairPlay: [1, 4],
    date: "2024-06-26T16:00:00Z",
    place: {
      city: "Frankfurt am Main",
      country: "DE"
    }
  },
  {
    teams: ["UA", "BE"],
    goals: [0, 0],
    fairPlay: [1, 1],
    date: "2024-06-26T16:00:00Z",
    place: {
      city: "Stuttgart",
      country: "DE"
    }
  }
];

const groupETable = makeTable(groupEMatches, "E", "eu");

const groupFMatches = [
  {
    teams: ["TR", "GE"],
    goals: [3, 1],
    fairPlay: [2, 1],
    date: "2024-06-18T16:00:00Z",
    place: {
      city: "Dortmund",
      country: "DE"
    }
  },
  {
    teams: ["PT", "CZ"],
    goals: [2, 1],
    fairPlay: [2, 1],
    date: "2024-06-18T19:00:00Z",
    place: {
      city: "Leipzig",
      country: "DE"
    }
  },
  {
    teams: ["GE", "CZ"],
    goals: [1, 1],
    fairPlay: [4, 5],
    date: "2024-06-22T13:00:00Z",
    place: {
      city: "Hamburg",
      country: "DE"
    }
  },
  {
    teams: ["TR", "PT"],
    goals: [0, 3],
    fairPlay: [3, 2],
    date: "2024-06-22T16:00:00Z",
    place: {
      city: "Dortmund",
      country: "DE"
    }
  },
  {
    teams: ["GE", "PT"],
    goals: [2, 0],
    fairPlay: [1, 3],
    date: "2024-06-26T19:00:00Z",
    place: {
      city: "Gelsenkirchen",
      country: "DE"
    }
  },
  {
    teams: ["CZ", "TR"],
    goals: [1, 2],
    fairPlay: [6, 11],
    date: "2024-06-26T19:00:00Z",
    place: {
      city: "Hamburg",
      country: "DE"
    }
  }
];

const groupFTable = makeTable(groupFMatches, "F", "eu");

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
      return [5, 7, 3, 2];
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

const teamsAF1 = [second[0], second[1]];
const goalsAF1 = [null, null];
const addAF1 = () => null;
const teamsAF2 = [first[0], second[2]];
const goalsAF2 = [null, null];
const addAF2 = () => null;
const teamsAF3 = [first[2], wTeams[assoc.indexOf(3)]];
const goalsAF3 = [null, null];
const addAF3 = () => null;
const teamsAF4 = [first[1], wTeams[assoc.indexOf(2)]];
const goalsAF4 = [null, null];
const addAF4 = () => null;
const teamsAF5 = [second[3], second[4]];
const goalsAF5 = [null, null];
const addAF5 = () => null;
const teamsAF6 = [first[5], wTeams[assoc.indexOf(5)]];
const goalsAF6 = [null, null];
const addAF6 = () => null;
const teamsAF7 = [first[4], wTeams[assoc.indexOf(7)]];
const goalsAF7 = [null, null];
const addAF7 = () => null;
const teamsAF8 = [first[3], second[5]];
const goalsAF8 = [null, null];
const addAF8 = () => null;

const teamsVF1 = [getKoTeam(teamsAF4, goalsAF4), getKoTeam(teamsAF2, goalsAF2)];
const goalsVF1 = [null, null];
const addVF1 = () => null;
const teamsVF2 = [getKoTeam(teamsAF6, goalsAF6), getKoTeam(teamsAF5, goalsAF5)];
const goalsVF2 = [null, null];
const addVF2 = () => null;
const teamsVF3 = [getKoTeam(teamsAF3, goalsAF3), getKoTeam(teamsAF1, goalsAF1)];
const goalsVF3 = [null, null];
const addVF3 = () => null;
const teamsVF4 = [getKoTeam(teamsAF7, goalsAF7), getKoTeam(teamsAF8, goalsAF8)];
const goalsVF4 = [null, null];
const addVF4 = () => null;

const teamsHF1 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF2, goalsVF2)];
const goalsHF1 = [null, null];
const addHF1 = () => null;
const teamsHF2 = [getKoTeam(teamsVF4, goalsVF4), getKoTeam(teamsVF3, goalsVF3)];
const goalsHF2 = [null, null];
const addHF2 = () => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)];
const goalsF = [null, null];
const addF = () => null;

const champion = getKoTeam(teamsF, goalsF);

const data = (lang) => {
  return {
    host: ["DE"],
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
        date: "2024-06-29T16:00:00Z",
        place: {
          city: "Berlin",
          country: "DE"
        }
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "2024-06-29T19:00:00Z",
        place: {
          city: "Dortmund",
          country: "DE"
        }
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "2024-06-30T16:00:00Z",
        place: {
          city: "Gelsenkirchen",
          country: "DE"
        }
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "2024-06-30T19:00:00Z",
        place: {
          city: "Köln",
          country: "DE"
        }
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "2024-07-01T16:00:00Z",
        place: {
          city: "Düsseldorf",
          country: "DE"
        }
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "2024-07-01T19:00:00Z",
        place: {
          city: "Frankfurt am Main",
          country: "DE"
        }
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "2024-07-02T16:00:00Z",
        place: {
          city: "München",
          country: "DE"
        }
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "2024-07-02T19:00:00Z",
        place: {
          city: "Leipzig",
          country: "DE"
        }
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2024-07-05T16:00:00Z",
        place: {
          city: "Stuttgart",
          country: "DE"
        }
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2024-07-05T19:00:00Z",
        place: {
          city: "Hamburg",
          country: "DE"
        }
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2024-07-06T16:00:00Z",
        place: {
          city: "Düsseldorf",
          country: "DE"
        }
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2024-07-06T19:00:00Z",
        place: {
          city: "Berlin",
          country: "DE"
        }
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2024-07-09T19:00:00Z",
        place: {
          city: "München",
          country: "DE"
        }
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2024-07-10T19:00:00Z",
        place: {
          city: "Dortmund",
          country: "DE"
        }
      }
    ],
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2024-07-14T19:00:00Z",
      place: {
        city: "Berlin",
        country: "DE"
      }
    },
    champion: champion
  };
};

module.exports = data;
