# parse-keys

JSON.parse only object keys

## Install

```sh
$ npm i parse--keys --save
```

## Usage


```js
//server.js
'use strict'

var parse = require('parse-keys');
var env = parse(process.env, ['PORT']);

console.log(process.env.PORT) === "4000"
//while
console.log(env.PORT) === 4000

```

```sh
$ PORT=4000
```