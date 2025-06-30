/* global Phaser */

// -------------------------------------> Global Variables

// Hero and Monster
let hero;
const heroSpeed = 80;
let monsters;

// Hero movements
let keyboardCursors;
let keyboardWASD;

// Keys
let heroKeys = [];

// -------------------------------------> Global Functions

/** Detects if device is mobile/touch */
function isMobileDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Moves the hero with keyboard (arrow keys or WASD).
 * Starts walking animation when moving, stops it when not.
 * (Only keyboard - Desktop)
 */
function heroMove() {
  hero.setVelocity(0);

  let left = keyboardCursors && (keyboardCursors.left.isDown || keyboardWASD.left.isDown);
  let right = keyboardCursors && (keyboardCursors.right.isDown || keyboardWASD.right.isDown);
  let up = keyboardCursors && (keyboardCursors.up.isDown || keyboardWASD.up.isDown);
  let down = keyboardCursors && (keyboardCursors.down.isDown || keyboardWASD.down.isDown);

  let vx = 0;
  let vy = 0;
  if (left) vx = -heroSpeed;
  else if (right) vx = heroSpeed;
  if (up) vy = -heroSpeed;
  else if (down) vy = heroSpeed;

  if (vx < 0) {
    hero.setFlipX(true);
  } else if (vx > 0) {
    hero.setFlipX(false);
  }

  hero.setVelocity(vx, vy);

  if (vx !== 0 || vy !== 0) {
    hero.anims.play('hero-walk', true);
  } else {
    hero.anims.stop();
    hero.setFrame(0);
  }
}

/**
 * Moves the hero in the direction you tap, based on hero's position.
 * Tap above = move up, tap below = move down, etc.
 * (Only mobile devices)
 * @param {mainScene} scene - (this)
 */
function heroTouchMovements(scene) {
  scene.input.on('pointerdown', (pointer) => {
    let dx = pointer.x - hero.x;
    let dy = pointer.y - hero.y;

    let length = Math.sqrt(dx * dx + dy * dy);

    dx = dx / length;
    dy = dy / length;

    if (dx < 0) {
      hero.setFlipX(true);
    } else if (dx > 0) {
      hero.setFlipX(false);
    }

    hero.setVelocity(dx * heroSpeed, dy * heroSpeed);
    hero.anims.play('hero-walk', true);
  });

  scene.input.on('pointerup', () => {
    hero.setVelocity(0, 0);
    hero.anims.stop();
    hero.setFrame(0);
  });

  scene.input.on('pointerout', () => {
    hero.setVelocity(0, 0);
    hero.anims.stop();
    hero.setFrame(0);
  });
}

/**
 * Moves all monsters every frame.
 * When a monster hits a wall or door, it immediately picks a new random direction
 */
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

/**
 * Sets a random direction for the monster.
 * @param {*} monster
 */
function monsterRandomDirection(monster) {
  const mSpeed = monster.monsterSpeed || 80;
  const directions = [
    { dx: mSpeed, dy: 0 },
    { dx: -mSpeed, dy: 0 },
    { dx: 0, dy: mSpeed },
    { dx: 0, dy: -mSpeed },
    { dx: mSpeed, dy: mSpeed },
    { dx: -mSpeed, dy: mSpeed },
    { dx: mSpeed, dy: -mSpeed },
    { dx: -mSpeed, dy: -mSpeed },
  ];
  const dir = directions[Math.floor(Math.random() * directions.length)];
  monster.dx = dir.dx;
  monster.dy = dir.dy;
}

/** Mixes up the three key values and gives one to each chest.
 * Adds a 'keyID' to every chest in the group.
 * @param {*} this.chests
 */
function generateKeys(chestsGroup) {
  const keys = [1, 2, 0];
  Phaser.Utils.Array.Shuffle(keys);

  const chests = chestsGroup.getChildren();

  chests.forEach((chest, i) => {
    chest.setData('keyID', keys[i]);
  });
}

/**
 * When the hero touches a chest:
 * - If the chest has a key, the hero collects it, sees a message, and the chest is removed from the map.
 * - If there is no key, the hero sees a message that the chest is empty.
 * @param {Object} hero
 * @param {Object} chest
 */
