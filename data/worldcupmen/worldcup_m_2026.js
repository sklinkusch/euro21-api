const {
  getKoTeam,
  getLoser,
  localeName,
  makeTable,
  makeEasyTable
} = require("../helpers");

// venues in Mexico
const MEXICO_CITY = { city: "Ciudad de México, DF", country: "MX" };
const GUADALAJARA = { city: "Zapopan, JA", country: "MX" };
const MONTERREY = { city: "Guadalupe, NL", country: "MX" };
// venues in Canada
const VANCOUVER = { city: "Vancouver, BC", country: "CA" };
const TORONTO = { city: "Toronto, ON", country: "CA" };
// venues in the United States
const LOS_ANGELES = { city: "Inglewood, CA", country: "US" };
const SAN_FRANCISCO = { city: "Santa Clara, CA", country: "US" };
const MIAMI = { city: "Miami Gardens, FL", country: "US" };
const ATLANTA = { city: "Atlanta, GA", country: "US" };
const BOSTOM = { city: "Foxborough, MA", country: "US" };
const KANSAS_CITY = { city: "Kansas City, MO", country: "US" };
const NEW_YORK = { city: "East Rutherford, NJ", country: "US" };
const PHILADELPHIA = { city: "Philadelphia, PA", country: "US" };
const DALLAS = { city: "Arlington, TX", country: "US" };
const HOUSTON = { city: "Houston, TX", country: "US" };
const SEATTLE = { city: "Seattle, WA", country: "US" };

