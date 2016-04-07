/**
 * Created by John on 16/4/1.
 */
import {Inherited, BaseWorld, ResourceManager, Director, SRequest, Helper} from "../utility/imports.js"
import PetActor from "../actor/pet-actor.js"
import defines from "../game-defines.js"
import gameGlobal from "../game-global.js"
import DefenseLogLayer from "./defenseLog-layer.js"
import DefenseLogUI from "../ui/defenseLog-ui.js"
import res from '../resources.js'

export default function CrusadeWorld() {
    let that = Inherited(BaseWorld() );
    let director = Director.sharedDirector();
    that.inheritOn('init', function () {
        ResourceManager.load(res.jpg_crusade_bg, function () {
            let bg = Helper.createSprite(res.jpg_crusade_bg);
            bg.zorder = 0;
            that.node.addChild(bg);
            Helper.reorderNode(that.node);
        });

        //ResourceManager.load(res.json_cat_5, function (res, name) {
        //    var options = {
        //        type: "spine",
        //        spineData: res.spineData
        //    }
        //
        //    var petActor = PetActor(options);
        //    petActor.init(that.node);
        //    petActor.node.position.x = 120;
        //    petActor.node.position.y = 750;
        //    petActor.node.zorder = 4;
        //
        //    Helper.reorderNode(that.node);
        //});

        SRequest.get(defines.gameURL, "s/Info/GetDefendRecords", {"pet_id": 10000}, function (data) {
            console.log('log-' + JSON.stringify(data));

            var ui = DefenseLogUI();
            ui.createUI(data);
            var defenseLog = DefenseLogLayer(ui.layout);

            defenseLog.init();
            defenseLog.node.zorder = 5;
            defenseLog.add2World(that);

            Helper.reorderNode(that.node);
        });

        return true;
    });

    that.inheritOn('update', function (dt) {
    });

    return that;
}