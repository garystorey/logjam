const $149c1bd638913645$var$defaultOptions = {
    debug: false,
    name: ""
};
let $149c1bd638913645$var$currentName = $149c1bd638913645$var$defaultOptions.name;
let $149c1bd638913645$var$currentDebug = $149c1bd638913645$var$defaultOptions.debug;
function $149c1bd638913645$export$bef1f36f5486a6a3({ msg: msg = "" , options: options = $149c1bd638913645$var$defaultOptions  }) {
    /*eslint-disable no-console */ const { name: name = $149c1bd638913645$var$currentName , debug: debug = $149c1bd638913645$var$currentDebug  } = options;
    if (!debug) return;
    console.log(name + ":" + msg);
/*eslint-enable no-console */ }
function $149c1bd638913645$export$3748c7d515d5a70d(options) {
    const { name: name = $149c1bd638913645$var$currentName , debug: debug = $149c1bd638913645$var$currentDebug  } = options;
    $149c1bd638913645$var$currentName = name;
    $149c1bd638913645$var$currentDebug = debug;
}


export {$149c1bd638913645$export$bef1f36f5486a6a3 as log, $149c1bd638913645$export$3748c7d515d5a70d as jam};
//# sourceMappingURL=module.js.map
