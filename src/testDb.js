

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

const newMinion = {
    name: 'Evan Cassin',
    title: 'Product manager',
    weaknesses: 'none',
    salary: 40000
}


console.log(isValidMinion(newMinion));

console.log(JSON.stringify(newMinion));