const { localeName } = require("./helpers");

function sortFunction(teamData, mode) {
  const points = Array.from(new Set(teamData.map((team) => team.points))).sort(
    (a, b) => b - a
  );
  const pointsNumber = points.reduce((acc, curr) => {
    const obj = { ...acc };
    obj[curr] = teamData.reduce((iacc, icurr) => {
      let val = iacc;
      if (icurr.points === curr) val += 1;
      return val;
    }, 0);
    return obj;
  }, {});
  const tDataWithPointRanks = teamData.map((team, index, array) => {
    let rank = array.length;
    for (let a = 0; a <= team.points; a++) {
      rank -= pointsNumber[a] || 0;
    }
    rank += 1;
    return { ...team, rank };
  });
  const teamsPoints = tDataWithPointRanks.reduce(
    (acc, curr) => {
      const arr = [...acc];
      const ind = points.indexOf(curr.points);
      if (ind > -1 && ind < arr.length) arr[ind].push(curr);
      return arr;
    },
    new Array(points.length).fill(1).map((i) => [])
  );
  if (mode === "wc") {
    let teamsAfterOverallGoalDifference = [];
    teamsPoints.forEach((pointGroup) => {
      if (pointGroup.length === 1) {
        teamsAfterOverallGoalDifference.push(pointGroup);
      } else {
        const sortedPointGroup = pointGroup.sort(
          (a, b) => b.goalDifference - a.goalDifference
        );
        const goalDiffArray = Array.from(
          new Set(sortedPointGroup.map((team) => team.goalDifference))
        );
        goalDiffArray.forEach((diff) => {
          teamsAfterOverallGoalDifference.push(
            sortedPointGroup.filter((team) => team.goalDifference === diff)
          );
        });
      }
    });
    let teamsAfterOverallGoals = [];
    teamsAfterOverallGoalDifference.forEach((diffgroup) => {
      if (diffgroup.length === 1) {
        teamsAfterOverallGoals.push(diffgroup);
      } else {
        const sortedDiffgroup = diffgroup.sort((a, b) => b.goals - a.goals);
        const goalArray = Array.from(
          new Set(sortedDiffgroup.map((team) => team.goals))
        );
        goalArray.forEach((goal) => {
          teamsAfterOverallGoals.push(
            sortedDiffgroup.filter((team) => team.goals === goal)
          );
        });
      }
    });
    let teamsAfterDirectComparisonA = teamsAfterOverallGoals.slice();
    let teamsAfterDirectComparisonB = [];
    teamsAfterDirectComparisonA.forEach((singleTeam) => {
      if (singleTeam.length === 1) {
        teamsAfterDirectComparisonB.push(...singleTeam);
      } else {
        const sortedTeams = singleTeam.sort((a, b) => {
          const { ownMatches: aMatches, team: aTeam } = a;
          const { ownMatches: bMatches, team: bTeam } = b;
          const singleTeamKeys = singleTeam.map((t) => t.team);
          const aPoints = aMatches.reduce((acc, curr) => {
            const pts = acc;
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(aTeam);
              const indexOp = index === 0 ? 1 : 0;
              return curr.goals[index] > curr.goals[indexOp]
                ? pts + 3
                : curr.goals[index] === curr.goals[indexOp]
                ? pts + 1
                : pts;
            }
            return pts;
          }, 0);
          const aGoalDifference = aMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(aTeam);
              const indexOp = index === 0 ? 0 : 1;
              return acc + (curr.goals[index] - curr.goals[indexOp]);
            }
            return acc;
          }, 0);
          const aGoals = aMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(aTeam);
              return acc + curr.goals[index];
            }
            return acc;
          }, 0);
          const bPoints = bMatches.reduce((acc, curr) => {
            const pts = acc;
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(bTeam);
              const indexOp = index === 0 ? 1 : 0;
              return curr.goals[index] > curr.goals[indexOp]
                ? pts + 3
                : curr.goals[index] === curr.goals[indexOp]
                ? pts + 1
                : pts;
            }
            return pts;
          }, 0);
          const bGoalDifference = bMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(bTeam);
              const indexOp = index === 0 ? 0 : 1;
              return acc + (curr.goals[index] - curr.goals[indexOp]);
            }
            return acc;
          }, 0);
          const bGoals = bMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(bTeam);
              return acc + curr.goals[index];
            }
            return acc;
          }, 0);
          if (aPoints > bPoints) return -1;
          if (bPoints > aPoints) return +1;
          if (aGoalDifference > bGoalDifference) return -1;
          if (bGoalDifference > aGoalDifference) return +1;
          if (aGoals > bGoals) return -1;
          if (bGoals > aGoals) return +1;
          return 0;
        });
        teamsAfterDirectComparisonB.push(...sortedTeams);
      }
    });
    return teamsAfterDirectComparisonB;
  } else {
    let teamsAfterDirectComparisonA = teamsPoints.slice();
    let teamsAfterDirectComparisonB = [];
    teamsAfterDirectComparisonA.forEach((singleTeam) => {
      if (singleTeam.length === 1) {
        teamsAfterDirectComparisonB.push(singleTeam);
      } else {
        const sortedTeams = singleTeam.sort((a, b) => {
          const { ownMatches: aMatches, team: aTeam } = a;
          const { ownMatches: bMatches, team: bTeam } = b;
          const singleTeamKeys = singleTeam.map((t) => t.team);
          const aPoints = aMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(aTeam);
              const indexOp = index === 0 ? 0 : 1;
              return curr.goals[index] > curr.goals[indexOp]
                ? acc + 3
                : curr.goals[index] === curr.goals[indexOp]
                ? acc + 1
                : acc;
            }
            return acc;
          }, 0);
          const aGoalDifference = aMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(aTeam);
              const indexOp = index === 0 ? 0 : 1;
              return acc + (curr.goals[index] - curr.goals[indexOp]);
            }
            return acc;
          }, 0);
          const aGoals = aMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(aTeam);
              return acc + curr.goals[index];
            }
            return acc;
          }, 0);
          const bPoints = bMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(bTeam);
              const indexOp = index === 0 ? 0 : 1;
              return curr.goals[index] > curr.goals[indexOp]
                ? acc + 3
                : curr.goals[index] === curr.goals[indexOp]
                ? acc + 1
                : acc;
            }
            return acc;
          }, 0);
          const bGoalDifference = bMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(bTeam);
              const indexOp = index === 0 ? 0 : 1;
              return acc + (curr.goals[index] - curr.goals[indexOp]);
            }
            return acc;
          }, 0);
          const bGoals = bMatches.reduce((acc, curr) => {
            if (
              singleTeam.includes(curr.teams[0]) &&
              singleTeam.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(bTeam);
              return acc + curr.goals[index];
            }
            return acc;
          }, 0);
          if (aPoints > bPoints) return -1;
          if (bPoints > aPoints) return +1;
          if (aGoalDifference > bGoalDifference) return -1;
          if (bGoalDifference > aGoalDifference) return +1;
          if (aGoals > bGoals) return -1;
          if (bGoals > aGoals) return +1;
          return 0;
        });
        teamsAfterDirectComparisonB.push(...sortedTeams);
      }
    });
    return teamsAfterDirectComparisonB;
  }
}

