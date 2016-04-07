/**
 * Created by wizard on 16/3/30.
 */
import {Inherited, BaseWorld, resourceManager, Director} from "../utility/imports.js"
import PetActor from "../actor/pet-actor.js"
import defines from "../game-defines.js"
import gameGlobal from "../game-global.js"
import TestWorld from "./test-world.js"

const Test2World = function () {
    let that = Inherited(BaseWorld());
    let director = Director.sharedDirector();
    var _petActor = null;
    that.inheritOn('init', function () {
        var options = {
            type: "frame",
            animates: {
                idle: {
                    pre: "stand",
                    start: 1,
                    end: 15,
                    speed: 0.5
                },
                upgrade: {
                    pre: "weishi",
                    start: 1,
                    end: 8
                }
            }
        }

        _petActor = PetActor(options);
        _petActor.init(that.node);
        _petActor.node.position.x = 240;
        _petActor.node.position.y = 400;

        _petActor.node
            .on('touchend', function () {
            const testWorld = TestWorld();
            testWorld.init();
            director.startWorld(testWorld);
        })
            .on('click', function () {
                const testWorld = TestWorld();
                testWorld.init();
                director.startWorld(testWorld);
            })
    });

    that.inheritOn('update', function (dt) {
        if (_petActor) {
            _petActor.update(dt);
        }
    });

    return that;
}
export default Test2World;