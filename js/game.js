// -------------------------------------> Global Variables

// Hero and Monster
let hero;
let monsters = [];
let monsterPositions = [
  { x: 680, y: 110, dir: 'h' },
  { x: 743, y: 550, dir: 'v' },
  { x: 115, y: 430, dir: 'h' },
  { x: 200, y: 300, dir: 'h' },
];

// Hero movements
let keyboardCursors;
let keyboardWASD;

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
  const speed = 250;

  hero.setVelocity(0);

  let left = keyboardCursors && (keyboardCursors.left.isDown || keyboardWASD.left.isDown);
  let right = keyboardCursors && (keyboardCursors.right.isDown || keyboardWASD.right.isDown);
  let up = keyboardCursors && (keyboardCursors.up.isDown || keyboardWASD.up.isDown);
  let down = keyboardCursors && (keyboardCursors.down.isDown || keyboardWASD.down.isDown);

  let vx = 0;
  let vy = 0;
  if (left) vx = -speed;
  else if (right) vx = speed;
  if (up) vy = -speed;
  else if (down) vy = speed;

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
  const speed = 120;

  scene.input.on('pointerdown', (pointer) => {
    let dx = pointer.x - hero.x;
    let dy = pointer.y - hero.y;

    let length = Math.sqrt(dx * dx + dy * dy);

    dx = dx / length;
    dy = dy / length;

    hero.setVelocity(dx * speed, dy * speed);
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

function generateKeys() {}

function heroGetKey() {}

function openDoor() {}

// -------------------------------------> Start Game Scene

class startScene extends Phaser.Scene {
  constructor() {
    super('startScene');
  }

  preload() {
    this.load.image('backgroundImage', 'assets/phaser/background-image/background-image.png');
  }

  create() {
    this.add
      .sprite(0, 0, 'backgroundImage')
      .setOrigin(0, 0)
      .setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

    this.add
      .text(this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 250, 'Dungeon Escape!', {
        fontFamily: '"Press Start 2P"',
        fontSize: '38px',
        fill: '#7B7B7B',
        stroke: 'black',
        strokeThickness: 15,
      })
      .setOrigin(0.5);

    this.tweens.add({
      targets: this.add
        .text(this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 275, 'Click or Tap to play!', {
          fontFamily: '"Press Start 2P"',
          fontSize: '18px',
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
    this.load.spritesheet('door-close', 'assets/phaser/tilesets/door-close.png', { frameWidth: 42, frameHeight: 35 });
    this.load.spritesheet('door-open', 'assets/phaser/tilesets/door-open.png', { frameWidth: 42, frameHeight: 35 });

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
    this.chests = this.physics.add.staticGroup();
    const chestObjects = map.getObjectLayer('chests').objects;

    chestObjects.forEach((obj) => {
      const chest = this.chests.create(obj.x, obj.y, 'chest').setOrigin(0, 1);
      chest.setData('chestID', obj.properties.find((p) => p.name === 'chestID')?.value);
      chest.setData('keyID', obj.properties.find((p) => p.name === 'keyID')?.value || 0);
      chest.body.setSize(16, 15);
      chest.body.setOffset(8, -8);
    });

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

    monsterPositions.forEach((pos) => {
      const monster = this.physics.add.sprite(pos.x, pos.y, 'monster');
      monster.body.setSize(18, 27);
      monster.body.setOffset(7, 6);
      monster.anims.play('monster-walk');
      this.physics.add.collider(monster, wallsLayer);
      monsters.add(monster);
    });

    // Collison property
    wallsLayer.setCollisionByProperty({ collides: true });

    // Hero collision

    this.physics.add.collider(hero, wallsLayer);
    this.physics.add.collider(hero, this.chests);
    this.physics.add.collider(hero, monsters);

    // Monster collision
    this.physics.add.collider(monsters, wallsLayer);
    this.physics.add.collider(monsters, this.chests);
    this.physics.add.collider(monsters, monsters);
  }

  update() {
    if (!isMobileDevice()) {
      heroMove();
    }

    monsterMove();
  }
}

// -------------------------------------> Phaser Configuration

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 608,
  parent: 'game-container',
  physics: { default: 'arcade', arcade: { debug: true } },
  scene: [startScene, mainScene],
};

new Phaser.Game(config);
