const { localeName, makeTable, getKoTeam, getLoser } = require("../helpers");

const groupAMatches = [
  {
    teams: ["NZ", "NO"],
    goals: [1, 0],
    fairPlay: [0, 1],
    date: "2023-07-20T07:00:00Z",
    place: {
      city: "Auckland",
      country: "NZ"
    }
  },
  {
    teams: ["PH", "CH"],
    goals: [0, 2],
    fairPlay: [1, 2],
    date: "2023-07-21T05:00:00Z",
    place: {
      city: "Dunedin",
      country: "NZ"
    }
  },
  {
    teams: ["NZ", "PH"],
    goals: [0, 1],
    fairPlay: [1, 1],
    date: "2023-07-25T05:30:00Z",
    place: {
      city: "Wellington",
      country: "NZ"
    }
  },
  {
    teams: ["CH", "NO"],
    goals: [0, 0],
    fairPlay: [0, 0],
    date: "2023-07-25T08:00:00Z",
    place: {
      city: "Hamilton",
      country: "NZ"
    }
  },
  {
    teams: ["NO", "PH"],
    goals: [6, 0],
    fairPlay: [1, 4],
    date: "2023-07-30T07:00:00Z",
    place: {
      city: "Auckland",
      country: "NZ"
    }
  },
  {
    teams: ["CH", "NZ"],
    goals: [0, 0],
    fairPlay: [0, 0],
    date: "2023-07-30T07:00:00Z",
    place: {
      city: "Dunedin",
      country: "NZ"
    }
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["AU", "IE"],
    goals: [1, 0],
    fairPlay: [0, 1],
    date: "2023-07-20T10:00:00Z",
    place: {
      city: "Sydney",
      country: "AU"
    }
  },
  {
    teams: ["NG", "CA"],
    goals: [0, 0],
    fairPlay: [4, 2],
    date: "2023-07-21T02:30:00Z",
    place: {
      city: "Melbourne",
      country: "AU"
    }
  },
  {
    teams: ["CA", "IE"],
    goals: [2, 1],
    fairPlay: [2, 1],
    date: "2023-07-26T12:00:00Z",
    place: {
      city: "Perth",
      country: "AU"
    }
  },
  {
    teams: ["AU", "NG"],
    goals: [2, 3],
    fairPlay: [1, 2],
    date: "2023-07-27T10:00:00Z",
    place: {
      city: "Brisbane",
      country: "AU"
    }
  },
  {
    teams: ["IE", "NG"],
    goals: [0, 0],
    fairPlay: [1, 0],
    date: "2023-07-31T10:00:00Z",
    place: {
      city: "Brisbane",
      country: "AU"
    }
  },
  {
    teams: ["CA", "AU"],
    goals: [0, 4],
    fairPlay: [0, 3],
    date: "2023-07-31T10:00:00Z",
    place: {
      city: "Melbourne",
      country: "AU"
    }
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["ES", "CR"],
    goals: [3, 0],
    fairPlay: [0, 0],
    date: "2023-07-21T07:30:00Z",
    place: {
      city: "Wellington",
      country: "NZ"
    }
  },
  {
    teams: ["ZM", "JP"],
    goals: [0, 5],
    fairPlay: [3, 0],
    date: "2023-07-22T07:00:00Z",
    place: {
      city: "Hamilton",
      country: "NZ"
    }
  },
  {
    teams: ["JP", "CR"],
    goals: [2, 0],
    fairPlay: [0, 1],
    date: "2023-07-26T05:00:00Z",
    place: {
      city: "Dunedin",
      country: "NZ"
    }
  },
  {
    teams: ["ES", "ZM"],
    goals: [5, 0],
    fairPlay: [0, 2],
    date: "2023-07-26T07:30:00Z",
    place: {
      city: "Auckland",
      country: "NZ"
    }
  },
  {
    teams: ["CR", "ZM"],
    goals: [1, 3],
    fairPlay: [3, 2],
    date: "2023-07-31T07:00:00Z",
    place: {
      city: "Hamilton",
      country: "NZ"
    }
  },
  {
    teams: ["JP", "ES"],
    goals: [4, 0],
    fairPlay: [0, 2],
    date: "2023-07-31T07:00:00Z",
    place: {
      city: "Wellington",
      country: "NZ"
    }
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["GB-ENG", "HT"],
    goals: [1, 0],
    fairPlay: [2, 0],
    date: "2023-07-22T09:30:00Z",
    place: {
      city: "Brisbane",
      country: "AU"
    }
  },
  {
    teams: ["DK", "CN"],
    goals: [1, 0],
    fairPlay: [1, 0],
    date: "2023-07-22T12:00:00Z",
    place: {
      city: "Perth",
      country: "AU"
    }
  },
  {
    teams: ["GB-ENG", "DK"],
    goals: [1, 0],
    fairPlay: [0, 0],
    date: "2023-07-28T08:30:00Z",
    place: {
      city: "Sydney",
      country: "AU"
    }
  },
  {
    teams: ["CN", "HT"],
    goals: [1, 0],
    fairPlay: [3, 1],
    date: "2023-07-28T11:00:00Z",
    place: {
      city: "Adelaide",
      country: "AU"
    }
  },
  {
    teams: ["HT", "DK"],
    goals: [0, 2],
    fairPlay: [0, 1],
    date: "2023-08-01T11:00:00Z",
    place: {
      city: "Perth",
      country: "AU"
    }
  },
  {
    teams: ["CN", "GB-ENG"],
    goals: [1, 6],
    fairPlay: [0, 1],
    date: "2023-08-01T11:00:00Z",
    place: {
      city: "Adelaide",
      country: "AU"
    }
  }
];

