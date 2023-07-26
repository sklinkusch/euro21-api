const locales = require("./locales.json");

exports.getKoTeam = (teams, goals) => {
  const teamAType = typeof teams[0];
  const teamBType = typeof teams[1];
  if (typeof goals[0] === "number" && typeof goals[1] === "number") {
    if (goals[0] > goals[1]) {
      return teams[0];
    } else if (goals[1] > goals[0]) {
      return teams[1];
    } else {
      if (teamAType === "string" && teamBType === "string") {
        return [teams[0], teams[1]];
      } else if (teamAType === "string" && teamBType !== "string") {
        return [teams[0], ...teams[1]];
      } else if (teamAType !== "string" && teamBType === "string") {
        return [...teams[0], teams[1]];
      } else {
        return Array.from(new Set([...teams[0], ...teams[1]]));
      }
    }
  }
  if (teamAType === "string" && teamBType === "string") {
    return [teams[0], teams[1]];
  } else if (teamAType === "string" && teamBType !== "string") {
    return [teams[0], ...teams[1]];
  } else if (teamAType !== "string" && teamBType === "string") {
    return [...teams[0], teams[1]];
  } else {
    return Array.from(new Set([...teams[0], ...teams[1]]));
  }
};

exports.getLoser = (teams, goals) => {
  const teamAType = typeof teams[0];
  const teamBType = typeof teams[1];
  if (typeof goals[0] === "number" && typeof goals[1] === "number") {
    if (goals[0] > goals[1]) {
      return teams[1];
    } else if (goals[1] > goals[0]) {
      return teams[0];
    } else {
      if (teamAType === "string" && teamBType === "string") {
        return [teams[0], teams[1]];
      } else if (teamAType === "string" && teamBType !== "string") {
        return [teams[0], ...teams[1]];
      } else if (teamAType !== "string" && teamBType === "string") {
        return [...teams[0], teams[1]];
      } else {
        return Array.from(new Set([...teams[0], ...teams[1]]));
      }
    }
  }
  if (teamAType === "string" && teamBType === "string") {
    return [teams[0], teams[1]];
  } else if (teamAType === "string" && teamBType !== "string") {
    return [teams[0], ...teams[1]];
  } else if (teamAType !== "string" && teamBType === "string") {
    return [...teams[0], teams[1]];
  } else {
    return Array.from(new Set([...teams[0], ...teams[1]]));
  }
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
      matches: ownMatches.length,
      points,
      goals,
      countergoals,
      goalDifference,
      fairPlay,
      ownMatches,
      victories,
      group: name
    };
  });
  const sortedTable = sortFunction(teamData, "wc");
  const totalTeams = sortedTable.length;
  const totalMatches = 2 * (totalTeams - 1);
  const maxPossiblePoints = sortedTable.map((team) => {
    const playedMatches = team.matches;
    const matchesToPlay = totalMatches - playedMatches;
    const minimalPoints = team.points;
    const maximalPoints = minimalPoints + 3 * matchesToPlay;
    return maximalPoints;
  });
  const bestRank = sortedTable.map((team, idx, arr) => {
    const maximalPoints = maxPossiblePoints[idx];
    const newTable = arr.map((tm) => {
      if (tm.team === team.team) {
        return { ...tm, points: maximalPoints };
      }
      return tm;
    });
    const newSortedTable = newTable.sort((a, b) => {
      if (a.points > b.points) return -1;
      if (b.points > a.points) return +1;
      if (team.points !== maximalPoints) {
        if (a.team === team.team) return -1;
        if (b.team === team.team) return +1;
      } else {
        if (a.goalDifference > b.goalDifference) return -1;
        if (b.goalDifference > a.goalDifference) return +1;
        if (a.goals > b.goals) return -1;
        if (b.goals > a.goals) return +1;
      }
      return 0;
    });
    const teamRank = newSortedTable.findIndex((tm) => tm.team === team.team);
    return teamRank;
  });
  const worstRank = sortedTable.map((team, idx, arr) => {
    const maximalPoints = maxPossiblePoints[idx];
    const newTable = arr.map((tm, ind) => {
      if (tm.team === team.team) return tm;
      return { ...tm, points: maxPossiblePoints[ind] };
    });
    const newSortedTable = newTable.sort((a, b) => {
      if (a.points > b.points) return -1;
      if (b.points > a.points) return +1;
      if (team.points !== maximalPoints) {
        if (a.team === team.team) return +1;
        if (b.team === team.team) return -1;
      } else {
        if (a.goalDifference > b.goalDifference) return -1;
        if (b.goalDifference > a.goalDifference) return +1;
        if (a.goals > b.goals) return -1;
        if (b.goals > a.goals) return +1;
      }
      return 0;
    });
    const teamRank = newSortedTable.findIndex((tm) => tm.team === team.team);
    return teamRank;
  });
  const enhancedTable = sortedTable.map((team, index) => {
    return { ...team, best: bestRank[index], worst: worstRank[index] };
  });
  return enhancedTable;
};

