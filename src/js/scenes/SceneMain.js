import Road from "../classes/Road";
import { G } from "../index";
import AlignGrid from "../classes/utility/AlignGrid";
import SoundButtons from "../classes/ui/SoundButtons";
import ScoreBox from "../classes/comps/ScoreBox";
import Singleton from "../classes/mc/Singleton";
import FlatButton from "../classes/ui/FlatButton";

export default class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() { }
    create() {
        const s = new Singleton();
        const emitter = s.emitter;
        const model = s.model;
        const mediaManager = s.mediaManager;


        this.alignGrid = new AlignGrid({
            scene: this,
            rows: 11,
            cols: 11
        });
        this.alignGrid.showNumbers();
        
        var btnStart = new FlatButton({ scene: this, emitter: emitter, model: model, key: 'button1', 
            text: 'Fire', event: 'start_game' });

        
        this.alignGrid.placeAtIndex(93, btnStart);
        emitter.on('start_game', this.onClick, this);

        var btnStart2 = new FlatButton({ scene: this, emitter: emitter, model: model, key: 'button1', text: 'End game', event: 'end_game' });
        this.alignGrid.placeAtIndex(60, btnStart2);
        
        emitter.on('end_game', this.onEnd, this);


    }

    onEnd() {
        this.scene.start('SceneOver');
    }
    onClick() {

        console.log('click...', new Date())
    }
    update() { }

}