const makeTable = (matches, name) => {
  const teamsRaw = matches.map((match) => match.teams).flat();
  const teamSet = new Set(teamsRaw);
  const teams = Array.from(teamSet);
  const teamData = teams.map((team) => {
    const points = matches.reduce((acc, curr) => {
      const index = curr.teams.indexOf(team);
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1;
      if (index !== -1 && curr.goals[index] != null) {
        return curr.goals[index] > curr.goals[indexOp]
          ? acc + 3
          : curr.goals[index] === curr.goals[indexOp]
          ? acc + 1
          : acc;
      }
      return acc;
    }, 0);
    const victories = matches.reduce((acc, curr) => {
      const index = curr.teams.indexOf(team);
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1;
      if (index !== -1 && curr.goals[index] != null) {
        return curr.goals[index] > curr.goals[indexOp] ? acc + 1 : acc;
      }
      return acc;
    }, 0);
    const goals = matches.reduce((acc, curr) => {
      const index = curr.teams.indexOf(team);
      if (index !== -1 && curr.goals[index] != null) {
        return acc + curr.goals[index];
      }
      return acc;
    }, 0);
    const countergoals = matches.reduce((acc, curr) => {
      const index = curr.teams.indexOf(team);
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1;
      if (index !== -1 && curr.goals[indexOp] != null) {
        return acc + curr.goals[indexOp];
      }
      return acc;
    }, 0);
    const goalDifference = goals - countergoals;
    const fairPlay = matches.reduce((acc, curr) => {
      const index = curr.teams.indexOf(team);
      if (index !== -1 && curr.fairPlay[index] != null) {
        return acc + curr.fairPlay[index];
      }
      return acc;
    }, 0);
    const ownMatches = matches.filter(
      (match) => match.teams.includes(team) && match.goals[0] != null
    );
    return {
      team,
      points,
      goals,
      countergoals,
      goalDifference,
      fairPlay,
      ownMatches,
      matches,
      victories,
      group: name
    };
  });
  const sortedTable = sortFunction(teamData, "wc");
  return sortedTable;
};

