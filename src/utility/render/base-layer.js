/**
 * Created by wizard on 16/3/30.
 */

const BaseLayer =  function (layout, theme) {
  let that = {};

  that.node = EZGUI.create(layout, theme);
  that.node.zorder = 0;

  that.owner = null;

  that.init = function () {

    return true;
  };

  that.add2World = function (world) {
    world.node.addChild(that.node);
    that.owner = world;
  }

  that.removeFromWorld = function () {
    that.owner.node.removeChild(that.node);
    that.owner = null;
  }


  return that;
}
export default BaseLayer;