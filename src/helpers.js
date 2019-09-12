const getResource = (url, name, resources, resolve, reject) => {
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
};

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

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const plots = [
  {
    title: 'Han Yolo, A Ransom Story',
    description: {
      intro: 'In an effort to betray the resistance, Han Yolo kidnapped Princess Leia and fled to the planet',
      middle: 'During the wild pursuit he was chased through an astroid field, which heavily damaged his trusty',
      end: 'He now demands 4.000.000 Rupiahs ransom in order to return Princess Leia. With his ship damaged and the resistance on his heels, will he make it?',
    },
  },
  {
    title: 'Sith Happens',
    description: {
      intro: 'Like every year, Lord Grievous was on his way to the distant planet of ',
      middle: 'where is favorite starship mechanic resides. He is the only mechanic that specializes in fixing his',
      end: 'Just as he arrives however, he notices that he forgot his wallet and came all the way for nothing',
    },
  },
  {
    title: 'My Wookie Steak is Chewie',
    description: {
      intro: 'Obi-Wan Kenobi and his master Qui-Gonn are sent to officiate in a disagreement between the Trade Federation and',
      middle: 'They escape with Queen Padmé Amidala and exiled fish-rabbit clown Jar Jar Binks to Tatooine, where they meet young and incredibly annoying space Jesus Anakin Skywalker and his',
      end: 'A droid invasion is halted at the cost of Jinn\'s life, but it all turns out that was all an overly complicated double-cross to hand power to Naboo\'s senator and future Sith tyrant Emperor Palpatine',
    },
  },
];

export { getResourcesFromAPI, capitalizeFirstLetter, plots };
