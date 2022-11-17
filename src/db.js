const { faker } = require('@faker-js/faker');

let minionIdCounter = 1;

const createMinion = () => {
  const weaknesses = new Array(3).fill(0).map(() => {
    const reasons = ['Cannot do', 'Unable to execute', 'Will not build'];
    const reason = reasons[Math.floor(Math.random() * reasons.length)];
    const adj = faker.company.bsAdjective();
    const noun = faker.company.catchPhraseNoun();
    return `${reason} ${adj} ${noun}`;
  })
  .join(', ') + ', too ' + faker.hacker.adjective()

  return {
    id: `${minionIdCounter++}`,
    name: faker.name.fullName(),
    title: faker.name.jobTitle(),
    weaknesses: weaknesses,
    salary: 40000,
  }
}

const allMinions = new Array(10).fill(0).map(createMinion);
//console.log(allMinions);

const isValidMinion = (instance) => {
    instance.name = instance.name || '';
    instance.weaknesses = instance.weaknesses || '';
    instance.title = instance.title || '';
    if (typeof instance.name !== 'string' || typeof instance.weaknesses !== 'string'
    || typeof instance.title !== 'string') {
      throw new Error('Minion\'s name, title, and weaknesses must be strings');
    }
    if (!isNaN(parseFloat(instance.salary)) && isFinite(instance.salary)) {
      instance.salary = Number(instance.salary);
    } else {
      //throw new Error('Minion\'s salary must be a number.');
    }
    return true;
  }
  

  const db = {
    allMinions: {
      data: allMinions,
      nextId: minionIdCounter,
      isValid: isValidMinion,
    }
  }
  
  //function below are exported 
  const findDataArrayByName = (name) => {
    switch (name) {
      case 'minions':
        return db.allMinions;
      case 'ideas':
        return db.allIdeas;
      case 'work':
        return db.allWork;
      case 'meetings':
        return db.allMeetings;
      default:
        return null;
    }
  }
  
  //get all minions data
  const getAllFromDatabase = (modelType) => {
    const model = findDataArrayByName(modelType);
    if (model === null) {
      return null;
    }
    return model.data;
  }
  
  //get a single minion data by id
  const getFromDatabaseById = (modelType, id) => {
    const model = findDataArrayByName(modelType);
    if (model === null) {
      return null;
    }
    return model.data.find((element) => {
      return element.id == id;
    });
  }
  
  const addToDatabase = (modelType, instance) => {
    const model = findDataArrayByName(modelType);
    if (model === null) {
      return null;
    }
    if (model.isValid(instance)) {
      instance.id = `${model.nextId++}`;
      model.data.push(instance);
      return model.data[model.data.length - 1];
    }else{
      return null;
    }
  }

  const updateInstanceInDatabase = (modelType, instance) => {
    const model = findDataArrayByName(modelType);
    if (model === null) {
      return null;
    }
    const instanceIndex = model.data.findIndex((element) => {
      return element.id == instance.id;
    });
    if (instanceIndex > -1 && model.isValid(instance)) {
      //console.log("find minion id:"+ instance.id);
      model.data[instanceIndex] = instance;
      return model.data[instanceIndex];
    } else {
      return null;
    }
  }

  const deleteFromDatabasebyId = (modelType, id) => {
    const model = findDataArrayByName(modelType);
    if (model === null) {
      return null;
    }
    let index = model.data.findIndex((element) => {
      return element.id == id;
    });
    if (index !== -1) {
      model.data.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  const deleteAllFromDatabase = (modelType) => {
    const model = findDataArrayByName(modelType);
    if (model === null) {
      return null;
    }
    model.data = [];
    return model.data;
  }
  
  module.exports = {
    //createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  };
  