const groupAMatches = [
  {
    teams: ["MX", "ZA"],
    goals: [2, 0],
    fairPlay: [4, 8],
    date: "2026-06-11T19:00Z",
    place: MEXICO_CITY
  },
  {
    teams: ["KR", "CZ"],
    goals: [2, 1],
    fairPlay: [1, 0],
    date: "2026-06-12T02:00Z",
    place: GUADALAJARA
  },
  {
    teams: ["CZ", "ZA"],
    goals: [1, 1],
    fairPlay: [1, 2],
    date: "2026-06-18T16:00Z",
    place: ATLANTA
  },
  {
    teams: ["MX", "KR"],
    goals: [1, 0],
    fairPlay: [0, 2],
    date: "2026-06-19T01:00Z",
    place: MONTERREY
  },
  {
    teams: ["CZ", "MX"],
    goals: [0, 3],
    fairPlay: [0, 1],
    date: "2026-06-25T01:00Z",
    place: MEXICO_CITY
  },
  {
    teams: ["ZA", "KR"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2026-06-25T01:00Z",
    place: MONTERREY
  }
];

const groupATable = makeTable(groupAMatches);

const groupBMatches = [
  {
    teams: ["CA", "BA"],
    goals: [1, 1],
    fairPlay: [2, 3],
    date: "2026-06-12T19:00Z",
    place: TORONTO
  },
  {
    teams: ["QA", "CH"],
    goals: [1, 1],
    fairPlay: [2, 1],
    date: "2026-06-13T19:00Z",
    place: SAN_FRANCISCO
  },
  {
    teams: ["CA", "QA"],
    goals: [6, 0],
    fairPlay: [1, 7],
    date: "2026-06-18T19:00Z",
    place: VANCOUVER
  },
  {
    teams: ["CH", "BA"],
    goals: [4, 1],
    fairPlay: [1, 5],
    date: "2026-06-18T22:00Z",
    place: LOS_ANGELES
  },
  {
    teams: ["CH", "CA"],
    goals: [2, 1],
    fairPlay: [1, 2],
    date: "2026-06-24T19:00Z",
    place: VANCOUVER
  },
  {
    teams: ["BA", "QA"],
    goals: [3, 1],
    fairPlay: [1, 1],
    date: "2026-06-24T19:00Z",
    place: SEATTLE
  }
];

const groupBTable = makeTable(groupBMatches);

const groupCMatches = [
  {
    teams: ["BR", "MA"],
    goals: [1, 1],
    fairPlay: [2, 0],
    date: "2026-06-13T22:00Z",
    place: BOSTOM
  },
  {
    teams: ["HT", "GB-SCT"],
    goals: [0, 1],
    fairPlay: [1, 3],
    date: "2026-06-14T01:00Z",
    place: NEW_YORK
  },
  {
    teams: ["GB-SCT", "MA"],
    goals: [0, 1],
    fairPlay: [1, 1],
    date: "2026-06-19T22:00Z",
    place: BOSTOM
  },
  {
    teams: ["BR", "HT"],
    goals: [3, 0],
    fairPlay: [1, 3],
    date: "2026-06-20T01:00Z",
    place: PHILADELPHIA
  },
  {
    teams: ["GB-SCT", "BR"],
    goals: [0, 3],
    fairPlay: [1, 2],
    date: "2026-06-24T22:00Z",
    place: MIAMI
  },
  {
    teams: ["MA", "HT"],
    goals: [4, 2],
    fairPlay: [0, 3],
    date: "2026-06-24T22:00Z",
    place: ATLANTA
  }
];

const groupCTable = makeTable(groupCMatches);

const groupDMatches = [
  {
    teams: ["US", "PY"],
    goals: [4, 1],
    fairPlay: [1, 5],
    date: "2026-06-13T01:00Z",
    place: LOS_ANGELES
  },
  {
    teams: ["AU", "TR"],
    goals: [2, 0],
    fairPlay: [0, 1],
    date: "2026-06-14T04:00Z",
    place: VANCOUVER
  },
  {
    teams: ["US", "AU"],
    goals: [2, 0],
    fairPlay: [3, 4],
    date: "2026-06-19T17:00Z",
    place: SEATTLE
  },
  {
    teams: ["TR", "PY"],
    goals: [0, 1],
    fairPlay: [2, 5],
    date: "2023-06-20T04:00Z",
    place: SAN_FRANCISCO
  },
  {
    teams: ["TR", "US"],
    goals: [3, 2],
    fairPlay: [0, 1],
    date: "2026-06-26T02:00Z",
    place: LOS_ANGELES
  },
  {
    teams: ["PY", "AU"],
    goals: [0, 0],
    fairPlay: [1, 1],
    date: "2026-06-26T02:00Z",
    place: SAN_FRANCISCO
  }
];

const groupDTable = makeTable(groupDMatches);

const groupEMatches = [
  {
    teams: ["DE", "CW"],
    goals: [7, 1],
    fairPlay: [0, 0],
    date: "2026-06-14T17:00Z",
    place: HOUSTON
  },
  {
    teams: ["CI", "EC"],
    goals: [1, 0],
    fairPlay: [3, 1],
    date: "2026-06-14T23:00Z",
    place: PHILADELPHIA
  },
  {
    teams: ["DE", "CI"],
    goals: [2, 1],
    fairPlay: [0, 0],
    date: "2026-06-20T20:00Z",
    place: TORONTO
  },
  {
    teams: ["EC", "CW"],
    goals: [0, 0],
    fairPlay: [1, 5],
    date: "2026-06-21T00:00Z",
    place: KANSAS_CITY
  },
  {
    teams: ["CW", "CI"],
    goals: [0, 2],
    fairPlay: [2, 1],
    date: "2026-06-25T20:00Z",
    place: PHILADELPHIA
  },
  {
    teams: ["EC", "DE"],
    goals: [2, 1],
    fairPlay: [3, 1],
    date: "2026-06-25T20:00Z",
    place: NEW_YORK
  }
];

const groupETable = makeTable(groupEMatches);

const groupFMatches = [
  {
    teams: ["NL", "JP"],
    goals: [2, 2],
    fairPlay: [3, 0],
    date: "2026-06-14T20:00Z",
    place: DALLAS
  },
  {
    teams: ["SE", "TN"],
    goals: [5, 1],
    fairPlay: [0, 1],
    date: "2026-06-15T02:00Z",
    place: MONTERREY
  },
  {
    teams: ["NL", "SE"],
    goals: [5, 1],
    fairPlay: [0, 3],
    date: "2026-06-20T17:00Z",
    place: HOUSTON
  },
  {
    teams: ["TN", "JP"],
    goals: [0, 4],
    fairPlay: [0, 0],
    date: "2026-06-21T04:00Z",
    place: MONTERREY
  },
  {
    teams: ["JP", "SE"],
    goals: [1, 1],
    fairPlay: [1, 2],
    date: "2026-06-25T23:00Z",
    place: DALLAS
  },
  {
    teams: ["TN", "NL"],
    goals: [1, 3],
    fairPlay: [0, 0],
    date: "2026-08-25T23:00Z",
    place: KANSAS_CITY
  }
];

const groupFTable = makeTable(groupFMatches);

const groupGMatches = [
  {
    teams: ["BE", "EG"],
    goals: [1, 1],
    fairPlay: [2, 2],
    date: "2026-06-15T19:00Z",
    place: SEATTLE
  },
  {
    teams: ["IR", "NZ"],
    goals: [2, 2],
    fairPlay: [1, 0],
    date: "2026-06-16T01:00Z",
    place: LOS_ANGELES
  },
  {
    teams: ["BE", "IR"],
    goals: [0, 0],
    fairPlay: [4, 1],
    date: "2026-06-21T19:00Z",
    place: LOS_ANGELES
  },
  {
    teams: ["NZ", "EG"],
    goals: [1, 3],
    fairPlay: [2, 1],
    date: "2026-06-22T01:00Z",
    place: VANCOUVER
  },
  {
    teams: ["EG", "IR"],
    goals: [1, 1],
    fairPlay: [3, 7],
    date: "2026-06-27T03:00Z",
    place: SEATTLE
  },
  {
    teams: ["NZ", "BE"],
    goals: [1, 5],
    fairPlay: [2, 0],
    date: "2026-06-27T03:00Z",
    place: VANCOUVER
  }
];

const groupGTable = makeTable(groupGMatches);

const groupHMatches = [
  {
    teams: ["ES", "CV"],
    goals: [0, 0],
    fairPlay: [1, 1],
    date: "2026-06-15T16:00Z",
    place: ATLANTA
  },
  {
    teams: ["SA", "UY"],
    goals: [1, 1],
    fairPlay: [1, 0],
    date: "2026-06-15T22:00Z",
    place: MIAMI
  },
  {
    teams: ["ES", "SA"],
    goals: [4, 0],
    fairPlay: [0, 2],
    date: "2026-06-21T16:00Z",
    place: ATLANTA
  },
  {
    teams: ["UY", "CV"],
    goals: [2, 2],
    fairPlay: [2, 2],
    date: "2026-06-21T22:00Z",
    place: MIAMI
  },
  {
    teams: ["CV", "SA"],
    goals: [0, 0],
    fairPlay: [1, 3],
    date: "2026-06-27T00:00Z",
    place: HOUSTON
  },
  {
    teams: ["UY", "ES"],
    goals: [0, 1],
    fairPlay: [6, 1],
    date: "2026-06-27T00:00Z",
    place: GUADALAJARA
  }
];

const groupHTable = makeTable(groupHMatches);

const groupIMatches = [
  {
    teams: ["FR", "SN"],
    goals: [3, 1],
    fairPlay: [0, 0],
    date: "2026-06-16T19:00Z",
    place: DALLAS
  },
  {
    teams: ["IQ", "NO"],
    goals: [1, 4],
    fairPlay: [1, 0],
    date: "2026-06-16T22:00Z",
    place: BOSTOM
  },
  {
    teams: ["FR", "IQ"],
    goals: [3, 0],
    fairPlay: [0, 1],
    date: "2026-06-22T21:00Z",
    place: PHILADELPHIA
  },
  {
    teams: ["NO", "SN"],
    goals: [3, 2],
    fairPlay: [0, 0],
    date: "2026-06-23T02:00Z",
    place: NEW_YORK
  },
  {
    teams: ["NO", "FR"],
    goals: [1, 4],
    fairPlay: [1, 1],
    date: "2026-06-26T19:00Z",
    place: BOSTOM
  },
  {
    teams: ["SN", "IQ"],
    goals: [5, 0],
    fairPlay: [2, 5],
    date: "2026-06-26T19:00Z",
    place: TORONTO
  }
];

const groupITable = makeTable(groupIMatches);

const groupJMatches = [
  {
    teams: ["AR", "DZ"],
    goals: [3, 0],
    fairPlay: [0, 0],
    date: "2026-06-17T01:00Z",
    place: KANSAS_CITY
  },
  {
    teams: ["AT", "JO"],
    goals: [3, 1],
    fairPlay: [1, 0],
    date: "2026-06-17T04:00Z",
    place: SAN_FRANCISCO
  },
  {
    teams: ["AR", "AT"],
    goals: [2, 0],
    fairPlay: [2, 2],
    date: "2026-06-22T17:00Z",
    place: DALLAS
  },
  {
    teams: ["JO", "DZ"],
    goals: [1, 2],
    fairPlay: [1, 1],
    date: "2026-06-23T03:00Z",
    place: SAN_FRANCISCO
  },
  {
    teams: ["DZ", "AT"],
    goals: [3, 3],
    fairPlay: [0, 1],
    date: "2026-06-28T02:00Z",
    place: KANSAS_CITY
  },
  {
    teams: ["JO", "AR"],
    goals: [1, 3],
    fairPlay: [3, 0],
    date: "2026-06-28T02:00Z",
    place: DALLAS
  }
];

const groupJTable = makeTable(groupJMatches);

const groupKMatches = [
  {
    teams: ["PT", "CD"],
    goals: [1, 1],
    fairPlay: [3, 1],
    date: "2026-06-17T17:00Z",
    place: HOUSTON
  },
  {
    teams: ["UZ", "CO"],
    goals: [1, 3],
    fairPlay: [1, 1],
    date: "2026-06-18T02:00Z",
    place: MEXICO_CITY
  },
  {
    teams: ["PT", "UZ"],
    goals: [5, 0],
    fairPlay: [1, 1],
    date: "2026-06-23T17:00Z",
    place: HOUSTON
  },
  {
    teams: ["CO", "CD"],
    goals: [1, 0],
    fairPlay: [2, 1],
    date: "2026-06-24T02:00Z",
    place: GUADALAJARA
  },
  {
    teams: ["CO", "PT"],
    goals: [0, 0],
    fairPlay: [1, 0],
    date: "2026-06-27T23:30Z",
    place: MIAMI
  },
  {
    teams: ["CD", "UZ"],
    goals: [3, 1],
    fairPlay: [3, 2],
    date: "2026-06-27T23:30Z",
    place: ATLANTA
  }
];

const groupKTable = makeTable(groupKMatches);

const groupLMatches = [
  {
    teams: ["GB-ENG", "HR"],
    goals: [4, 2],
    fairPlay: [0, 0],
    date: "2026-06-17T20:00Z",
    place: DALLAS
  },
  {
    teams: ["GH", "PA"],
    goals: [1, 0],
    fairPlay: [1, 2],
    date: "2026-06-17T23:00Z",
    place: TORONTO
  },
  {
    teams: ["GB-ENG", "GH"],
    goals: [0, 0],
    fairPlay: [1, 1],
    date: "2026-06-23T20:00Z",
    place: BOSTOM
  },
  {
    teams: ["PA", "HR"],
    goals: [0, 1],
    fairPlay: [1, 1],
    date: "2026-06-23T23:00Z",
    place: TORONTO
  },
  {
    teams: ["PA", "GB-ENG"],
    goals: [0, 2],
    fairPlay: [2, 0],
    date: "2026-06-27T21:00Z",
    place: NEW_YORK
  },
  {
    teams: ["HR", "GH"],
    goals: [2, 1],
    fairPlay: [1, 1],
    date: "2026-06-27T21:00Z",
    place: PHILADELPHIA
  }
];

const groupLTable = makeTable(groupLMatches);

const mergedGroupTables = [
  groupATable,
  groupBTable,
  groupCTable,
  groupDTable,
  groupETable,
  groupFTable,
  groupGTable,
  groupHTable,
  groupITable,
  groupJTable,
  groupKTable,
  groupLTable
];

const first = mergedGroupTables.map((group) => group[0].team);
const second = mergedGroupTables.map((group) => group[1].team);
const thirdForTable = mergedGroupTables.map((group, index) => ({
  ...group[2],
  group: String.fromCharCode(65 + index)
}));

const thirdTable =
  thirdForTable.length === 12 ? makeEasyTable(thirdForTable, "wc") : undefined;
const third = thirdForTable.map((item) => item.team);

const teamsSF01 = [second[0], second[1]]; // ZA - CA
const goalsSF01 = [0, 1];
const addSF01 = () => null;
const teamsSF02 = [first[2], second[5]]; // BR - JP
const goalsSF02 = [2, 1];
const addSF02 = () => null;
const teamsSF03 = [first[4], third[3]]; // DE - PY
const goalsSF03 = [3, 4];
const addSF03 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName("ExtraTime", lang)}`;
const teamsSF04 = [first[5], second[2]]; // NL - MA
const goalsSF04 = [2, 3];
const addSF04 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName("ExtraTime", lang)}`;
const teamsSF05 = [second[4], second[8]]; // CI - NO
const goalsSF05 = [1, 2];
const addSF05 = () => null;
const teamsSF06 = [first[8], third[5]]; // FR - SE
const goalsSF06 = [3, 0];
const addSF06 = () => null;
const teamsSF07 = [first[0], third[4]]; // MX - EC
const goalsSF07 = [2, 0];
const addSF07 = () => null;
const teamsSF08 = [first[11], third[10]]; // GB-ENG - CD
const goalsSF08 = [2, 1];
const addSF08 = () => null;
const teamsSF09 = [first[6], third[8]]; // BE - SN
const goalsSF09 = [3, 2];
const addSF09 = (lang) => `(2:2) ${localeName("ExtraTime", lang)}`;
const teamsSF10 = [first[3], third[1]]; // US - BA
const goalsSF10 = [2, 0];
const addSF10 = () => null;
const teamsSF11 = [first[7], second[9]]; // ES - AT
const goalsSF11 = [3, 0];
const addSF11 = () => null;
const teamsSF12 = [second[10], second[11]]; // PT - HR
const goalsSF12 = [2, 1];
const addSF12 = () => null;
const teamsSF13 = [first[1], third[9]]; // CH - DZ
const goalsSF13 = [2, 0];
const addSF13 = () => null;
const teamsSF14 = [second[3], second[6]]; // AU - EG
const goalsSF14 = [2, 4];
const addSF14 = (lang) =>
  `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName("ExtraTime", lang)}`;