const groupAMatches = [
  {
    teams: ["QA", "EC"],
    goals: [0, 2],
    fairPlay: [4, 2],
    date: "2022-11-20T16:00:00Z"
  },
  {
    teams: ["SN", "NL"],
    goals: [0, 2],
    fairPlay: [2, 1],
    date: "2022-11-21T16:00:00Z"
  },
  {
    teams: ["QA", "SN"],
    goals: [1, 3],
    fairPlay: [3, 3],
    date: "2022-11-25T13:00:00Z"
  },
  {
    teams: ["NL", "EC"],
    goals: [1, 1],
    fairPlay: [0, 1],
    date: "2022-11-15T16:00:00Z"
  },
  {
    teams: ["NL", "QA"],
    goals: [2, 0],
    fairPlay: [1, 0],
    date: "2022-11-29T15:00:00Z"
  },
  {
    teams: ["EC", "SN"],
    goals: [1, 2],
    fairPlay: [0, 1],
    date: "2022-11-29T15:00:00Z"
  }
];

const groupATable = makeTable(groupAMatches, "A");

const groupBMatches = [
  {
    teams: ["GB-ENG", "IR"],
    goals: [6, 2],
    fairPlay: [0, 2],
    date: "2022-11-21T13:00:00Z"
  },
  {
    teams: ["US", "GB-WLS"],
    goals: [1, 1],
    fairPlay: [4, 2],
    date: "2022-11-21T19:00:00Z"
  },
  {
    teams: ["GB-WLS", "IR"],
    goals: [0, 2],
    fairPlay: [4, 2],
    date: "2022-11-25T10:00:00Z"
  },
  {
    teams: ["GB-ENG", "US"],
    goals: [0, 0],
    fairPlay: [0, 0],
    date: "2022-11-25T19:00:00Z"
  },
  {
    teams: ["GB-WLS", "GB-ENG"],
    goals: [0, 3],
    fairPlay: [2, 0],
    date: "2022-11-29T19:00:00Z"
  },
  {
    teams: ["IR", "US"],
    goals: [0, 1],
    fairPlay: [3, 1],
    date: "2022-11-29T19:00:00Z"
  }
];

const groupBTable = makeTable(groupBMatches, "B");

const groupCMatches = [
  {
    teams: ["AR", "SA"],
    goals: [1, 2],
    fairPlay: [0, 6],
    date: "2022-11-22T10:00:00Z"
  },
  {
    teams: ["MX", "PL"],
    goals: [0, 0],
    fairPlay: [2, 1],
    date: "2022-11-22T16:00:00Z"
  },
  {
    teams: ["PL", "SA"],
    goals: [2, 0],
    fairPlay: [3, 3],
    date: "2022-11-26T13:00:00Z"
  },
  {
    teams: ["AR", "MX"],
    goals: [2, 0],
    fairPlay: [1, 4],
    date: "2022-11-26T19:00:00Z"
  },
  {
    teams: ["PL", "AR"],
    goals: [0, 2],
    fairPlay: [1, 1],
    date: "2022-11-30T19:00:00Z"
  },
  {
    teams: ["SA", "MX"],
    goals: [1, 2],
    fairPlay: [6, 1],
    date: "2022-11-30T19:00:00Z"
  }
];

