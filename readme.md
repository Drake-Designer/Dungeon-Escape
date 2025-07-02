![Code Institute Project](assets/readme-images/code-institute-img.png)

<h1 align="center">
  <img src="assets/images/favicon/favicon-96x96.png" width="28" alt="Monster GIF" />
  Milestone Project 2: Dungeon Escape!
</h1>

<p align="center">
  <em><strong>
    A simple dungeon escape game made with HTML, CSS, JavaScript and Phaser 3.<br>
    Find the key, avoid monsters, and escape the dungeon!
  </strong></em>
</p>

---

## 👉 [Play Dungeon Escape](https://drake-designer.github.io/Dungeon-Escape/)

![Game Intro Screenshot](assets/readme-images/am-i-responsive.png)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [User Experience Design](#user-experience-design)
   - [User Stories](#user-stories)
   - [Structure](#structure)
   - [Design](#design)
     - [Wireframes](#wireframes)
     - [Colour Palette](#colour-palette)
     - [Typography](#typography)
3. [Technologies Used](#technologies-used)
4. [Testing & Bug Fixes](#testing--bug-fixes)
5. [Validation](#validation)
6. [Deployment](#deployment)
7. [Credits](#credits)
8. [Behind the Scenes!](#behind-the-scenes)

---

## Project Overview

Welcome to **Dungeon Escape!**

You are the hero, stuck in a dark dungeon... Your mission?

> Find one of the hidden keys, avoid the monsters or they will eat you, and unlock the door to escape!

### Game Features

- Move freely in real-time.
- Monsters move around the dungeon, and they’ll chase you if you’re not careful!
- Three chests to reach: two have the key, one is empty!
- If a monster catches you, you lose!
- Playable on desktop and mobile.

### Difficulty Levels

You can choose between **three difficulty levels** before starting the game!  
Each level changes the **number of monsters** in the dungeon and **how fast they move**:

- **Easy**: 4 slower monsters
- **Medium**: 6 faster monsters
- **Hard**: 8 monsters, at the highest speed

Pick your difficulty and try to escape the dungeon!

---

### Scope

The game is designed to practice JavaScript and Phaser 3 for classic grid-based gameplay:

- Free movement on a grid with walls and paths
- Real-time action movements
- Monsters moving randomly across the dungeon
- Three chests, only two have keys to open the doors
- Player must find a key, unlock a door, and escape while avoiding monsters
- If a monster catches you, you lose!

---

### How Dungeon Escape! Was Born

Dungeon Escape! was one of the most ‘dangerous’, risky… but also super fun and satisfying challenges I’ve ever done so far.

> Why did I decide to present this as my PP2?

Because since I was a kid, I’ve always wanted to create a game (even a simple or basic one) from scratch, with my own ideas and mechanics. So, while I was trying to figure out what to do for PP2, I came across [Phaser](https://phaser.io), a game framework that I fell in love with at first sight.

That’s it… I just told myself: “Let’s do something crazy, I want to present a game that I built myself as my project!”

Since I had no idea how Phaser worked, I decided to start with [Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game) from the official Phaser website, just to learn the basics. Then, I found a mini-course on Zenva ([Phaser Mini-Degree](https://academy.zenva.com/product/html5-game-phaser-mini-degree/)) to learn more features and figure out how to use the Phaser logic in JavaScript.

I have to say, it was tough, and I definitely didn’t manage to learn everything at all… but at least I got to understand a lot of the mechanics and how to structure Dungeon Escape!

So before starting the real project, I began with two walkthrough projects that were super important to help me understand how Phaser works.

My github links projects:

- [Phaser First Game Tutorial](https://github.com/Drake-Designer/Phaser-First-Game-Tutorial)
- [Road Crossing Game](https://github.com/Drake-Designer/Road-Crossing-Game)

And… even if I’ve already forgotten more than half of what I learned 😅, I still managed to get the mini-Phaser diploma! (But I definitely need to go back to the course, because there’s still a lot I need to learn properly and I didn’t have time to focus as much as I wanted!)

![Zenva Certificate](assets/readme-images/zenva-certificate.png)

This whole experience really pushed me out of my comfort zone, but it made me even more excited to keep learning and building new things!

---

## User Experience Design

### User Stories

- As a player, I want to play an old-style pixel art game like the ones from the ‘80s.
- I want to control my hero with the arrow keys or WASD (on desktop) or by tapping the screen (on mobile).
- I want clear instructions on how to play and win.
- I want the game to work on my phone or computer, so I can play anywhere.
- I want a simple, clean interface, not too many buttons or menus.
- I want to have fun by trying to escape the dungeon, find keys, and avoid monsters.

### Structure

- When the game loads, I see a big title of the game and a message: “Click ENTER or Tap to play!”
- The game fills the center of the screen, with a nice dark background.
- The controls are simple:
  - Arrow keys or WASD to move (desktop)
  - Tap around your hero to move (mobile)
- There’s a “How to Play” modal with clear instructions.

### Design

#### Wireframes

The layout for Dungeon Escape has been made using [Balsamiq](https://balsamiq.com/) fusing different devices templates to simulate the user's view of the website in different devices.

This made it easy to see where to put important elements like the navbar, the game instructions, and the main game area.

I created wireframes for:

- **Desktop PC**
- **iPad PRO**
- **iPhone SE**
- **Samsung Galaxy S20 Ultra**

Each version shows:

- **A simple navbar at the top**
- **The game title and short instructions**
- **The main game image or area in the center**
- **A footer at the bottom**

These wireframes helped me make sure the game looks clean and easy to use on all devices.

![Wireframes](assets/readme-images/wireframes.png)

#### Colour Palette

The game uses a simple palette to make everything feel like an old-school dungeon:

| Name             | Hex Code  | Use                                 |
| ---------------- | --------- | ----------------------------------- |
| Main Background  | `#0b0c10` | Dark background for the whole page  |
| Panel Background | `#1c1e22` | For panels, modals, and borders     |
| Main Text        | `#ffffff` | Main text (easy to read)            |
| Secondary Text   | `#58595c` | Less important text                 |
| Primary Accent   | `#ffb600` | Gold color for icons and highlights |
| Secondary Accent | `#00c89a` | Teal color for extra highlights     |

This dark palette makes the gold and teal really pop, just like in retro games.

![Color Palette](assets/readme-images/color-palette.png)

#### Typography

The game uses a mix of modern and retro fonts to create a fun, arcade-style feeling. Different font families are used for different parts of the site and game. All fonts are loaded from [Google Fonts](https://fonts.google.com/).

| Where it's used  | Font family       | What it's for                     |
| ---------------- | ----------------- | --------------------------------- |
| Navigation bar   | Cinzel Decorative | Navbar                            |
| Main titles      | Roboto            | Primary headings and big text     |
| Arcade/game text | Press Start 2P    | For retro arcade text in the game |

```css /*
/* Font families in CSS */

--font-nav: 'Cinzel Decorative', serif; /* Navbar font */
--font-primary: 'Roboto', serif; /* Primary/main text */
--font-arcade: 'Press Start 2P', monospace; /* Phaser */
```

---

## Technologies Used

### Core Web Technologies & Game Engine

- HTML
- CSS
- JavaScript
- [Phaser 3.90](https://phaser.io) – Game engine!

### Development & Asset Creation Tools

- [Tiled](https://www.mapeditor.org) – Map editor
- [Piskel](https://www.piskelapp.com) – Pixel art sprite editor
- [Photopea](https://www.photopea.com) – Online graphics editor
- [RealFaviconGenerator](https://realfavicongenerator.net) – Favicon generator
- [Tinify](https://tinify.com/) – Online image optimizer

### Art & Asset Resources

- [OpenGameArt](https://opengameart.org) – Free game assets
- [Itch.io](https://itch.io) – Free game assets
- [CraftPix](https://craftpix.net) – Free game assets

---

## Testing & Bug Fixes

### 🐞 BUG 1: Game Container & Phaser Canvas Sizing

When I started building **Dungeon Escape!**, I wanted my Phaser game window to fit perfectly inside a `<div>` game-area on my web page, always centered and responsive.

But I had to face a problem: the Phaser canvas never fit exactly inside my container!
Sometimes there was a small part sticking out, or some borders were missing, or the canvas wasn’t fully centered.
I tried changing scale modes, CSS tricks, Bootstrap, different aspect ratios... nothing really worked.

My HTML looked like this:

```cs
<main class="main-container">
  <div id="game-container"></div>
</main>
```

And my Phaser config had:

```cs
scale: {
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  width: 800,
  height: 600,
  parent: 'game-container'
}
```

But the canvas still didn’t fit right in all browsers and on all screens.

#### The Solution (Thanks, Discord!):

After lots of searching, I asked for help on Discord (see screenshots below!).

![Canvas Bug](assets/readme-images/bugs/canvas-bug-discord.png)

A kind user suggested this simple strategy:

![Canvas Bug 2](assets/readme-images/bugs/canvas-bug-discord-2.png)

In the end, I decided to wrap the canvas in an extra `<div id="game-border">` to have better control over the border and centering with another CSS workaround:

```cs
/* -----------------------------------> Game container */

.main-container {
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
}

#game-border {
  width: 100%;
  max-width: 1200px;
  border: 2px solid red;
  border-radius: 4px;
  background: var(--bg-main);
}

#game-container {
  width: 100%;
  height: 100%;
}

canvas {
  width: 100% !important;
  height: 100% !important;
  border-radius: 2px;
}
```

That solution actually worked pretty well!

Also, I realized I could make things even cleaner by using the parent property in my Phaser config to directly attach the game to my container div.

Here’s the Phaser config I used:

```cs
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 608,
  parent: 'game-container',
  physics: { default: 'arcade', arcade: { debug: true } },
  scene: [startScene, mainScene],
};
```

### 🐞 BUG 2: The Door & Chest Alignment!

When I was almost close to finishing the game, I hit a frustrating bug:

Doors and chests were always in the wrong place in Phaser compared to where I placed them in Tiled!

No matter what I tried, changing the code, modifying the origin and offsets property... nothing matched up. It drove me crazy for a few days!

### 🕵️‍♂️ Troubleshooting & Community Help

After a lot of trial and error, I decided to ask for help on the Tiled forum and also on Discord (see screenshots below).

![Tileset Bug Pic](assets/readme-images/bugs/alignment-bug-discord.png)

A very helpful user on the forum explained that the problem could be fixed by changing the **Object Alignment** property of my tileset in Tiled. I had never noticed that option before!

![Tileset Bug Pic](assets/readme-images/bugs/alignment-bug-tiled.png)

---

As soon as I set **Object Alignment** to **Center** in my tileset properties and re-placed my doors and chests, everything lined up perfectly in Phaser, no more weird offsets or manual fixes!

---

#### Before the fix:

```js
this.doors = this.physics.add.staticGroup();
const doorObjects = map.getObjectLayer('doors').objects;

doorObjects.forEach((obj) => {
  const door = this.doors.create(obj.x, obj.y, 'door-close').setOrigin(0, 1);
  door.setData('doorID', obj.properties.find((p) => p.name === 'doorID')?.value);
  door.setData('open', !!obj.properties.find((p) => p.name === 'open')?.value);
  door.body.setSize(32, 26);
  door.body.setOffset(26, -11);
});
```

![Tileset Map Bug](assets/readme-images/bugs/phaser-map-bug.png)

#### After the fix:

```js
// Objects: doors
this.doors = this.physics.add.staticGroup();
const doorObjects = map.getObjectLayer('doors').objects;

doorObjects.forEach((obj) => {
  const door = this.doors.create(obj.x, obj.y, 'door-close');
  door.setData('doorID', obj.properties.find((p) => p.name === 'doorID')?.value);
});
```

![Tileset Map Bug](assets/readme-images/bugs/phaser-map-fix.png)

---

## Validation

### HTML & CSS Validation

All code was checked using the official W3C validators:

- **HTML:**  
  [W3C Markup Validation Service](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdrake-designer.github.io%2FDungeon-Escape%2Findex.html)  
  _No errors or warnings were found, except for the following info message:_

  > **Info:** Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.

  This is **not an error** and does not affect the validity or functionality of the HTML.  
  It occurs because I use the Prettier extension, which automatically formats void elements with a trailing slash.

- **CSS:**  
  [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdrake-designer.github.io%2FDungeon-Escape%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=it)  
  _No errors or warnings were found._

The project fully complies with W3C standards for both HTML5 and CSS3.

---

### JavaScript Validation

All JavaScript code was checked using [ESLint](https://eslint.org/) to ensure code quality and catch potential errors.

I initialized ESLint in the project using the terminal, with the following options:

- **Lint:** JavaScript
- **Use ESLint for:** Problems
- **Type of modules:** Script
- **Framework:** None
- **TypeScript:** No
- **Where does your code run?** Browser

I let ESLint install the necessary dependencies and create the config file automatically.

Here is a screenshot of the ESLint initialization process from my terminal:

![ESLint Configuration](assets/readme-images/eslint-test.png)

---

### Accessibility Validation

I checked accessibility using the [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org).

- **No accessibility errors were found.**
- The report confirms 0 errors and 0 contrast issues.
- A few minor alerts or features are shown (such as structural elements and ARIA usage), but nothing that affects the accessibility or usability of the site.

If you want to view the WAVE report directly, you can use this link:

👉 [View live WAVE report for Dungeon Escape!](https://wave.webaim.org/report#/https://drake-designer.github.io/Dungeon-Escape/)

---

### Lighthouse Performance Results

I regularly tested Dungeon Escape! with **Google Lighthouse** (in **Incognito Mode** on Google Chrome) to monitor performance, accessibility, and best practices during development.

- On **desktop**, the game consistently scores very high on all metrics.
- On **mobile**, the scores are generally good, but can fluctuate more often due to differences in device hardware, network conditions, and how browsers emulate mobile performance.

I have done my best to optimize the site for both desktop and mobile by:

- Minimizing and optimizing all images and assets.
- Using only one main CSS file, loaded at the top.
- Deferring all JavaScript files to prevent render blocking.
- Using optimized images.
- Adding explicit width and height attributes to key images to minimize layout shifts.
- Loading only essential fonts from Google Fonts with `display=swap` for better perceived loading times.

Despite these optimizations, mobile scores can still vary depending on the testing environment, device, and emulation.

#### Example Results

**Desktop (Lighthouse):**

![Lighthouse Desktop Report](assets/readme-images/lighthouse-desktop.png)

**Mobile (Lighthouse):**

![Lighthouse Mobile Report](assets/readme-images/lighthouse-mobile.png)

> If you are testing the game yourself, you may see slightly different scores depending on your device or network, but overall, the game remains performant and responsive!

---

### Device Testing

To ensure a great user experience across different platforms, **I tested Dungeon Escape! personally and asked friends and colleagues to test it on multiple devices**.

The game runs well on all of the following devices, with no major issues reported:

- **iMac**
- **Desktop PC**
- **iPhone devices**
- **iPad devices**
- **Samsung phone device**

Below are screenshots showing Dungeon Escape! running on each device:

#### iMac

![Dungeon Escape on iMac](assets/readme-images/iMac-test.png)

#### Desktop PC

![Dungeon Escape on Desktop PC](assets/readme-images/desktop-test.png)

#### iPhone

![Dungeon Escape on iPhone](assets/readme-images/iPhone-test.png)

#### iPad

![Dungeon Escape on iPad](assets/readme-images/iPad-test.png)

#### Samsung Phone

![Dungeon Escape on Samsung Phone](assets/readme-images/samsung-test.png)

All devices displayed the game correctly and the main features (navigation, controls, and modals) worked as intended.

---

## Deployment

The **Dungeon Escape!** game is fully deployed and publicly accessible via **GitHub**.  
This allows anyone to play the game directly from their browser, without the need to download or install anything.

### Deployment Steps

1. **Project Setup on GitHub**

   - The full project (HTML, CSS, JavaScript, Phaser assets, and images) was pushed to a public [GitHub repository](https://github.com/Drake-Designer/Dungeon-Escape).

2. **Deploying to GitHub Pages**

   - In the repository, go to **Settings** > **Pages**.
   - Under the **Source** section, select the **`main` branch** (root).
   - Click **Save** to activate GitHub Pages for the project.
   - GitHub automatically generates a public URL for the website.

3. **Deployment Confirmation**

   - After a few seconds, a banner appears confirming that the site was successfully deployed.
   - The site is now available at the following address:

     👉 **[Play Dungeon Escape! Live](https://drake-designer.github.io/Dungeon-Escape/)**

4. **Testing the Live Version**

   - After deployment, I thoroughly tested the live site across multiple devices and browsers to ensure everything works as intended (see [Device Testing](#device-testing)).

5. **Sharing the Game**
   - The public URL can be shared with friends, colleagues, and reviewers.
   - The game is accessible from both desktop and mobile devices, no installation required.

### Useful Links

- **Live Site:**  
  [https://drake-designer.github.io/Dungeon-Escape/](https://drake-designer.github.io/Dungeon-Escape/)
- **GitHub Repository:**  
  [https://github.com/Drake-Designer/Dungeon-Escape](https://github.com/Drake-Designer/Dungeon-Escape)

---

## Credits

I want to thank all the resources, tutorials, and people that helped me build **Dungeon Escape!**

This project was a big learning experience, and I could not have done it alone.

### Phaser Projects

Before starting this project, I made two small Phaser games to learn the basics.  
A lot of code and ideas in Dungeon Escape! come from these mini-projects:

- [Phaser First Game Tutorial](https://github.com/Drake-Designer/Phaser-First-Game-Tutorial)  
  _My first game with Phaser, where I learned about scenes, movement, and collisions._

- [Road Crossing Game](https://github.com/Drake-Designer/Road-Crossing-Game)  
  _Here I learned more about character movement, obstacles, and how to structure a small game._

These projects made it much easier for me to work on Dungeon Escape!

### Online Courses

- [Phaser Mini-Degree (Zenva Academy)](https://academy.zenva.com/product/html5-game-phaser-mini-degree/)  
  _This course helped me understand how Phaser works. I followed the main modules and learned about asset loading, game scenes, and more._

### Map Tutorials with Tiled

I learned how to create my own map with these YouTube tutorials:

- [How to Create a Tile Map with Tiled and Phaser 3](https://www.youtube.com/watch?v=IHmF_bRpOAE)
- [Phaser 3 and Tiled - Full Setup Guide (Playlist)](https://www.youtube.com/watch?v=ZwaomOYGuYo&list=PLyMh3RngtKvNhNFwZyfkQj4E35FGv3HBg&index=1)

These videos showed me how to use Tiled with Phaser, add objects, and set up collisions.

#### Phaser Documentation & Community

- [Phaser 3 Documentation](https://docs.phaser.io/phaser/getting-started/what-is-phaser)

- [Phaser Examples](https://phaser.io/examples)

- [Phaser Forum & Discord](https://phaser.discourse.group/)

#### Playtesters

Thank you to my friends, colleagues, and family who tested Dungeon Escape! on different devices and gave me feedback.

---

### Special Thanks

I want to give a special thank you to some people who helped me by testing Dungeon Escape! on different devices, giving feedback, and sending screenshots.

Big thanks to:

- [violaberg](https://github.com/violaberg) – _tested on iPhone/iPad and gave helpful feedback._

- [Rebekah-codes](https://github.com/Rebekah-codes) – _tested on Samsung and sent screenshots._

---

## Behind the Scenes!

### How the Monster Movement Evolved

When I started working on Dungeon Escape, my original plan was simple: Monsters would only move up/down or left/right, just like old-school arcade games.

But while testing, I made a funny mistake in the code: I changed monster.dx = 50; and monster.dy = 50; and suddenly, the monsters began to move diagonally.

Instead of fixing this "bug," I thought: _"Wait, this actually looks cool! Why not let the monsters move in any direction, even diagonally? It makes the game feel more alive and unpredictable!"_

So, with a bit of help from ChatGPT to refine the mechanics, I updated the logic:

Now, whenever a monster hits a wall, it immediately picks a completely random direction—up, down, left, right, or any diagonal—and keeps wandering through the dungeon like a real little creature with a mind of its own.

Example (old logic):

```js
function monsterMove() {
  monsters.getChildren().forEach((monster, i) => {
    if (monster.dx === undefined && monster.dy === undefined) {
      if (positions[i].dir === 'v') {
        monster.dx = 0;
        monster.dy = 80;
      } else {
        monster.dx = 80;
        monster.dy = 0;
      }
    }
    if (monster.body.blocked.left || monster.body.blocked.right) {
      monster.dx *= -1;
    }
    if (monster.body.blocked.up || monster.body.blocked.down) {
      monster.dy *= -1;
    }
    monster.setVelocity(monster.dx, monster.dy);
  });
}
```

Example (new logic):

```js
function monsterMove() {
  monsters.getChildren().forEach((monster) => {
    if (monster.dx === undefined || monster.dy === undefined) {
      monsterRandomDirection(monster);
    }
    if (monster.body.blocked.left || monster.body.blocked.right || monster.body.blocked.up || monster.body.blocked.down) {
      monsterRandomDirection(monster);
    }
    monster.setVelocity(monster.dx, monster.dy);
  });
}

function monsterRandomDirection(monster) {
  const speed = 80;
  const directions = [
    { dx: speed, dy: 0 },
    { dx: -speed, dy: 0 },
    { dx: 0, dy: speed },
    { dx: 0, dy: -speed },
    { dx: speed, dy: speed },
    { dx: -speed, dy: speed },
    { dx: speed, dy: -speed },
    { dx: -speed, dy: -speed },
  ];
  const dir = directions[Math.floor(Math.random() * directions.length)];
  monster.dx = dir.dx;
  monster.dy = dir.dy;
}
```

That was a nice surprise for me, and it made me realize that mistakes can be fantastic sometimes! 😄

### Note on Mobile Controls

I am aware that the hero’s movement is **not as smooth on mobile devices** compared to desktop controls. I considered implementing a virtual joystick for touch controls, which is a common solution for making character movement more fluid on mobile.

However, after some research and testing, I found that adding a joystick was a bit too complex for this project’s scope, and it would also take up too much space in the game window, especially on smaller screens. I decided to keep the **tap-to-move** controls for mobile, even though they are not perfectly smooth, because they keep the interface clean and the gameplay experience simple.

If I work on a future version, I’ll definitely explore better mobile control solutions!

---
