/**
 * Created by wizard on 16/3/7.
 */

//var PIXI = require("pixi.js");

import {ResourceManager, Helper, Director, SRequest} from "./utility/imports.js"
import TestWorld from "./game/test-world.js"
import Test2World from "./game/test2-world.js"
import CrusadeWorld from "./game/crusade-world.js"
import gameGlobal from "./game-global.js"
import defines from "./game-defines.js"
import resources from "./resources.js"
import CrazyStone from './game/crazy-stones/crazy-stone-world'

window.onload = function () {
  // create an new instance of a pixi stage

  let director = Director.create(defines.Canvas.width, defines.Canvas.height);
  EZGUI.setRenderer(director.renderer);

  ResourceManager.setResPath(defines.resPath);
  ResourceManager.loadUI(resources.json_kenney_theme, function () {

    const  testWorld = CrazyStone();
    testWorld.init();
    director.startWorld(testWorld);
    Helper.scaleToWindow(director.renderer, director.runningWorld.node);

    window.addEventListener("resize", function(event){
      Helper.scaleToWindow(director.renderer, director.runningWorld.node);
    });

  });

}



