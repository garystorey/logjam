# Logjam

A simple wrapper around `console.log` with no external dependencies.

## Install

`npm install logjamjs`

## How To Use

logjam currently supports the following two options:

* `owner`:  [string] Default:`''` - Use this to preface any log statements.  useful if you want to include a function name or method in the log statement.
* `debug`: [boolean] Default: `false` - Used to turn logging on or off.

logjam has the following two methods:

* `log`: [string] - Logs the `string` to the console.
* `set`: [object] - Updates the `owner` and `debug` values

Include logjam either via `require` or `import`

```javascript
// CommonJS
const logjam = require('logjamjs')();
const log = logjam.log;

// MJS
import logjam from 'logjamjs';
const log = logjam.log;
```

Once included, you can use the module like this:

```javascript
// file_to_open.txt
hello world!
How are you?

// in file.js
const fs= require('fs')
logjam.set({owner: '📁', debug: PROCESS.ENV !=='production'});
const data = fs.readFileSync('file_to_open.txt', 'UTF-8');
const lines = data.split(/\r?\n/);
lines.forEach(log);  

// result:
// 📁: hello world!
// 📁: How are you?

// in other_file.js
logjam.set({owner:'🙊', debug: false});
log('hi');
logjam.set({debug: true});
log('bye'); 

//result
// 🙊: bye

logjam.set({owner:''});
log('hi');

//result
// hi
```

## ETC

This is provided as is.  You use it at your own risk.
