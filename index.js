// import { sum } from './Addition.js'
// console.log(sum(4,4));
// console.log(sum(10,5));


import { Person } from './Person.js'

const Person1 = new Person ('Jamin',  'Langeveldt', 'langeveldt20jamin@gmail.com');
const Person2 = new Person ('Joshua',  'Langeveldt', 'langeveldt20joshua@gmail.com');
const Person3 = new Person ('Leah',  'Basson', 'leahbasson101@gmail.com');

console.log(Person1, Person2, Person3 );



// // const fs = require ('fs');
import fs from 'fs'

fs.writeFile('data.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

fs.writeFile('data.txt', 'I have Successfully Created A txt', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });


fs.appendFile('data.txt', ' Updated Finally.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});