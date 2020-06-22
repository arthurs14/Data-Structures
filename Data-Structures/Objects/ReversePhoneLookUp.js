// return a function that will find the name by looking up the number

const generateSearcher = (entries) => {
  const numToName = entries.reduce((dictionary, entry) => {
    const [name, number] = entry.split(' ... ');
    dictionary[number] = name;
    return dictionary;
  }, {});

  return (number) => numToName[number];
};


const findByNumber = generateSearcher([
  'Alexa Quigley ... 013-410-3292',
  'Luis Wisoky ... 648-377-3486',
  'Tessie Walter ... 399-926-3371',
  'Declan Boyer ... 607-731-1862',
  'Jade Fay ... 929-689-8345',
  'Brando Kunde ... 444-899-5147',
  'Nellie Swaniawski ... 078-540-4797',
  'Dr. Marquise Lueilwitz ... 803-336-1863',
  'Julian Feest PhD ... 853-712-7819',
  'Russel Roberts ... 845-613-3905'
]);

console.log(findByNumber('399-926-3371')); // 'Tessie Walter ... 399-926-3371'
console.log(findByNumber('853-712-7819')); // 'Julian Feest PhD ... 853-712-7819'
console.log(findByNumber('444-899-5147')); // 'Brando Kunde ... 444-899-5147'
console.log(findByNumber('803-336-1863')); // 'Dr. Marquise Lueilwitz ... 803-336-1863'
console.log(findByNumber('123-456-7890')); // undefined