const teamsSF15 = [first[9], second[7]]; // AR - CV
const goalsSF15 = [3, 2];
const addSF15 = (lang) => `(2:2) ${localeName("ExtraTime", lang)}`;
const teamsSF16 = [first[10], third[11]]; // CO - GH
const goalsSF16 = [1, 0];
const addSF16 = () => null;

const teamsAF1 = [
  getKoTeam(teamsSF01, goalsSF01),
  getKoTeam(teamsSF04, goalsSF04)
]; // CA . MA
const goalsAF1 = [0, 3];
const addAF1 = () => null;
const teamsAF2 = [
  getKoTeam(teamsSF03, goalsSF03),
  getKoTeam(teamsSF06, goalsSF06)
]; // PY - FR
const goalsAF2 = [0, 1];
const addAF2 = () => null;
const teamsAF3 = [
  getKoTeam(teamsSF02, goalsSF02),
  getKoTeam(teamsSF05, goalsSF05)
]; // BR - NO
const goalsAF3 = [1, 2];
const addAF3 = () => null;
const teamsAF4 = [
  getKoTeam(teamsSF07, goalsSF07),
  getKoTeam(teamsSF08, goalsSF08)
]; // MX - GB-ENG
const goalsAF4 = [2, 3];
const addAF4 = () => null;
const teamsAF5 = [
  getKoTeam(teamsSF12, goalsSF12),
  getKoTeam(teamsSF11, goalsSF11)
]; // PT - ES
const goalsAF5 = [0, 1];
const addAF5 = () => null;
const teamsAF6 = [
  getKoTeam(teamsSF10, goalsSF10),
  getKoTeam(teamsSF09, goalsSF09)
]; // US - BE
const goalsAF6 = [1, 4];
const addAF6 = () => null;
const teamsAF7 = [
  getKoTeam(teamsSF15, goalsSF15),
  getKoTeam(teamsSF14, goalsSF14)
]; // AR - EG
const goalsAF7 = [3, 2];
const addAF7 = () => null;
const teamsAF8 = [
  getKoTeam(teamsSF13, goalsSF13),
  getKoTeam(teamsSF16, goalsSF16)
]; // CH - CO
const goalsAF8 = [4, 3];
const addAF8 = (lang) =>
  `${localeName("Penalties", lang)}, 0:0 ${localeName("ExtraTime", lang)}`;

