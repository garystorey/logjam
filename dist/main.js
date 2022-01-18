function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "log", () => $882b6d93070905b3$export$bef1f36f5486a6a3);
$parcel$export(module.exports, "jam", () => $882b6d93070905b3$export$3748c7d515d5a70d);
const $882b6d93070905b3$var$defaultOptions = {
    debug: false,
    name: ""
};
let $882b6d93070905b3$var$currentName = $882b6d93070905b3$var$defaultOptions.name;
let $882b6d93070905b3$var$currentDebug = $882b6d93070905b3$var$defaultOptions.debug;
function $882b6d93070905b3$export$bef1f36f5486a6a3({ msg: msg = "" , options: options = $882b6d93070905b3$var$defaultOptions  }) {
    /*eslint-disable no-console */ const { name: name = $882b6d93070905b3$var$currentName , debug: debug = $882b6d93070905b3$var$currentDebug  } = options;
    if (!debug) return;
    console.log(name + ":" + msg);
/*eslint-enable no-console */ }
function $882b6d93070905b3$export$3748c7d515d5a70d(options) {
    const { name: name = $882b6d93070905b3$var$currentName , debug: debug = $882b6d93070905b3$var$currentDebug  } = options;
    $882b6d93070905b3$var$currentName = name;
    $882b6d93070905b3$var$currentDebug = debug;
}


//# sourceMappingURL=main.js.map