exports.makeTable2 = (matches, name) => {
  const teamsRaw = matches.map((match) => match.teams).flat();
  const teamSet = new Set(teamsRaw);
  const teams = Array.from(teamSet);
  const teamData = teams.map((team) => {
    const points = matches.reduce((acc, curr) => {
      const index = curr.teams.indexOf(team);
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1;
      if (index !== -1 && curr.goals[index] != null) {
        return curr.goals[index] > curr.goals[indexOp]
          ? acc + 2
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
      victories,
      group: name
    };
  });
  const sortedTable = sortFunction(teamData, "wc");
  return sortedTable;
};

const sortTeamsTwo = (sortedTeamsRaw, teamSort) => {
  let sorted = [];
  const [teamA, teamB] = teamSort;
  const teamNames = sortedTeamsRaw.map((team) => team.team);
  const teamAIndex = teamNames.indexOf(teamA);
  const teamBIndex = teamNames.indexOf(teamB);
  const teamADataset = sortedTeamsRaw.find((team) => team.team === teamA);
  const teamBDataset = sortedTeamsRaw.find((team) => team.team === teamB);
  const diff = Math.abs(teamAIndex - teamBIndex);
  const minimalIndex = Math.min(teamAIndex, teamBIndex);
  const maximalIndex = Math.max(teamAIndex, teamBIndex);
  if (diff === 1) {
    for (let i = 0; i < minimalIndex; i++) {
      sorted[i] = sortedTeamsRaw[i];
    }
    sorted[minimalIndex] = teamADataset;
    sorted[maximalIndex] = teamBDataset;
    for (let j = maximalIndex + 1; j < sortedTeamsRaw.length; j++) {
      sorted[j] = sortedTeamsRaw[j];
    }
  } else {
    sorted = sortedTeamsRaw;
  }
  return sorted;
};

const sortTeamsThree = (sortedTeamsRaw, teamSort) => {
  let sorted = [];
  const [team1, team2, team3] = teamSort;
  const teamnames = sortedTeamsRaw.map((team) => team.team);
  const team1Index = teamnames.indexOf(team1);
  const team2Index = teamnames.indexOf(team2);
  const team3Index = teamnames.indexOf(team3);
  const team1Dataset = sortedTeamsRaw.find((team) => team.team === team1);
  const team2Dataset = sortedTeamsRaw.find((team) => team.team === team2);
  const team3Dataset = sortedTeamsRaw.find((team) => team.team === team3);
  const minIndex = Math.min(team1Index, team2Index, team3Index);
  const maxIndex = Math.max(team1Index, team2Index, team3Index);
  const intermediateIndex = [team1Index, team2Index, team3Index].find(
    (index) => index !== minIndex && index !== maxIndex
  );
  const diffMinInt = Math.abs(intermediateIndex - minIndex);
  const diffIntMax = Math.abs(maxIndex - intermediateIndex);
  const identifierMin =
    team1Index === minIndex ? "A" : team2Index === minIndex ? "B" : "C";
  const identifierInt =
    team1Index === intermediateIndex
      ? "A"
      : team2Index === intermediateIndex
      ? "B"
      : "C";
  const identifierMax =
    team1Index === maxIndex
      ? "A"
      : team2Index === intermediateIndex
      ? "B"
      : "C";
  if (diffMinInt === 1 && diffIntMax === 1) {
    for (let i = 0; i < minIndex; i++) {
      sorted[i] = sortedTeamsRaw[i];
    }
    sorted[minIndex] = team1Dataset;
    sorted[intermediateIndex] = team2Dataset;
    sorted[maxIndex] = team3Dataset;
    for (let j = minIndex + 1; j < sortedTeamsRaw.length; j++) {
      sorted[j] = sortedTeamsRaw[j];
    }
  } else if (diffMinInt === 1) {
    for (let i = 0; i < minIndex; i++) {
      sorted[i] = sortedTeamsRaw[i];
    }
    sorted[minIndex] =
      identifierMin === "A"
        ? team1Dataset
        : identifierMin === "B"
        ? team2Dataset
        : team3Dataset;
    sorted[intermediateIndex] =
      identifierInt === "A"
        ? team1Dataset
        : identifierInt === "B"
        ? team2Dataset
        : team3Dataset;
    for (let j = intermediateIndex + 1; j < sortedTeamsRaw.length; j++) {
      sorted[j] = sortedTeamsRaw[j];
    }
  } else if (diffIntMax === 1) {
    for (let i = 0; i < intermediateIndex; i++) {
      sorted[i] = sortedTeamsRaw[i];
    }
    sorted[intermediateIndex] =
      identifierInt === "A"
        ? team1Dataset
        : identifierInt === "B"
        ? team2Dataset
        : team3Dataset;
    sorted[maxIndex] =
      identifierMax === "A"
        ? team1Dataset
        : identifierMax === "B"
        ? team2Dataset
        : team3Dataset;
    for (let j = maxIndex + 1; j < sortedTeamsRaw.length; j++) {
      sorted[j] = sortedTeamsRaw[j];
    }
  } else {
    sorted = sortedTeamsRaw;
  }
  return sorted;
};

exports.makeEasyTable = (teams, mode = "wc", teamSort) => {
  const sortedTeamsRaw = sortFunction(teams, mode);
  let sorted = [];
  if (teamSort) {
    switch (teamSort.length) {
      case 0:
      case 1:
        sorted = sortedTeamsRaw;
        break;
      case 2:
        sorted = sortTeamsTwo(sortedTeamsRaw, teamSort);
        break;
      case 3:
        sorted = sortTeamsThree(sortedTeamsRaw, teamSort);
        break;
      case 4:
        sorted = sortedTeamsRaw;
        break;
      default:
        sorted = sortedTeamsRaw;
    }
  } else {
    sorted = sortedTeamsRaw;
  }
  return sorted;
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
    new Array(points.length).fill(1).map(() => [])
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
    let teamsAfterDirectComparisonC = [];
    teamsAfterDirectComparisonB.forEach((team, index, array) => {
      if (index === 0) {
        teamsAfterDirectComparisonC.push({ ...team, rank: 1 });
      } else {
        const {
          team: currTeam,
          points: currPoints,
          goalDifference: currDiff,
          goals: currGoals,
          ownMatches: currOwnMatches
        } = team;
        const {
          team: prevTeam,
          points: prevPoints,
          goalDifference: prevDiff,
          goals: prevGoals
        } = array[index - 1];
        if (
          currPoints === prevPoints &&
          currDiff === prevDiff &&
          currGoals === prevGoals
        ) {
          const matchesAgainstPrevTeam = currOwnMatches.filter((match) =>
            match.teams.includes(prevTeam)
          );
          const ownPoints = matchesAgainstPrevTeam.reduce((acc, match) => {
            const matchIndex = match.teams.indexOf(currTeam);
            const otherIndex = matchIndex === 0 ? 1 : 0;
            const tGoals = match.goals[matchIndex];
            const cGoals = match.goals[otherIndex];
            if (tGoals > cGoals) return acc + 3;
            if (tGoals === cGoals) return acc + 1;
            return acc;
          }, 0);
          const otherPoints = matchesAgainstPrevTeam.reduce((acc, match) => {
            const matchIndex = match.teams.indexOf(prevTeam);
            const otherIndex = matchIndex === 0 ? 1 : 0;
            const tGoals = match.goals[matchIndex];
            const cGoals = match.goals[otherIndex];
            if (tGoals > cGoals) return acc + 3;
            if (tGoals === cGoals) return acc + 1;
            return acc;
          }, 0);
          const ownGoals = matchesAgainstPrevTeam.reduce((acc, match) => {
            const matchIndex = match.teams.indexOf(currTeam);
            return acc + match.goals[matchIndex];
          }, 0);
          const otherGoals = matchesAgainstPrevTeam.reduce((acc, match) => {
            const matchIndex = match.teams.indexOf(prevTeam);
            return acc + match.goals[matchIndex];
          }, 0);
          const ownDiff = ownGoals - otherGoals;
          const otherDiff = otherGoals - ownGoals;
          if (otherPoints > ownPoints) {
            teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
          } else if (otherDiff > ownDiff) {
            teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
          } else if (otherGoals > ownGoals) {
            teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
          } else {
            teamsAfterDirectComparisonC.push({
              ...team,
              rank: teamsAfterDirectComparisonC[
                teamsAfterDirectComparisonC.length - 1
              ].rank
            });
          }
        } else {
          teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
        }
      }
    });
    return teamsAfterDirectComparisonC;
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
    let teamsAfterDirectComparisonC = [];
    teamsAfterDirectComparisonB.forEach((team, index, array) => {
      if (index === 0) {
        teamsAfterDirectComparisonC.push({ ...team, rank: 1 });
      } else {
        const {
          team: currTeam,
          points: currPoints,
          goalDifference: currDiff,
          goals: currGoals,
          ownMatches: currOwnMatches
        } = team;
        const {
          team: prevTeam,
          points: prevPoints,
          goalDifference: prevDiff,
          goals: prevGoals
        } = array[index - 1];
        if (
          currPoints === prevPoints &&
          currDiff === prevDiff &&
          currGoals === prevGoals
        ) {
          const matchesAgainstPrevTeam = currOwnMatches.filter((match) =>
            match.teams.includes(prevTeam)
          );
          const ownPoints = matchesAgainstPrevTeam.reduce((acc, match) => {
            const matchIndex = match.teams.indexOf(currTeam);
            const otherIndex = matchIndex === 0 ? 1 : 0;
            const tGoals = match.goals[matchIndex];
            const cGoals = match.goals[otherIndex];
            if (tGoals > cGoals) return acc + 3;
            if (tGoals === cGoals) return acc + 1;
            return acc;
          }, 0);
          const otherPoints = matchesAgainstPrevTeam.reduce((acc, match) => {
            const matchIndex = match.teams.indexOf(prevTeam);
            const otherIndex = matchIndex === 0 ? 1 : 0;
            const tGoals = match.goals[matchIndex];
            const cGoals = match.goals[otherIndex];
            if (tGoals > cGoals) return acc + 3;
            if (tGoals === cGoals) return acc + 1;
            return acc;
          }, 0);
          const ownGoals = matchesAgainstPrevTeam.reduce((acc, match) => {
            const matchIndex = match.teams.indexOf(currTeam);
            return acc + match.goals[matchIndex];
          }, 0);
          const otherGoals = matchesAgainstPrevTeam.reduce((acc, match) => {
            const matchIndex = match.teams.indexOf(prevTeam);
            return acc + match.goals[matchIndex];
          }, 0);
          const ownDiff = ownGoals - otherGoals;
          const otherDiff = otherGoals - ownGoals;
          if (otherPoints > ownPoints) {
            teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
          } else if (otherDiff > ownDiff) {
            teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
          } else if (otherGoals > ownGoals) {
            teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
          } else {
            teamsAfterDirectComparisonC.push({
              ...team,
              rank: teamsAfterDirectComparisonC[
                teamsAfterDirectComparisonC.length - 1
              ].rank
            });
          }
        } else {
          teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
        }
      }
    });
    return teamsAfterDirectComparisonC;
  }
};
