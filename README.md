# CucumberJS Test

This is my attempt to get CucumberJS running on Node v4.1.2

When I install Cucumber (`npm install --save-dev cucumber`) and try to run it against example code
from the [README](https://github.com/cucumber/cucumber-js/blob/018d8702d2182796c1d1c27e7a381f97b5b5e166/README.md), I get the following result:


```
~/code/cucumber-test (master #%)
$ ./node_modules/.bin/cucumber.js features/cucumber-test.feature
module.js:338
    throw err;
    ^

Error: Cannot find module 'zombie'
    at Function.Module._resolveFilename (module.js:336:15)
    at Function.Module._load (module.js:286:25)
    at Module.require (module.js:365:17)
    at require (module.js:384:17)
    at Object.<anonymous> (/Users/patrickmcelhaney/code/cucumber-test/features/support/World.js:1:76)
    at Module._compile (module.js:434:26)
    at Object.Module._extensions..js (module.js:452:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Module.require (module.js:365:17)
```
