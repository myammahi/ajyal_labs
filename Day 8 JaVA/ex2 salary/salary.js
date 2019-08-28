function calculateSalary(groups) {
  var newGroups = [];
  for (group of groups) {
    var newGroup = newGroups.find(function(nG) {
      return nG.name === group.name;
    });
    if (newGroup) {
      newGroup.salary =
        group.salary.split(" ")[0] * 1 +
        newGroup.salary.split(" ")[0] * 1 +
        " AED";
    } else {
      newGroups.push(group);
    }
  }
  var finalGroups = newGroups.sort(function(nG1, nG2) {
    return nG1.salary.split(" ")[0] * 1 - nG2.salary.split(" ")[0] * 1;
  });
  return finalGroups;
}
