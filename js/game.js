// -------------------------------------> Global Variables

let hero;
let monsters;

// -------------------------------------> Global Functions

function heroMove() {}

function monsterMove() {}

function generateKeys() {}

function heroGetKey() {}

function openDoor() {}

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
  scene: [mainScene],
};

new Phaser.Game(config);
