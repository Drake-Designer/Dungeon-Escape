![Code Institute Project](assets/readme-images/code-institute-img.png)

<h1 align="center">
  <img src="" width="28" />
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
3. [Features](#features)
4. [Technologies Used](#technologies-used)
   - [Favicon Creation & Integration](#favicon-creation--integration)
5. [Testing & Bug Fixes](#testing--bug-fixes)
6. [Validation](#validation)
7. [Deployment](#deployment)
8. [Credits](#credits)

---

## Project Overview

Welcome to **Dungeon Escape!**

You are the hero, stuck in a dark dungeon... Your mission?

**Find one of the hidden keys, avoid the monsters or they will eat you, and unlock the door to escape!**

- Move freely in real-time.
- Monsters move around the dungeon, and they’ll chase you if you’re not careful!
- Three chests to reach: two have the key, one is empty!
- If a monster catches you, you lose!
- Playable on desktop (with keyboard) and mobile (just tap).

---

## Scope

The game is designed to practice JavaScript and Phaser 3 for classic grid-based gameplay:

- Free movement on a grid with walls and paths
- Real-time action movements
- Monsters moving randomly across the dungeon
- Three chests, only two have keys to open the doors
- Player must find a key, unlock a door, and escape while avoiding monsters
- If a monster catches you, you lose!
- Playable on desktop and mobile

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

- When the game loads, I see a big title of the game and a message: “Click or Tap to play!”
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

| Where it's used            | Font family       | What it's for                       |
| -------------------------- | ----------------- | ----------------------------------- |
| Navigation bar             | Pirata One        | Used for the main menu / navbar     |
| Game lore and special text | Uncial Antiqua    | For story sections and special text |
| Main titles                | Cinzel Decorative | For big titles and headers          |
| Arcade/game text           | Press Start 2P    | For retro arcade text in the game   |
| General/secondary text     | Roboto            | Used for body text and modals       |

```css /*
/* Font families */

--font-nav-bar: 'Pirata One', cursive; /* Navbar font */
--font-lore: 'Uncial Antiqua', cursive; /* Mase text */
--font-secondary: 'Roboto', serif; /* Secondary and Modal text */
--font-title: 'Cinzel Decorative', serif; /* Main titles */
--font-arcade: 'Press Start 2P', monospace; /* Phaser */
```

Fonts are loaded from Google Fonts for that authentic retro feel.

---

## Features

---