const teamsVF1 = [getKoTeam(teamsAF2, goalsAF2), getKoTeam(teamsAF1, goalsAF1)]; // FR - MA
const goalsVF1 = [2, 0];
const addVF1 = () => null;
const teamsVF2 = [getKoTeam(teamsAF5, goalsAF5), getKoTeam(teamsAF6, goalsAF6)]; // ES - BE
const goalsVF2 = [2, 1];
const addVF2 = () => null;
const teamsVF3 = [getKoTeam(teamsAF3, goalsAF3), getKoTeam(teamsAF4, goalsAF4)]; // NO - GB-ENG
const goalsVF3 = [1, 2];
const addVF3 = (lang) => `(1:1) ${localeName("ExtraTime", lang)}`;
const teamsVF4 = [getKoTeam(teamsAF7, goalsAF7), getKoTeam(teamsAF8, goalsAF8)]; // AR - CH
const goalsVF4 = [3, 1];
const addVF4 = (lang) => `(1:1) ${localeName("ExtraTime", lang)}`;

const teamsHF1 = [getKoTeam(teamsVF1, goalsVF1), getKoTeam(teamsVF2, goalsVF2)]; // FR - ES
const goalsHF1 = [0, 2];
const addHF1 = () => null;
const teamsHF2 = [getKoTeam(teamsVF3, goalsVF3), getKoTeam(teamsVF4, goalsVF4)]; // GB-ENG - AR
const goalsHF2 = [1, 2];
const addHF2 = () => null;

