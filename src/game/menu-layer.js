/**
 * Created by wizard on 16/3/31.
 */
import {BaseLayer, Inherited,Director} from "../utility/imports.js"
import mainUI from "../ui/main-ui.js"
import gameGlobal from "../game-global.js"
import InfoLayer from "./info-layer.js"
import Test2World from "./test2-world.js"
const MenuLayer = function () {
    let that = Inherited(BaseLayer(mainUI, 'kenney'));
    let director = Director.sharedDirector();
    that.inheritOn('init', function () {

        EZGUI.components.btn1.on('click', function (event) {
            //gameGlobal.events.fire("startWorld2");

            var infoLayer = InfoLayer();
            infoLayer.init();
            infoLayer.add2World(that.owner);
        });

        EZGUI.components.btn2.on('click', function (event) {
            //gameGlobal.events.fire("startWorld2");
            const test2World = Test2World();
            test2World.init();
            director.startWorld(test2World);
        });

        return true;
    });

    return that;
};
export default MenuLayer;
//module.exports = MenuLayer;