function heroGetKey(hero, chest) {
  const keyID = Number(chest.getData('keyID'));
  const scene = hero.scene;

  if (keyID === 1 || keyID === 2) {
    showMessage(scene, 'You have got a key!', chest.x, chest.y);
    heroKeys.push(keyID);
    chest.setData('keyID', 0);
    chest.destroy();
  } else {
    showMessage(scene, 'The chest is empty!', chest.x, chest.y);
  }
}

/**
 * Checks if the hero can open the door.
 * If the hero has the right key, the door opens and a message appears.
 * If not, a message tells the player they need the key or that the key does not fit.
 * @param {Object} hero
 * @param {Object} door
 */

function heroOpenDoor(hero, door) {
  const scene = hero.scene;
  const doorID = Number(door.getData('doorID'));

  if (heroKeys.length === 0) {
    showMessage(scene, 'You need the key!', door.x, door.y);
    return;
  }

  if (!heroKeys.includes(doorID)) {
    showMessage(scene, 'The key does not work!', door.x, door.y);
    return;
  } else {
    showMessage(scene, 'You opened the door!', door.x, door.y);
    door.setTexture('door-open');
    door.body.checkCollision.none = true;
    return;
  }
}

/**
 * Shows a message on the screen at the given position for 4 seconds.
 *
 * @param {Object} scene
 * @param {string} text
 * @param {number} x
 * @param {number} y
 */
function showMessage(scene, text, x, y) {
  scene.messageText.setText(text);
  scene.messageText.setPosition(x, y - 0);
  scene.messageText.setVisible(true);

  clearTimeout(scene.messageTimer);
  scene.messageTimer = setTimeout(() => {
    scene.messageText.setVisible(false);
  }, 4000);
}

/**
 * Creates an invisible exit zones after each door.
 * When the hero touches one of these zones, the win scene starts.
 * @param {Phaser.Scene} scene
 * @param {Array} doorObjects
 * @param {*} hero
 */
function winZone(scene, doorObjects, hero) {
  scene.exitZones = scene.physics.add.staticGroup();

  doorObjects.forEach((obj) => {
    const doorID = obj.properties.find((p) => p.name === 'doorID')?.value;
    let exitX, exitY;

    if (doorID == 1) {
      exitX = obj.x;
      exitY = obj.y - 32;
    } else {
      exitX = obj.x;
      exitY = obj.y + 32;
    }

    const exitZone = scene.exitZones.create(exitX, exitY).setVisible(false);

    exitZone.setData('doorID', doorID);
  });

  scene.physics.add.overlap(hero, scene.exitZones, () => {
    scene.scene.start('winScene');
  });
}

// -------------------------------------> Start Game Scene

class startScene extends Phaser.Scene {
  constructor() {
    super('startScene');
  }

  preload() {
    this.load.image('main-bg', 'assets/phaser/background-image/main-background.png');
  }

  create() {
    this.add.sprite(0, 0, 'main-bg').setOrigin(0, 0).setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    this.add
      .text(this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 250, 'Dungeon Escape!', {
        fontFamily: '"Press Start 2P"',
        color: '#ffb600',
        fontSize: '38px',
        stroke: 'black',
        strokeThickness: 15,
      })
      .setOrigin(0.5);

    this.tweens.add({
      targets: this.add
        .text(this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 275, 'Click ENTER or Tap to play!', {
          fontFamily: '"Press Start 2P"',
          fontSize: '25px',
          fill: '#7B7B7B',
          stroke: 'black',
          strokeThickness: 10,
        })
        .setOrigin(0.5),
      alpha: 0,
      yoyo: true,
      repeat: -1,
      duration: 500,
    });

    this.input.once('pointerdown', () => this.scene.start('mainScene'));
    this.input.keyboard.once('keydown-ENTER', () => this.scene.start('mainScene'));
  }
}

// -------------------------------------> Main Scene

class mainScene extends Phaser.Scene {
  constructor() {
    super('mainScene');
  }

