#!/usr/bin/env babel-node

require('./helper')

let text = require('yargs')
  .argv['_'];

async function echo(text) {
    // Use 'await' in here
    // Your implementation here
    if (text.length > 0) {
        console.log(text.reduce((a, b) => a + " " + b));
    }
}
echo(text)

module.exports = echo
