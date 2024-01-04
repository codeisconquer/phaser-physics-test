import Align from "../classes/utility/Align";
import AlignGrid from "../classes/utility/AlignGrid";
import FlatButton from "../classes/ui/FlatButton";
import Singleton from "../classes/mc/Singleton";

export default class ScenePhysics extends Phaser.Scene {
    constructor() {
        super('ScenePhysics');
    }
    preload() {
        this.load.image("apple", "images/apple.png");
        this.load.image("ground", "images/ground.png");
    }
    create() {

        
        

        this.apple = this.physics.add.sprite(240, 300, 'apple');
        this.apple.setGravityY(200);
        this.apple.setBounce(0, .5);

        this.ground = this.physics.add.sprite(240, 600, 'ground');
        this.ground.setImmovable();
        this.physics.add.collider(this.apple, this.ground);

        this.input.on('pointerdown', this.moveApple, this);
    }

    moveApple() {

        this.apple.setVelocity(0, -100);
    }

    update() { }
}