  preload() {
    // Tiled Map
    this.load.tilemapTiledJSON('dungeon-map', 'assets/phaser/tilesets/dungeon-map.tmj'); // Personalized map made by ME with Tiled! :D

    // Sprites map
    this.load.spritesheet('floor', 'assets/phaser/tilesets/floor.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('walls', 'assets/phaser/tilesets/walls.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('walls-doors', 'assets/phaser/tilesets/walls-doors.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('mixed', 'assets/phaser/tilesets/mixed.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('chest', 'assets/phaser/tilesets/chest.png', { frameWidth: 16, frameHeight: 15 });
    this.load.spritesheet('door-close', 'assets/phaser/tilesets/door-close.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('door-open', 'assets/phaser/tilesets/door-open.png', { frameWidth: 32, frameHeight: 32 });

    // Sprites Hero and Monster
    this.load.spritesheet('hero', 'assets/phaser/sprites/hero.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('monster', 'assets/phaser/sprites/monster.png', { frameWidth: 32, frameHeight: 32 });
  }

  create() {
    // Map and layers
    const map = this.make.tilemap({ key: 'dungeon-map' });
    const lFloor = map.addTilesetImage('floor');
    const lMixed = map.addTilesetImage('mixed');
    const lWalls = map.addTilesetImage('walls');
    const lWallsDoors = map.addTilesetImage('walls-doors');

    map.createLayer('ground', [lFloor, lMixed]);
    const wallsLayer = map.createLayer('walls', [lMixed, lWalls, lWallsDoors]);

    // Objects: chests
    heroKeys = [];
    this.chests = this.physics.add.staticGroup();
    const chestObjects = map.getObjectLayer('chests').objects;

    chestObjects.forEach((obj) => {
      const chest = this.chests.create(obj.x, obj.y, 'chest');
      chest.setData('chestID', obj.properties.find((p) => p.name === 'chestID')?.value);
      chest.setData('keyID', obj.properties.find((p) => p.name === 'keyID')?.value || 0);
    });

    // Objects: doors

    this.doors = this.physics.add.staticGroup();
    const doorObjects = map.getObjectLayer('doors').objects;

    doorObjects.forEach((obj) => {
      const door = this.doors.create(obj.x, obj.y, 'door-close');
      door.setData('doorID', obj.properties.find((p) => p.name === 'doorID')?.value);
    });

    // Message (doors and chests)
    this.messageText = this.add
      .text(0, 0, '', {
        fontFamily: '"Press Start 2P"',
        fontSize: '14px',
        color: '#fff',
        backgroundColor: '#222',
        padding: { x: 10, y: 5 },
        align: 'center',
      })
      .setOrigin(0.5, 1)
      .setDepth(100)
      .setVisible(false);

    // Hero
    hero = this.physics.add.sprite(60, 60, 'hero');
    hero.body.setSize(18, 27);
    hero.body.setOffset(7, 6);

    this.anims.create({
      key: 'hero-walk',
      frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 7 }),
      frameRate: 9,
      repeat: -1,
    });

    //Hero winScene

    winZone(this, doorObjects, hero);

    // Hero movements
    if (isMobileDevice()) {
      heroTouchMovements(this);
    } else {
      keyboardCursors = this.input.keyboard.createCursorKeys();
      keyboardWASD = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
      });
    }

    // Monsters
    monsters = this.add.group();

    this.anims.create({
      key: 'monster-walk',
      frames: this.anims.generateFrameNumbers('monster', { start: 0, end: 3 }),
      frameRate: 9,
      repeat: -1,
    });

    // Monsters difficulty (1-2-3)
    let monsterSpeed = 70;
    let numMonsters = 4;
    if (window.gameDifficulty === 2) {
      numMonsters = 6;
      monsterSpeed = 100;
    } else if (window.gameDifficulty === 3) {
      numMonsters = 8;
      monsterSpeed = 130;
    }

    const allPositions = [
      { x: 680, y: 110, dir: 'h' },
      { x: 743, y: 550, dir: 'v' },
      { x: 115, y: 430, dir: 'h' },
      { x: 200, y: 300, dir: 'h' },
      { x: 400, y: 100, dir: 'v' },
      { x: 700, y: 400, dir: 'h' },
      { x: 350, y: 200, dir: 'v' },
      { x: 600, y: 300, dir: 'h' },
    ];

    for (let i = 0; i < numMonsters; i++) {
      const pos = allPositions[i];
      const monster = this.physics.add.sprite(pos.x, pos.y, 'monster');
      monster.body.setSize(18, 27);
      monster.body.setOffset(7, 6);
      monster.anims.play('monster-walk');
      this.physics.add.collider(monster, wallsLayer);
      monster.monsterSpeed = monsterSpeed;
      monsters.add(monster);
    }

    // Collision property
    wallsLayer.setCollisionByProperty({ collides: true });

    // Hero collision
    this.physics.add.collider(hero, wallsLayer);
    this.physics.add.collider(hero, monsters, () => {
      this.scene.start('gameOverScene');
    });

    this.physics.add.overlap(hero, this.chests, heroGetKey);
    this.physics.add.collider(hero, this.doors, heroOpenDoor);

    // Monster collision
    this.physics.add.collider(monsters, wallsLayer);
    this.physics.add.collider(monsters, this.chests);
    this.physics.add.collider(monsters, this.doors);
    this.physics.add.collider(monsters, this.chests);
    this.physics.add.collider(monsters, monsters, (monster1, monster2) => {
      monsterRandomDirection(monster1);
      monsterRandomDirection(monster2);
    });

    generateKeys(this.chests);
  }

