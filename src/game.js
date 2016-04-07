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
import petHome from './game/pet-home/pet-home-world'

window.onload = function () {
  // create an new instance of a pixi stage

  let director = Director.create(defines.Canvas.width, defines.Canvas.height);
  EZGUI.setRenderer(director.renderer);

  ResourceManager.setResPath(defines.resPath);
  ResourceManager.loadUI(resources.json_kenney_theme, function () {



    const  testWorld = TestWorld();
    testWorld.init();
    director.startWorld(testWorld);
    Helper.scaleToWindow(director.renderer, director.runningWorld.node);
    SRequest.get(defines.gameURL, "s/Info/GetBag", {test: 1, name:"haha"}, function (data) {
      console.log('resp 1' + JSON.stringify(data) );
    });

    SRequest.post(defines.gameURL, "s/Info/RenamePet", {"pet_id": 1000}, function (data) {
      console.log('resp 2' + JSON.stringify(data) );
    })
    window.addEventListener("resize", function(event){
      Helper.scaleToWindow(director.renderer, director.runningWorld.node);
    });

    PIXI.CanvasGraphics
  });



}
