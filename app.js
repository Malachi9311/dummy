const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)

//npm i nodemon -D

console.log('hello world')