  update() {
    if (!isMobileDevice()) {
      heroMove();
    }

    monsterMove();
  }
}

// -------------------------------------> Win Scene

class winScene extends Phaser.Scene {
  constructor() {
    super('winScene');
  }

  preload() {
    this.load.image('win-bg', 'assets/phaser/background-image/win-background.png');
  }

  create() {
    this.add
      .image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'win-bg')
      .setOrigin(0.5)
      .setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    // Main victory text
    this.add
      .text(this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 250, 'You have escaped the Dungeon!!', {
        fontFamily: '"Press Start 2P"',
        fontSize: '25px',
        fill: '#ffb600',
        stroke: '#000',
        strokeThickness: 6,
        align: 'center',
      })
      .setOrigin(0.5);

    this.tweens.add({
      targets: this.add
        .text(this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 275, 'Click ENTER or Tap to play gain!', {
          fontFamily: '"Press Start 2P"',
          fontSize: '25px',
          fill: '#7B7B7B',
          stroke: 'black',
          strokeThickness: 10,
        })
        .setOrigin(0.5),
      alpha: 0,
      yoyo: true,
      repeat: -1,
      duration: 500,
    });

    this.input.once('pointerdown', () => this.scene.start('mainScene'));
    this.input.keyboard.once('keydown-ENTER', () => this.scene.start('mainScene'));
  }
}

// -------------------------------------> Game Over Scene

class gameOverScene extends Phaser.Scene {
  constructor() {
    super('gameOverScene');
  }

  preload() {
    this.load.image('gameover-bg', 'assets/phaser/background-image/gameover-background.png');
  }

  create() {
    this.add
      .image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'gameover-bg')
      .setOrigin(0.5)
      .setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    this.add
      .text(
        this.sys.game.config.width / 2,
        this.sys.game.config.height / 2 - 250,
        'You have been eaten by the monster! \nGAME OVER',
        {
          fontFamily: '"Press Start 2P"',
          color: 'red',
          fontSize: '20px',
          stroke: 'black',
          strokeThickness: 10,
          align: 'center',
        }
      )
      .setOrigin(0.5);

    this.tweens.add({
      targets: this.add
        .text(
          this.sys.game.config.width / 2,
          this.sys.game.config.height / 2 + 275,
          'Enter the dungeon again and try to escape!',
          {
            fontFamily: '"Press Start 2P"',
            fontSize: '18px',
            fill: '#7B7B7B',
            stroke: 'black',
            strokeThickness: 10,
            align: 'center',
          }
        )
        .setOrigin(0.5),
      alpha: 0,
      yoyo: true,
      repeat: -1,
      duration: 500,
    });

    this.input.once('pointerdown', () => this.scene.start('mainScene'));
    this.input.keyboard.once('keydown-ENTER', () => this.scene.start('mainScene'));
  }
}

// -------------------------------------> Phaser Configuration

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 608,
  parent: 'game-container',
  physics: { default: 'arcade', arcade: { debug: false } },
  scene: [startScene, mainScene, winScene, gameOverScene],
};

new Phaser.Game(config);
