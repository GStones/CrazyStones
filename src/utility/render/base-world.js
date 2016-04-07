/**
 * Created by wizard on 16/3/30.
 */

import Helper from "../helper.js"

const BaseWorld = function () {
  let that = {};

  that.node = null;

  that.init = function () {
    that.node = new PIXI.Container();
    return true;
  }

  that.update = function (dt) {
    //console.log("update now:" + dt );
  }

  that.lock2Layer = function (layer) {
    Helper.reorderNode(that.node);

    for(let i=0; i<that.node.children.length; ++i) {
      if(that.node.children[i] == layer.node) {
        break;
      }
      that.node.children[i].interactiveChildren = false;
    }
  }

  that.unlock2Layer = function (layer) {

    //that.node.interactiveChildren = true;
    for(let i=0; i<that.node.children.length; ++i) {
      if(that.node.children[i] == layer.node) {
        break;
      }
      that.node.children[i].interactiveChildren = true;
    }

    that.node.removeChild(layer.node);
  }

  return that;
}
export default BaseWorld;