function getResource(url, name, resources, resolve, reject) {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const retrievedResources = resources.concat(response.results);
      if (response.next !== null) {
        getResource(response.next, name, retrievedResources, resolve, reject);
      } else {
        const finalData = {
          name,
          data: retrievedResources,
        };
        resolve(finalData);
      }
    })
    .catch((error) => {
      console.log(error);
      reject('Something wrong. Please refresh the page and try again.');
    });
}

const getResourcesFromAPI = (endpoints) => {
  const promises = [];

  endpoints.forEach((endpoint) => {
    const resourcePromise = new Promise((resolve, reject) => {
      getResource(`https://swapi.co/api/${endpoint}`, endpoint, [], resolve, reject);
    });

    promises.push(resourcePromise);
  });

  return Promise.all(promises);
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { getResourcesFromAPI, capitalizeFirstLetter };
