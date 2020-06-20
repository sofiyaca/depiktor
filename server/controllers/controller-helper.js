// TODO: Add comment explaining functionality
const groupedByCategory = (array) => {
  return array.reduce((result, technology) => {
    let category = technology.dataValues.category;
    if (result[category] === undefined) result[category] = [];
    result[category].push(technology);
    return result;
  }, {});
};

// TODO: Add comment explaining functionality
function createDataset(technologies) {
  return technologies.map((technology) => {
    const randomCol = `hsla(${360 * Math.random()}, 70%, 80%, 1)`;
    return {
      label: technology.dataValues.name,
      data: technology.dataValues.Counts.map((count) => count.total),
      backgroundColor: randomCol,
      borderColor: randomCol,
      fill: false,
    };
  });
}

// TODO: Add comment explaining functionality
function serializeTech(groupedByCat) {
  return Object.keys(groupedByCat).reduce((acc, category) => {
    let technologies = groupedByCat[category];
    let countsForLabels = technologies[0].Counts;
    acc[category] = {
      labels: countsForLabels.map((count) => count.createdAt),
      datasets: createDataset(technologies),
    };
    return acc;
  }, {});
}

module.exports = {
  groupedByCategory,
  serializeTech,
};
