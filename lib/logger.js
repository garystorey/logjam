function logger() {

    'use strict';

    this.state = {
        owner : '',
        debug: false
    };

    function setState(s) {
        this.state = merge(s, this.state);
    }

    function log(msg,options) {
        var opts = merge(options, this.state);
        let txt = '';

        return (!opts.debug) ? '' :
            txt += (opts.owner !== '') ? opts.owner+': ' : '',
            txt += msg,
            console.log(txt);
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