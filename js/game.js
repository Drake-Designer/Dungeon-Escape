// -------------------------------------> Global Variables

let hero;
let monsters;

// -------------------------------------> Global Functions

function heroMove() {}

function monsterMove() {}

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

    // Sprites
    this.load.spritesheet('floor', 'assets/phaser/tilesets/floor.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('walls', 'assets/phaser/tilesets/walls.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('walls-doors', 'assets/phaser/tilesets/walls-doors.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('mixed', 'assets/phaser/tilesets/mixed.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('hero', 'assets/sprites/hero.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('monster', 'assets/sprites/monster.png', { frameWidth: 32, frameHeight: 32 });
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
    const doorClose = map.createLayer('door-close', [lWallsDoors]);
    const doorOpen = map.createLayer('door-open', [lWallsDoors]);
    doorOpen.setDepth(10);
  }

  update() {}
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
