const locales = require("./locales.json");

exports.getKoTeam = (teams, goals) => {
  if (typeof goals[0] === "number" && typeof goals[1] === "number") {
    if (goals[0] > goals[1]) {
      return teams[0];
    } else if (goals[1] > goals[0]) {
      return teams[1];
    } else {
      return [...teams[0], ...teams[1]];
    }
  }
  return [...teams[0], ...teams[1]];
};

exports.getLoser = (teams, goals) => {
  if (typeof goals[0] === "number" && typeof goals[1] === "number") {
    if (goals[0] > goals[1]) {
      return teams[1];
    } else if (goals[1] > goals[0]) {
      return teams[0];
    } else {
      return [...teams[0], ...teams[1]];
    }
  }
  return [...teams[0], ...teams[1]];
};

exports.localeName = (code, lang) => {
  if (code && typeof code === "string" && code != null && code !== "?") {
    if (/^de/.test(lang)) {
      return locales.de[code];
    } else if (/^es/.test(lang)) {
      return locales.es[code];
    } else if (/^fr/.test(lang)) {
      return locales.fr[code];
    } else if (/^it/.test(lang)) {
      return locales.it[code];
    } else if (/^pl/.test(lang)) {
      return locales.pl[code];
    } else if (/^pt/.test(lang)) {
      return locales.pt[code];
    } else {
      return locales.en[code];
    }
  }
  return "";
};

exports.makeTable = (matches, name) => {
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

const sortFunction = (teamData, mode) => {
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
};
