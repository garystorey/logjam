# Logjam

A simple wrapper around console.log with no external dependencies.

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
const logjam = require('logjamjs');
// or
import logjam from 'logjamjs';
```

If you want to just use a basic logger:

```javascript
const log = require('logjamjs').log;
// or
import logjam from 'logjamjs';
const log = logjam.log;
```

Once included, you can use the module like this:

```javascript
import logjam from 'logjamjs';
const log = logjam.log;

logjam.set({owner: 'Me', debug: true});
log('hi!');
// Me: hi!

logjam.set({debug:false});
log('hi');
//  (nothing)

logjam.set({owner:'You'});
log('hi');
// You: hi

logjam.set({owner:''});
log('hi');
// hi
```

## ETC

This is provided as is.  You use it at your own risk.
