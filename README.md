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

It seems I need zombie, so let's install it (`npm install zombie`).

After installing zombie, I get this:

```
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

~/code/cucumber-test (master #%)
$ ./node_modules/.bin/cucumber.js features/cucumber-test.feature
Feature: Example feature

  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation                   # features/cucumber-test.feature:6
    Given I am on the Cucumber.js GitHub repository # features/step_definitions/example-step-definitions.js:2
      TypeError: e.scrollIntoView is not a function
          at n (https://assets-cdn.github.com/assets/frameworks-811eeee6deace33058df3247f4b8d7ae4cbcc28c8f1162a945fe38c4077b109e.js:7:12937)
          at Object.r [as scrollToFragmentTarget] (https://assets-cdn.github.com/assets/frameworks-811eeee6deace33058df3247f4b8d7ae4cbcc28c8f1162a945fe38c4077b109e.js:7:13034)
          at https://assets-cdn.github.com/assets/github-a4a67e99958b96d6488a9306e4d46cadec6e6c7ba99ac4d1962c0ca5901b292e.js:2:7195
          at r (https://assets-cdn.github.com/assets/frameworks-811eeee6deace33058df3247f4b8d7ae4cbcc28c8f1162a945fe38c4077b109e.js:6:17826)
          at https://assets-cdn.github.com/assets/frameworks-811eeee6deace33058df3247f4b8d7ae4cbcc28c8f1162a945fe38c4077b109e.js:6:17169
          at s (https://assets-cdn.github.com/assets/frameworks-811eeee6deace33058df3247f4b8d7ae4cbcc28c8f1162a945fe38c4077b109e.js:6:16826)
          at HTMLDocument.a (https://assets-cdn.github.com/assets/frameworks-811eeee6deace33058df3247f4b8d7ae4cbcc28c8f1162a945fe38c4077b109e.js:6:16854)
          at callListeners (/Users/patrickmcelhaney/code/cucumber-test/node_modules/jsdom/lib/jsdom/events/EventTarget.js:170:34)
          at dispatchPhase (/Users/patrickmcelhaney/code/cucumber-test/node_modules/jsdom/lib/jsdom/events/EventTarget.js:159:7)
          at HTMLDocument.EventTarget.dispatchEvent (/Users/patrickmcelhaney/code/cucumber-test/node_modules/jsdom/lib/jsdom/events/EventTarget.js:115:3)
          in https://github.com/cucumber/cucumber-js
    When I go to the README file                    # features/step_definitions/example-step-definitions.js:13
    Then I should see "Usage" as the page title     # features/step_definitions/example-step-definitions.js:20

Failing scenarios:
features/cucumber-test.feature:6 # Scenario: Reading documentation

1 scenario (1 failed)
3 steps (1 failed, 2 skipped)
0m01.815s
```
