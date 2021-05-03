let dogs = [{
  name: 'Freddie',
  breed: 'goldendoodle',
  age: '3',
  height: '3ft',
  weight: '30lbs',
  img: 'freddie.jpg',
},
{
  name: 'Charlie',
  breed: 'cocker spaniel',
  age: '13',
  height: '2ft',
  weight: '25lbs',
  img: 'charlie.jpg',
},
{
  name: 'June',
  breed: 'belgian malinois',
  age: '4',
  height: '3ft',
  weight: '50lbs',
  img: 'june.jpg',
},
{
  name: 'Teddie',
  breed: 'Labrador Retriever',
  age: '.8',
  height: '3ft',
  weight: '50lbs',
  img: 'teddie.jpg',
},
{
  name: 'Cap',
  breed: 'Lab',
  age: '5',
  height: '3ft',
  weight: '55lbs',
  img: 'cap.jpg',
}];
/*
  Add an item, test if the length diff's to check if success
*/
module.exports.addItem = (item) => {
  const oldLength = dogs.length;
  const found = this.getItem(item.name);
  if (!found) {
    dogs.push(item);
  }
  return {added: oldLength !== dogs.length, total: dogs.length};
};
/*
 Delete item function
 compares length of objects to old length to see if it succedded.
*/
module.exports.deleteItem = (name) => {
  const oldLength = dogs.length;
  dogs = dogs.filter((a) => {
    return a.name !== name;
  });
  return {deleted: oldLength !== dogs.length, total: dogs.length};
};
/*
  return all the doggies
*/
module.exports.getAll = () => {
  return dogs;
};
/*

*/
module.exports.getItem = (name) => {
  return dogs.find((o) => o.name === name);
};