const groupDTable = makeTable(groupDMatches);

const groupEMatches = [
  {
    teams: ["US", "VN"],
    goals: [3, 0],
    fairPlay: [1, 1],
    date: "2023-07-22T01:00:00Z",
    place: {
      city: "Auckland",
      country: "NZ"
    }
  },
  {
    teams: ["NL", "PT"],
    goals: [1, 0],
    fairPlay: [1, 2],
    date: "2023-07-23T07:30:00Z",
    place: {
      city: "Dunedin",
      country: "NZ"
    }
  },
  {
    teams: ["US", "NL"],
    goals: [1, 1],
    fairPlay: [1, 0],
    date: "2023-07-27T01:00:00Z",
    place: {
      city: "Wellington",
      country: "NZ"
    }
  },
  {
    teams: ["PT", "VN"],
    goals: [2, 0],
    fairPlay: [1, 0],
    date: "2023-07-27T07:30:00Z",
    place: {
      city: "Hamilton",
      country: "NZ"
    }
  },
  {
    teams: ["VN", "NL"],
    goals: [0, 7],
    fairPlay: [1, 0],
    date: "2023-08-01T07:00:00Z",
    place: {
      city: "Dunedin",
      country: "NZ"
    }
  },
  {
    teams: ["PT", "US"],
    goals: [0, 0],
    fairPlay: [3, 3],
    date: "2023-08-01T07:00:00Z",
    place: {
      city: "Auckland",
      country: "NZ"
    }
  }
];

const groupETable = makeTable(groupEMatches);

const groupFMatches = [
  {
    teams: ["FR", "JM"],
    goals: [0, 0],
    fairPlay: [1, 4],
    date: "2023-07-23T10:00:00Z",
    place: {
      city: "Sydney",
      country: "AU"
    }
  },
  {
    teams: ["BR", "PA"],
    goals: [4, 0],
    fairPlay: [0, 0],
    date: "2023-07-24T11:00:00Z",
    place: {
      city: "Adelaide",
      country: "AU"
    }
  },
  {
    teams: ["FR", "BR"],
    goals: [2, 1],
    fairPlay: [4, 1],
    date: "2023-07-29T10:00:00Z",
    place: {
      city: "Brisbane",
      country: "AU"
    }
  },
  {
    teams: ["PA", "JM"],
    goals: [0, 1],
    fairPlay: [2, 1],
    date: "2023-07-29T12:30:00Z",
    place: {
      city: "Perth",
      country: "AU"
    }
  },
  {
    teams: ["JM", "BR"],
    goals: [0, 0],
    fairPlay: [1, 0],
    date: "2023-08-02T10:00:00Z",
    place: {
      city: "Melbourne",
      country: "AU"
    }
  },
  {
    teams: ["PA", "FR"],
    goals: [3, 6],
    fairPlay: [1, 0],
    date: "2023-08-02T10:00:00Z",
    place: {
      city: "Sydney",
      country: "AU"
    }
  }
];

