const user = { id: 1, name: 'Gorib Amir', job: 'actor' };
// JavaScript Object Notation: (JSON)
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);
/* 
{"id":1,"name":"Gorib Amir","job":"actor"}
{ id: 1, name: 'Gorib Amir', job: 'actor' }
 */

const shop = {
    owner: 'Alina',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['loptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false

};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shpObj = JSON.parse(shopJSON);
console.log(shpObj);