const teams3P = [getLoser(teamsHF1, goalsHF1), getLoser(teamsHF2, goalsHF2)]; // FR - GB-ENG
const goals3P = [null, null];
const add3P = () => null;

const teamsF = [getKoTeam(teamsHF1, goalsHF1), getKoTeam(teamsHF2, goalsHF2)]; // ES - AR
const goalsF = [null, null];
const addF = () => null;

const champion = getKoTeam(teamsF, goalsF);

const data = (lang) => {
  return {
    host: ["CA", "MX", "US"],
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
      },
      I: {
        matches: groupIMatches,
        table: groupITable
      },
      J: {
        matches: groupJMatches,
        table: groupJTable
      },
      K: {
        matches: groupKMatches,
        table: groupKTable
      },
      L: {
        matches: groupLMatches,
        table: groupLTable
      }
    },
    T3: thirdTable,
    T3Max: 7,
    SF: [
      {
        teams: teamsSF01,
        goals: goalsSF01,
        add: addSF01(lang),
        date: "2026-06-28T19:00Z",
        place: LOS_ANGELES
      },
      {
        teams: teamsSF02,
        goals: goalsSF02,
        add: addSF02(lang),
        date: "2026-06-29T17:00Z",
        place: HOUSTON
      },
      {
        teams: teamsSF03,
        goals: goalsSF03,
        add: addSF03(lang),
        date: "2026-06-29T20:30Z",
        place: BOSTOM
      },
      {
        teams: teamsSF04,
        goals: goalsSF04,
        add: addSF04(lang),
        date: "2026-06-30T01:00Z",
        place: MONTERREY
      },
      {
        teams: teamsSF05,
        goals: goalsSF05,
        add: addSF05(lang),
        date: "2026-06-30T17:00Z",
        place: DALLAS
      },
      {
        teams: teamsSF06,
        goals: goalsSF06,
        add: addSF06(lang),
        date: "2026-06-30T21:00Z",
        place: NEW_YORK
      },
      {
        teams: teamsSF07,
        goals: goalsSF07,
        add: addSF07(lang),
        date: "2026-07-01T02:00Z",
        place: MEXICO_CITY
      },
      {
        teams: teamsSF08,
        goals: goalsSF08,
        add: addSF08(lang),
        date: "2026-07-01T16:00Z",
        place: ATLANTA
      },
      {
        teams: teamsSF09,
        goals: goalsSF09,
        add: addSF09(lang),
        date: "2026-07-01T20:00Z",
        place: SEATTLE
      },
      {
        teams: teamsSF10,
        goals: goalsSF10,
        add: addSF10(lang),
        date: "2026-07-02T00:00Z",
        place: SAN_FRANCISCO
      },
      {
        teams: teamsSF11,
        goals: goalsSF11,
        add: addSF11(lang),
        date: "2026-07-02T19:00Z",
        place: LOS_ANGELES
      },
      {
        teams: teamsSF12,
        goals: goalsSF12,
        add: addSF12(lang),
        date: "2026-07-02T23:00Z",
        place: TORONTO
      },
      {
        teams: teamsSF13,
        goals: goalsSF13,
        add: addSF13(lang),
        date: "2026-07-03T03:00Z",
        place: VANCOUVER
      },
      {
        teams: teamsSF14,
        goals: goalsSF14,
        add: addSF14(lang),
        date: "2026-07-03T18:00Z",
        place: DALLAS
      },
      {
        teams: teamsSF15,
        goals: goalsSF15,
        add: addSF15(lang),
        date: "2026-07-03T22:00Z",
        place: MIAMI
      },
      {
        teams: teamsSF16,
        goals: goalsSF16,
        add: addSF16(lang),
        date: "2026-07-04T01:30Z",
        place: KANSAS_CITY
      }
    ],
    AF: [
      {
        teams: teamsAF1,
        goals: goalsAF1,
        add: addAF1(lang),
        date: "2026-07-04T17:00Z",
        place: HOUSTON
      },
      {
        teams: teamsAF2,
        goals: goalsAF2,
        add: addAF2(lang),
        date: "2026-07-04T21:00Z",
        place: PHILADELPHIA
      },
      {
        teams: teamsAF3,
        goals: goalsAF3,
        add: addAF3(lang),
        date: "2026-07-05T20:00Z",
        place: NEW_YORK
      },
      {
        teams: teamsAF4,
        goals: goalsAF4,
        add: addAF4(lang),
        date: "2026-07-06T00:00Z",
        place: MEXICO_CITY
      },
      {
        teams: teamsAF5,
        goals: goalsAF5,
        add: addAF5(lang),
        date: "2026-07-06T19:00Z",
        place: DALLAS
      },
      {
        teams: teamsAF6,
        goals: goalsAF6,
        add: addAF6(lang),
        date: "2026-07-07T00:00Z",
        place: SEATTLE
      },
      {
        teams: teamsAF7,
        goals: goalsAF7,
        add: addAF7(lang),
        date: "2026-07-07T16:00Z",
        place: ATLANTA
      },
      {
        teams: teamsAF8,
        goals: goalsAF8,
        add: addAF8(lang),
        date: "2026-07-07T20:00Z",
        place: VANCOUVER
      }
    ],
    VF: [
      {
        teams: teamsVF1,
        goals: goalsVF1,
        add: addVF1(lang),
        date: "2026-07-09T20:00Z",
        place: BOSTOM
      },
      {
        teams: teamsVF2,
        goals: goalsVF2,
        add: addVF2(lang),
        date: "2026-07-10T19:00Z",
        place: LOS_ANGELES
      },
      {
        teams: teamsVF3,
        goals: goalsVF3,
        add: addVF3(lang),
        date: "2026-07-11T21:00Z",
        place: MIAMI
      },
      {
        teams: teamsVF4,
        goals: goalsVF4,
        add: addVF4(lang),
        date: "2026-07-12T01:00Z",
        place: KANSAS_CITY
      }
    ],
    HF: [
      {
        teams: teamsHF1,
        goals: goalsHF1,
        add: addHF1(lang),
        date: "2026-07-14T19:00Z",
        place: DALLAS
      },
      {
        teams: teamsHF2,
        goals: goalsHF2,
        add: addHF2(lang),
        date: "2026-07-15T19:00Z",
        place: ATLANTA
      }
    ],
    "3P": {
      teams: teams3P,
      goals: goals3P,
      add: add3P(lang),
      date: "2026-07-18T21:00Z",
      place: MIAMI
    },
    F: {
      teams: teamsF,
      goals: goalsF,
      add: addF(lang),
      date: "2026-07-19T19:00Z",
      place: NEW_YORK
    },
    champion: champion
  };
};

module.exports = data;
