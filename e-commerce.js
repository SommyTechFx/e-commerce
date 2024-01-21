var prompt = require('prompt-sync')();

const products = ['Mac book', 'Watch', 'Iphone'];
let cart = [];

let inApp = true;

console.log('Welcome to my console application')

while (inApp) {
    console.log('To shop select 1')
    console.log('To see cart 2')
    console.log('To checkout 3')
    console.log('To exit 7')

    let option = prompt('> ')

    if (option == 7) {
        inApp = false;
        continue
    }

    if (option == 1) {
        for (let index = 0; index < products.length; index++){
            console.log(`To add ${products[index]} select ${index}`)
        }
        let optionProduct = prompt('> ')
        cart.push(products[optionProduct])
        continue
    }

    if (option == 2) {
        console.log('My cart', cart, '\n')
        continue
    }

    if (option == 3) {
        console.log('You have ordered', cart, '\n')
        cart = []
        continue
    }
}