const groupFTable = makeTable(groupFMatches);

const groupGMatches = [
  {
    teams: ["SE", "ZA"],
    goals: [2, 1],
    fairPlay: [0, 2],
    date: "2023-07-23T05:00:00Z",
    place: {
      city: "Wellington",
      country: "NZ"
    }
  },
  {
    teams: ["IT", "AR"],
    goals: [1, 0],
    fairPlay: [2, 4],
    date: "2023-07-24T06:00:00Z",
    place: {
      city: "Auckland",
      country: "NZ"
    }
  },
  {
    teams: ["AR", "ZA"],
    goals: [2, 2],
    fairPlay: [1, 2],
    date: "2023-07-28T00:00:00Z",
    place: {
      city: "Dunedin",
      country: "NZ"
    }
  },
  {
    teams: ["SE", "IT"],
    goals: [5, 0],
    fairPlay: [0, 0],
    date: "2023-07-29T07:30:00Z",
    place: {
      city: "Wellington",
      country: "NZ"
    }
  },
  {
    teams: ["ZA", "IT"],
    goals: [3, 2],
    fairPlay: [0, 0],
    date: "2023-08-02T07:00:00Z",
    place: {
      city: "Wellington",
      country: "NZ"
    }
  },
  {
    teams: ["AR", "SE"],
    goals: [0, 2],
    fairPlay: [1, 2],
    date: "2023-08-02T07:00:00Z",
    place: {
      city: "Hamilton",
      country: "NZ"
    }
  }
];

const groupGTable = makeTable(groupGMatches);