const groupCTable = makeTable(groupCMatches, "C");

const groupDMatches = [
  {
    teams: ["DK", "TN"],
    goals: [0, 0],
    fairPlay: [2, 1],
    date: "2022-11-22T13:00:00Z"
  },
  {
    teams: ["FR", "AU"],
    goals: [4, 1],
    fairPlay: [0, 3],
    date: "2022-11-22T19:00:00Z"
  },
  {
    teams: ["TN", "AU"],
    goals: [0, 1],
    fairPlay: [3, 0],
    date: "2022-11-26T10:00:00Z"
  },
  {
    teams: ["FR", "DK"],
    goals: [2, 1],
    fairPlay: [1, 2],
    date: "2022-11-26T16:00:00Z"
  },
  {
    teams: ["TN", "FR"],
    goals: [1, 0],
    fairPlay: [1, 0],
    date: "2022-11-30T15:00:00Z"
  },
  {
    teams: ["AU", "DK"],
    goals: [1, 0],
    fairPlay: [2, 1],
    date: "2022-11-30T15:00:00Z"
  }
];

const groupDTable = makeTable(groupDMatches, "D");

const groupEMatches = [
  {
    teams: ["DE", "JP"],
    goals: [1, 2],
    fairPlay: [0, 0],
    date: "2022-11-23T13:00:00Z"
  },
  {
    teams: ["ES", "CR"],
    goals: [7, 0],
    fairPlay: [0, 2],
    date: "2022-11-23T16:00:00Z"
  },
  {
    teams: ["JP", "CR"],
    goals: [0, 1],
    fairPlay: [3, 3],
    date: "2022-11-27T10:00:00Z"
  },
  {
    teams: ["ES", "DE"],
    goals: [1, 1],
    fairPlay: [1, 3],
    date: "2022-11-27T19:00:00Z"
  },
  {
    teams: ["JP", "ES"],
    goals: [2, 1],
    fairPlay: [3, 0],
    date: "2022-12-01T19:00:00Z"
  },
  {
    teams: ["CR", "DE"],
    goals: [2, 4],
    fairPlay: [1, 0],
    date: "2022-12-01T19:00:00Z"
  }
];

const groupETable = makeTable(groupEMatches, "E");

const groupFMatches = [
  {
    teams: ["MA", "HR"],
    goals: [0, 0],
    fairPlay: [1, 0],
    date: "2022-11-23T10:00:00Z"
  },
  {
    teams: ["BE", "CA"],
    goals: [1, 0],
    fairPlay: [3, 2],
    date: "2022-11-23T19:00:00Z"
  },
  {
    teams: ["BE", "MA"],
    goals: [0, 2],
    fairPlay: [1, 1],
    date: "2022-11-27T13:00:00Z"
  },
  {
    teams: ["HR", "CA"],
    goals: [4, 1],
    fairPlay: [2, 2],
    date: "2022-11-27T16:00:00Z"
  },
  {
    teams: ["HR", "BE"],
    goals: [0, 0],
    fairPlay: [0, 1],
    date: "2022-12-01T16:00:00Z"
  },
  {
    teams: ["CA", "MA"],
    goals: [1, 2],
    fairPlay: [4, 0],
    date: "2022-12-01T16:00:00Z"
  }
];

const groupFTable = makeTable(groupFMatches, "F");

