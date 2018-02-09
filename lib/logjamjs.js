function logjam() {

    'use strict';

    var state = {
        owner : '',
        debug: false
    };

    function setState(s) {
        state = merge(state,s);
    }

    function log(msg,options) {
        var opts = merge(state, options);
        var txt = (!msg) ? ''
                : (typeof msg === 'object')
                ? JSON.stringify(msg)
                : msg;
        state = opts;
        if (!opts.debug) return '';
        txt = (opts.owner !== '') ? opts.owner+': '+msg : msg;
        txt.length && console.log(txt);
    }

    return {
        log: log,
        set: setState
    }
}

function merge(o1, o2) {
    var one = o1 || {};
    var two = o2 || {};
    for(keys in two) {
        if (two.hasOwnProperty(keys)) {
            one[keys] = two[keys];
        }
    }
    return one;
}

module.exports = logjam;