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
        fontSize: '40px',
        fill: '#344a5a',
        stroke: 'black',
        strokeThickness: 6,
      })
      .setOrigin(0.5);

    this.add
      .text(this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 275, 'Click or Tap to play!', {
        font: '28px Arial',
        fill: '#fff',
        stroke: '#000',
        strokeThickness: 4,
      })
      .setOrigin(0.5);

    this.input.once('pointerdown', () => this.scene.start('mainScene'));
    this.input.keyboard.once('keydown-ENTER', () => this.scene.start('mainScene'));
  }
}

// -------------------------------------> Main Scene

class mainScene extends Phaser.Scene {
  constructor() {
    super('mainScene');
  }

  preload() {}
  create() {}
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
