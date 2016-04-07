/**
 * Created by wizard on 16/3/15.
 */
//var PIXI = require("pixi.js");
//PIXI.spine = require("pixi-spine");

import defines from "./../game-defines.js"
import {AnimationFactor, Director} from "../utility/imports.js"

const PetActor = function (options) {
  var that = {};

  that.init = function (container) {

    var ani = AnimationFactor.createAnimation(options);

    ani.playLoop('idle');

    container.addChild(ani.node);

    ani.node.interactive = true;

    ani.node.on('click', function() {
      ani.playOnce('upgrade', function () {
        ani.playLoop("idle");
      });
    });

    that.node = ani.node;
  }
  
  that.update = function (dt) {
    
  }

  return that;
}

export default PetActor;