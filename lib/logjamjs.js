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
        var logType = typeof msg;
        var opts = merge(state, options);
        var txt = (!msg) ? ''
                : (logType === 'object')
                ? JSON.stringify(msg)
                : msg;
        state = opts;
        if (!opts.debug) return '';
        txt = (opts.owner !== '') ? opts.owner+': '+txt : txt;
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