const groupHMatches = [
  {
    teams: ["DE", "MA"],
    goals: [6, 0],
    fairPlay: [1, 0],
    date: "2023-07-24T08:30:00Z",
    place: {
      city: "Melbourne",
      country: "AU"
    }
  },
  {
    teams: ["CO", "KR"],
    goals: [2, 0],
    fairPlay: [2, 2],
    date: "2023-07-25T02:00:00Z",
    place: {
      city: "Sydney",
      country: "AU"
    }
  },
  {
    teams: ["KR", "MA"],
    goals: [0, 1],
    fairPlay: [0, 1],
    date: "2023-07-30T04:30:00Z",
    place: {
      city: "Adelaide",
      country: "AU"
    }
  },
  {
    teams: ["DE", "CO"],
    goals: [1, 2],
    fairPlay: [1, 3],
    date: "2023-07-30T09:30:00Z",
    place: {
      city: "Sydney",
      country: "AU"
    }
  },
  {
    teams: ["MA", "CO"],
    goals: [1, 0],
    fairPlay: [0, 1],
    date: "2023-08-03T10:00:00Z",
    place: {
      city: "Perth",
      country: "AU"
    }
  },
  {
    teams: ["KR", "DE"],
    goals: [1, 1],
    fairPlay: [0, 1],
    date: "2023-08-03T10:00:00Z",
    place: {
      city: "Brisbane",
      country: "AU"
    }
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

const teamsAF1 = [first[0], second[2]]; // CH - ES
const goalsAF1 = [1, 5];
const addAF1 = () => null;
const teamsAF2 = [first[2], second[0]]; // JP - NO
const goalsAF2 = [3, 1];
const addAF2 = () => null;
const teamsAF3 = [first[4], second[6]]; // NL - ZA
const goalsAF3 = [2, 0];
const addAF3 = () => null;
const teamsAF4 = [first[6], second[4]]; // SE - US
const goalsAF4 = [5, 4];
const addAF4 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;
const teamsAF5 = [first[3], second[1]]; // GB-ENG - NG
const goalsAF5 = [4, 2];
const addAF5 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;
const teamsAF6 = [first[1], second[3]]; // AU - DK
const goalsAF6 = [2, 0];
const addAF6 = () => null;
const teamsAF7 = [first[7], second[5]]; // CO - JM
const goalsAF7 = [1, 0];
const addAF7 = () => null;
const teamsAF8 = [first[5], second[7]]; // FR - MA
const goalsAF8 = [4, 0];
const addAF8 = () => null;

const teamsVF1 = [getKoTeam(teamsAF1, goalsAF1), getKoTeam(teamsAF3, goalsAF3)]; // ES - NL
const goalsVF1 = [2, 1];
const addVF1 = (lang) => `(1:1) ${localeName("ExtraTime", lang)}`;
const teamsVF2 = [getKoTeam(teamsAF2, goalsAF2), getKoTeam(teamsAF4, goalsAF4)]; // JP - SE
const goalsVF2 = [1, 2];
const addVF2 = () => null;
const teamsVF3 = [getKoTeam(teamsAF6, goalsAF6), getKoTeam(teamsAF8, goalsAF8)]; // AU - FR
const goalsVF3 = [7, 6];
const addVF3 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;
const teamsVF4 = [getKoTeam(teamsAF5, goalsAF5), getKoTeam(teamsAF7, goalsAF7)]; // GB-ENG - CO
const goalsVF4 = [2, 1];
const addVF4 = () => null;

const teamsHF1 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF2, goalsVF2)]; // ES - SE
const goalsHF1 = [2, 1];
const addHF1 = () => null;
const teamsHF2 = [getKoTeam(teamsVF3, goalsVF3), getKoTeam(teamsVF4, goalsVF4)]; // AU - GB-ENG
const goalsHF2 = [null, null];
const addHF2 = () => null;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)]; // SE -
const goals3P = [null, null];
const add3P = () => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)]; // ES -
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
        date: "2023-08-05T05:00:00Z",
        place: {
          city: "Auckland",
          country: "NZ"
        }
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "2023-08-05T08:00:00Z",
        place: {
          city: "Wellington",
          country: "NZ"
        }
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "2023-08-06T02:00:00Z",
        place: {
          city: "Sydney",
          country: "AU"
        }
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "2023-08-06T09:00:00Z",
        place: {
          city: "Melbourne",
          country: "AU"
        }
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "2023-08-07T07:30:00Z",
        place: {
          city: "Brisbane",
          country: "AU"
        }
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "2023-08-07T10:30:00Z",
        place: {
          city: "Sydney",
          country: "AU"
        }
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "2023-08-08T08:00:00Z",
        place: {
          city: "Melbourne",
          country: "AU"
        }
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "2023-08-08T11:00:00Z",
        place: {
          city: "Adelaide",
          country: "AU"
        }
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2023-08-11T01:00:00Z",
        place: {
          city: "Wellington",
          country: "NZ"
        }
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2023-08-11T07:30:00Z",
        place: {
          city: "Auckland",
          country: "NZ"
        }
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2023-08-12T07:00:00Z",
        place: {
          city: "Brisbane",
          country: "AU"
        }
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2023-08-12T10:30:00Z",
        place: {
          city: "Sydney",
          country: "AU"
        }
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2023-08-15T08:00:00Z",
        place: {
          city: "Auckland",
          country: "NZ"
        }
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2023-08-16T10:00:00Z",
        place: {
          city: "Sydney",
          country: "AU"
        }
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2023-08-19T08:00:00Z",
      place: {
        city: "Brisbane",
        country: "AU"
      }
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2023-08-20T10:00:00Z",
      place: {
        city: "Sydney",
        country: "AU"
      }
    },
    champion: champion
  };
};

module.exports = data;