const groupGMatches = [
  {
    teams: ["CH", "CM"],
    goals: [1, 0],
    fairPlay: [2, 1],
    date: "2022-12-24T10:00:00Z"
  },
  {
    teams: ["BR", "RS"],
    goals: [2, 0],
    fairPlay: [0, 3],
    date: "2022-12-24T19:00:00Z"
  },
  {
    teams: ["CM", "RS"],
    goals: [3, 3],
    fairPlay: [2, 2],
    date: "2022-11-28T10:00:00Z"
  },
  {
    teams: ["BR", "CH"],
    goals: [1, 0],
    fairPlay: [1, 1],
    date: "2022-11-28T16:00:00Z"
  },
  {
    teams: ["CM", "BR"],
    goals: [1, 0],
    fairPlay: [5, 2],
    date: "2022-12-02T19:00:00Z"
  },
  {
    teams: ["RS", "CH"],
    goals: [2, 3],
    fairPlay: [6, 4],
    date: "2022-12-02T19:00:00Z"
  }
];

const groupGTable = makeTable(groupGMatches, "G");

const groupHMatches = [
  {
    teams: ["UY", "KR"],
    goals: [0, 0],
    fairPlay: [1, 1],
    date: "2022-11-24T13:00:00Z"
  },
  {
    teams: ["PT", "GH"],
    goals: [3, 2],
    fairPlay: [2, 4],
    date: "2022-11-24T16:00:00Z"
  },
  {
    teams: ["KR", "GH"],
    goals: [2, 3],
    fairPlay: [5, 2],
    date: "2022-11-28T13:00:00Z"
  },
  {
    teams: ["PT", "UY"],
    goals: [2, 0],
    fairPlay: [3, 2],
    date: "2022-11-28T19:00:00Z"
  },
  {
    teams: ["KR", "PT"],
    goals: [2, 1],
    fairPlay: [2, 0],
    date: "2022-12-02T15:00:00Z"
  },
  {
    teams: ["GH", "UY"],
    goals: [0, 2],
    fairPlay: [2, 4],
    date: "2022-12-02T15:00:00Z"
  }
];

const groupHTable = makeTable(groupHMatches, "H");

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
        goals: [3, 1],
        add: null,
        date: "2022-12-03T15:00:00Z"
      },
      {
        goals: [2, 1],
        add: null,
        date: "2022-12-03T19:00:00Z"
      },
      {
        goals: [3, 1],
        add: null,
        date: "2022-12-05T15:00:00Z"
      },
      {
        goals: [3, 0],
        add: null,
        date: "2022-12-05T19:00:00Z"
      },
      {
        goals: [1, 3],
        add: `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName(
          "ExtraTime",
          lang
        )}`,
        date: "2022-12-04T19:00:00Z"
      },
      {
        goals: [4, 1],
        add: null,
        date: "2022-12-04T15:00:00Z"
      },
      {
        goals: [3, 0],
        add: `${localeName("Penalties", lang)}, 0:0 (0:0) ${localeName(
          "ExtraTime",
          lang
        )}`,
        date: "2022-12-06T15:00:00Z"
      },
      {
        goals: [0, 1],
        add: null,
        date: "2022-12-06T19:00:00Z"
      }
    ],
    VF: [
      {
        goals: [4, 2],
        add: `${localeName("Penalties")}, 1:1 (0:0) ${localeName("ExtraTime")}`,
        date: "2022-12-09T19:00:00Z"
      },
      {
        goals: [3, 4],
        add: `${localeName("Penalties")}, 2:2 (2:2) ${localeName("ExtraTime")}`,
        date: "2022-12-10T19:00:00Z"
      },
      {
        goals: [1, 0],
        add: null,
        date: "2022-12-09T15:00:00Z"
      },
      {
        goals: [1, 2],
        add: null,
        date: "2022-12-10T15:00:00Z"
      }
    ],
    HF: [
      {
        goals: [3, 0],
        add: null,
        date: "2022-12-13T19:00:00Z"
      },
      {
        goals: [2, 0],
        add: null,
        date: "2022-12-14T19:00:00Z"
      }
    ],
    "3P": {
      goals: [2, 1],
      add: null,
      date: "2022-12-17T15:00:00Z"
    },
    F: {
      goals: [4, 2],
      add: `${localeName("Penalties")}, 3:3 (2:2) ${localeName("ExtraTime")}`,
      date: "2022-12-18T15:00:00Z"
    }
  };
};

module.exports = matchData;
