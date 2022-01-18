# Logjam

A simple wrapper around `console.log` with no external dependencies.

## Install

`npm install logjamjs`

## How To Use

Use `jam` to modify the current configuration. The `LogJamConfig` object has two supported properties are:

| Parameter | Type    | Default | Description                                                                                                           |
| --------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| `name`    | string  | `''`    | Use this to preface any log statements. useful if you want to include a function name or method in the log statement. |
| `debug`   | boolean | `false` | Used to turn logging on or off.                                                                                       |

---

<br/>

### Example

<br/>

```typescript
import { jam, log } from "logjamjs"
jam({ name: "👌", debug: true })
log("This is the log")
```

```terminal
👌: This is the log
```

The `log` function takes two parameters. The first is the message to log to the console. The second is an optional `LogJamConfig` object to override the settings for the current log only.

| Parameter | Type         | Description                           |
| --------- | ------------ | ------------------------------------- |
| `log`     | string       | Logs the `string` to the console.     |
| `options` | LogJamConfig | Updates the `name` and `debug` values |

---

```typescript
import { log, jam } from "logjamjs"
jam({ owner: "🙊" })
log("I am not shown")
jam({ debug: true })
log("I am visible")
jam({ owner: "" })
log("Im a generic log")
```

```terminal
🙊: I am visible
Im a generic log
```

## ETC

This is provided as is. You use it at your own risk.
