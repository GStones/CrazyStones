/**
 * Created by wizard on 16/3/30.
 */

import {Inherited, BaseWorld, ResourceManager, Director, Helper} from "../utility/imports.js"
import PetActor from "../actor/pet-actor.js"
import defines from "../game-defines.js"
import MenuLayer from "./menu-layer.js"
import Test2World from "./test2-world.js"
import resource from '../resources'
import SkillLayer from "./skill-list-layer.js";
const TestWorld =  function TestWorld() {
  let that = Inherited(BaseWorld() );

  that.inheritOn('init', function () {

    ResourceManager.load(resource.json_cat_5, function (res, name) {
      var options = {
        type: "spine",
        spineData: res.spineData
      }

      var petActor = PetActor(options);
      petActor.init(that.node);
      petActor.node.position.x = 120;
      petActor.node.position.y = 750;
      petActor.node.zorder = 4;

      Helper.reorderNode(that.node);
    });

    ResourceManager.loadList([resource.json_pet1,resource.json_pet2,resource.json_pet3],
      function () {
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

        var petActor = PetActor(options);
        petActor.init(that.node);
        petActor.node.position.x = 360;
        petActor.node.position.y = 750;
        petActor.node.zorder = 4;
        Helper.reorderNode(that.node);
      }
    );

    var menu = MenuLayer();
    menu.init();
    menu.add2World(that);

    let graphics = new PIXI.Graphics();
    graphics.beginFill(0xff0000);
    graphics.lineStyle(10, 0xffd900, 1);
    graphics.drawCircle(200,200,100);
    graphics.endFill();
    that.node.addChild(graphics);
    //ResourceManager.load(resource.skill_ui, function (res, name) {
    //  var list = [
    //    {id: 0},
    //    {id: 1},
    //    {id: 2},
    //    {id: 3},
    //    {id: 4}
    //  ];
    //  let skillLayer = SkillLayer(list);
    //  skillLayer.init();
    //  skillLayer.add2World(that);
    //});

    Helper.reorderNode(that.node);

    return true;
  });

  that.inheritOn('update', function (dt) {

  });

  return that;
}

export default TestWorld;