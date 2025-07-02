## Validation

### HTML Validation

I used the official [W3C Markup Validation Service](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdrake-designer.github.io%2FDungeon-Escape%2Findex.html) to validate all HTML files.

| File       | Validator                                                                                                                               | Screenshot                                                                                | Result | Notes                                                                                                                                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| index.html | [HTML Validator Dungeon Escape!](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdrake-designer.github.io%2FDungeon-Escape%2Findex.html) | ![HTML Validation Screenshot](assets/documentation/validation-images/hmtl-validation.png) | Pass   | No errors or warnings found, except: “Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.” This is **not an error** and is due to Prettier auto-formatting. |

---

### CSS Validation

I used the official [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdrake-designer.github.io%2FDungeon-Escape%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=it) to validate all CSS files.

| File      | Validator                                                                                                                                               | Screenshot                                                                              | Result | Notes                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------ | ---------------------------- |
| style.css | [CSS Validator Dungeon Escape!](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdrake-designer.github.io%2FDungeon-Escape%2Findex.html) | ![CSS Validation Screenshot](assets/documentation/validation-images/css-validation.png) | Pass   | No errors or warnings found. |

---

### JavaScript Validation with ESLint

All JavaScript was checked with [ESLint](https://eslint.org/).

ESLint was initialized with these options:

- **Lint:** JavaScript
- **Use ESLint for:** Problems
- **Type of modules:** Script
- **Framework:** None
- **TypeScript:** No
- **Where does your code run?** Browser

| File    | Validator | Screenshot                                                                   | Result | Notes                                    |
| ------- | --------- | ---------------------------------------------------------------------------- | ------ | ---------------------------------------- |
| game.js | ESLint    | ![ESLint Screenshot](assets/documentation/validation-images/eslint-test.png) | Pass   | No significant errors or warnings found. |

---

### JavaScript Validation with JSHint

All main JavaScript files were also checked using [JSHint](https://jshint.com/) to ensure code quality and identify potential issues.

| File      | Screenshot                                                                       | Warnings/Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| game.js   | ![JSHint Results](assets/documentation/validation-images/jshint-validator.png)   | - 45 functions in this file.<br>- Largest function has 56 statements.<br>- Most complex function has cyclomatic complexity of 17.<br>- **One warning:** Do not use 'new' for side effects.<br><br>_This warning does not impact game behavior._                                                                                                                                                                                                                                                                     |
| script.js | ![JSHint Results](assets/documentation/validation-images/jshint-validator-2.png) | - 2 functions in this file.<br>- Largest function has 3 statements.<br>- Most complex function has cyclomatic complexity of 2.<br>- **One warning:** Functions declared within loops referencing an outer scoped variable may lead to confusing semantics.<br><br>_This warning is due to a function declared within a for loop that references the loop variable. However, ES6 `let` and arrow functions are used, so there is no risk of scope-related bugs. This warning can be safely ignored in this context._ |

---

### Accessibility Validation

I checked accessibility using the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org).

| Page | Validator                                                                                       | Screenshot                                                                     | Result | Notes                                                                                              |
| ---- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------ | -------------------------------------------------------------------------------------------------- |
| Home | [WAVE Report](https://wave.webaim.org/report#/https://drake-designer.github.io/Dungeon-Escape/) | ![WAVE Screenshot](assets/documentation/validation-images/wave-report.png.png) | Pass   | 0 accessibility errors or contrast issues. Minor alerts (structural/ARIA) not affecting usability. |

---

### Lighthouse Performance

I regularly tested Dungeon Escape! using **Google Lighthouse** (in Incognito mode on Chrome) to check performance, accessibility, and best practices.

| Page | Device  | Screenshot                                                                           | Result     | Notes                                                 |
| ---- | ------- | ------------------------------------------------------------------------------------ | ---------- | ----------------------------------------------------- |
| Home | Desktop | ![Lighthouse Desktop](assets/documentation/validation-images/lighthouse-desktop.png) | High Score | Minor warnings only                                   |
| Home | Mobile  | ![Lighthouse Mobile](assets/documentation/validation-images/lighthouse-mobile.png)   | Good       | Minor performance variation based on device/emulation |

**Optimization Steps Taken:**

- All images/assets optimized and minimized
- Single main CSS file
- JavaScript files deferred
- Explicit width/height for key images
- Only essential Google Fonts loaded with `display=swap`

> Note: Lighthouse scores on mobile may vary slightly depending on hardware and network.

---

### Device & Browser Testing

I tested Dungeon Escape! personally and with help from friends/colleagues on multiple devices and browsers to ensure a great user experience.

| Device        | Screenshot                                                                      | Notes                            |
| ------------- | ------------------------------------------------------------------------------- | -------------------------------- |
| iMac          | ![iMac Screenshot](assets/documentation/device-test-images/iMac-test.png)       | All features working as expected |
| Desktop PC    | ![Desktop Screenshot](assets/documentation/device-test-images/desktop-test.png) | All features working as expected |
| iPhone        | ![iPhone Screenshot](assets/documentation/device-test-images/iPhone-test.png)   | All features working as expected |
| iPad          | ![iPad Screenshot](assets/documentation/device-test-images/iPad-test.png)       | All features working as expected |
| Samsung Phone | ![Samsung Screenshot](assets/documentation/device-test-images/samsung-test.png) | All features working as expected |

All devices and browsers displayed the game correctly, with navigation, controls, and modals functioning as intended.

---

## Game Testing

All core gameplay features, controls, collisions, and win/lose conditions were manually tested on both **desktop** and **mobile** devices.

| #   | User Action / Test Case                                                                                       | Expected Result                                                                             | Pass/Fail      | Notes          |
| --- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------- | -------------- |
| 1   | Launch game                                                                                                   | Start scene loads with title and instruction message                                        | Pass           | Desktop/Mobile |
| 2   | Press ENTER or tap on start scene                                                                             | Main game scene loads                                                                       | Pass           | Desktop/Mobile |
| 3   | Move hero with arrow keys                                                                                     | Hero moves in the pressed direction, with correct walking animation                         | Pass           | Desktop only   |
| 4   | Move hero with WASD keys                                                                                      | Hero moves in the pressed direction, with correct walking animation                         | Pass           | Desktop only   |
| 5   | Tap/click around hero (mobile)                                                                                | Hero moves toward the tap location, starts walking animation, stops on pointer up/out       | Pass           | Mobile only    |
| 6   | Hero collides with wall                                                                                       | Hero cannot walk through walls (collision is blocked)                                       | Pass           | Desktop/Mobile |
| 7   | Monster movement                                                                                              | Monsters move around randomly, change direction on collision with walls/doors/each other    | Pass           | Desktop/Mobile |
| 8   | Monster collides with wall/door/chest/monster                                                                 | Monster changes direction immediately                                                       | Pass           | Desktop/Mobile |
| 9   | Hero collides with monster                                                                                    | Game switches to "Game Over" scene                                                          | Pass           | Desktop/Mobile |
| 10  | Hero collides with chest (with key inside)                                                                    | Message "You have got a key!" is shown; key is collected and chest disappears               | Pass           | Desktop/Mobile |
| 11  | Hero collides with chest (empty)                                                                              | Message "The chest is empty!" is shown; chest remains                                       | Pass           | Desktop/Mobile |
| 12  | Try to open door without any key                                                                              | Message "You need the key!" is shown; door remains closed                                   | Pass           | Desktop/Mobile |
| 13  | Try to open door with wrong key                                                                               | Message "The key does not work!" is shown; door remains closed                              | Pass           | Desktop/Mobile |
| 14  | Open door with correct key                                                                                    | Message "You opened the door!" is shown; door sprite changes to open, collision is disabled | Pass           | Desktop/Mobile |
| 15  | Walk through open door                                                                                        | Hero can walk through, no collision with open door                                          | Pass           | Desktop/Mobile |
| 16  | Hero enters exit zone behind door                                                                             | Game switches to "Win Scene"                                                                | Pass           | Desktop/Mobile |
| 17  | "Win Scene": Click ENTER or tap to restart                                                                    | Game restarts, main scene reloads                                                           | Pass           | Desktop/Mobile |
| 18  | "Game Over Scene": Click ENTER or tap to restart                                                              | Game restarts, main scene reloads                                                           | Pass           | Desktop/Mobile |
| 19  | Change difficulty using difficulty buttons (before start)                                                     | Number and speed of monsters changes based on selected difficulty                           | Pass           | Desktop/Mobile |
| 20  | Test chest key distribution randomness                                                                        | Keys are randomly assigned to chests on each game start                                     | Pass           | Desktop/Mobile |
| 21  | The message appears for 4 seconds when the hero interacts with a chest or door, then automatically disappears | Pass                                                                                        | Desktop/Mobile |

---

### Validation Summary

| Validation Area          | Result                                  |
| ------------------------ | --------------------------------------- |
| HTML                     | Pass (minor info warning, not an error) |
| CSS                      | Pass                                    |
| JavaScript               | Pass (with non-blocking warnings)       |
| Accessibility            | Pass                                    |
| Performance (Lighthouse) | High                                    |
| Device/Browser           | Pass                                    |
