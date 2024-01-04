import Phaser from 'phaser';
import SceneLoad from "./scenes/SceneLoad";
import SceneMain from "./scenes/SceneMain";
import SceneOver from "./scenes/SceneOver";
import SceneTitle from "./scenes/SceneTitle";
import ScenePhysics from "./scenes/ScenePhysics";
import Constants from "./common/Constants";


export const G = new Constants();
export var game;
export var mediaManager;

var isMobile = navigator.userAgent.indexOf("Mobile");
if (isMobile == -1) {
  isMobile = navigator.userAgent.indexOf("Tablet");
}

var config;

if (isMobile == -1) {
  config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    parent: 'phaser-game',
    physics: {
      default: 'arcade',
      arcade: {
          debug: true
      }
  },
    scene: [ScenePhysics],
  };
} else {
  config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'phaser-game',
    physics: {
      default: 'arcade',
      arcade: {
          debug: true
      }
  },
    scene: [ScenePhysics],

  };
}

window.addEventListener("load", () => {
  game = new Phaser.Game(config);
});
