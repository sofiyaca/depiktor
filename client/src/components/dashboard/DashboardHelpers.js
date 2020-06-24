import { colorOptions, queryTerms } from '../../services/metaData';

const organizeApiData = (apiData) => {
  const initialData = {};

  let categories = Object.keys(queryTerms);
  for (let i = 0; i < categories.length; i++) {
    initialData[categories[i]] = {
      labels: [],
      datasets: [],
    };
  }

  for (let i = 0; i < categories.length; i++) {
    initialData[categories[i]].labels = [...apiData[0].timestamps];
    for (let j = 0; j < apiData.length; j++) {
      if (queryTerms[categories[i]].includes(apiData[j]['name'])) {
        initialData[categories[i]].datasets.push({
          label: apiData[j].name,
          data: [...apiData[j].counts],
          backgroundColor: colorOptions[j],
          borderColor: colorOptions[j],
          fill: false,
        });
      }
    }
  }

  return initialData;
};

const organizePieData = (technologies, categories) => {
  let pieDataObj = {};

  for (let i = 0; i < categories.length; i++) {
    pieDataObj[categories[i]] = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
          label: 'My Data',
        },
      ],
    };
    technologies[categories[i]].datasets.forEach((item, index) => {
      pieDataObj[categories[i]].labels.push(item.label);

      pieDataObj[categories[i]].datasets[0].backgroundColor.push(
        colorOptions[index]
      );
      pieDataObj[categories[i]].datasets[0].hoverBackgroundColor.push(
        colorOptions[index]
      );

      pieDataObj[categories[i]].datasets[0].data.push(
        item.data.reduce((acc, cur) => {
          return acc + cur;
        })
      );
    });
  }

  return pieDataObj;
};

export { organizeApiData, organizePieData };
