// HASH TABLE
// Mappings of key-value pairs
// Extremely fast at insert, finding, and deleting values

// turns key into a hashed value (numbered)
const hash = (key, size) => {
  let hashedKey = 0;

  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i);
  }

  return hashedKey % size;
}

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);

    // creates a map object for each index in array
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  // add key and value to the buckets
  insert(key, value) {
    let idx = hash(key, this.size);
    this.buckets[idx].set(key, value);
  }

  // deletes value by finding the key in the buckets
  remove(key) {
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted;
  }

  // finds the key to return the value
  search(key) {
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  }
}


const hashTable = new HashTable();
hashTable.insert('lifeline', 'field medic');
hashTable.insert('wraith', 'void walker');
hashTable.insert('revenant', 'assassin robot');
hashTable.insert('loba', 'thief');

console.log(hashTable);
